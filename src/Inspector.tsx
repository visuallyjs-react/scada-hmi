import {
    InspectorComponent,
    useDiagram,
    ShapePropertiesInspector,
    EdgePropertyMappingsInspector
} from "@visuallyjs/browser-ui-react";
import {isEdge, isNode } from "@visuallyjs/browser-ui";
// import { ShapePropertiesInspector } from "./ShapePropertiesInspector";

/**
 * Component inspector. Shows a header and a label field for all components, then uses a shape properties
 * inspector to draw out the form on a per-component basis.
 * @return {React.JSX.Element}
 * @constructor
 */
export default function Inspector() {

    const diagram = useDiagram()

    return (
        <InspectorComponent>
            {(current, model) => {
                if (diagram != null && isNode(current)) {
                    return (
                        <div className="vjs-inspector-pane">
                                <div className="vjs-inspector-header">
                                    <div className="vjs-inspector-title">
                                        <h3>{current.data.label || current.data.type}</h3>
                                    </div>
                                    <button className="close-button" onClick={() => model.clearSelection()}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                                             strokeWidth="2" fill="none" strokeLinecap="round"
                                             strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                            <div className="vjs-inspector-properties">
                                <div className="vjs-inspector-field">
                                    <label className="vjs-inspector-property-label">Label</label>
                                    <input type="text" vjs-att="label" placeholder="Label"/>
                                </div>

                                <ShapePropertiesInspector vertex={current}/>
                            </div>
                        </div>
                    );
                }
                if (diagram != null && isEdge(current)) {
                    return <div className="vjs-inspector-pane"><EdgePropertyMappingsInspector/></div>
                }

                return null;
            }}
        </InspectorComponent>
    );
}
