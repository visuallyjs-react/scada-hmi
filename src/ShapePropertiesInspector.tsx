import { isNode, isString, ShapePropertyValueDefinition, Vertex } from "@visuallyjs/browser-ui";
import {useInspector} from "@visuallyjs/browser-ui-react";

const MAX_RADIOS = 7;
const TRUE_FALSE = ["True", "False"]
const ON_OFF = ["On", "Off"]

/**
 * Props for the ShapePropertiesInspector
 * @group Props
 */
export interface ShapePropertiesInspectorProps {
    /**
     * vertex to inspector
     */
    vertex: Vertex | null
    /**
     * The maximum number of radio buttons to show for a value list before switching to a select dropdown. Defaults to 7.
     */
    maxRadios?:number
}

function getBooleanLabel(prop:any, value:boolean) {
    const labels = prop.booleanLabels || TRUE_FALSE
    return labels[value ? 0 : 1]
}

function getShapePropertyValueLabel(v:string|ShapePropertyValueDefinition):string {
    return isString(v) ? v : (v as ShapePropertyValueDefinition).label
}

function getShapePropertyValueValue(v:string|ShapePropertyValueDefinition):string {
    return isString(v) ? v : (v as ShapePropertyValueDefinition).value
}

/**
 * Inspector for the properties of a shape. This component will likely be moved into the VisuallyJs React integration in an upcoming release.
 * @param vertex
 * @constructor
 */
export function ShapePropertiesInspector({ vertex, maxRadios }:ShapePropertiesInspectorProps) {
    if (!vertex || !isNode(vertex)) return null;

    const { type, category } = vertex.data;
    if (!type || !category) return null;

    maxRadios = maxRadios == null ? MAX_RADIOS : maxRadios

    const inspector = useInspector()
    function resolveShapeDef() {
        if (inspector == null) return null
        const shapeLibrary = inspector.$ui.getShapeLibrary();
        const shapeSet = shapeLibrary.getShapeSet(category);
        if (!shapeSet) return null;
        return shapeSet.shapes.find(s => s.type === type)
    }

    const shapeDef = resolveShapeDef()
    if (!shapeDef || !shapeDef.properties) return null;

    return (
        <>
            {shapeDef.properties.map((prop:any) => {
                const isBoolean = prop.type === 'boolean';
                const hasValues = prop.values && prop.values.length > 0;
                const useRadio = hasValues && prop.editor !== 'select' && prop.values.length <= maxRadios;

                return (
                    <div key={prop.id} className="vjs-inspector-field">
                        {(!isBoolean || prop.editor === 'select' || prop.editor === 'radio') && (
                            <label className="vjs-inspector-property-label">{prop.label || prop.id}</label>
                        )}

                        {prop.type === 'string' && (
                            hasValues ? (
                                useRadio ? (
                                    <div className="vjs-radio-group">
                                        {prop.values.map((v:string|ShapePropertyValueDefinition) => (
                                            <label key={getShapePropertyValueLabel(v)}>
                                                <input type="radio" name={prop.id} vjs-att={prop.id} value={getShapePropertyValueValue(v)} /> {getShapePropertyValueLabel(v)}
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <select vjs-att={prop.id}>
                                        {prop.values.map((v: any) => <option key={v.value} value={v.value}>{v.label}</option>)}
                                    </select>
                                )
                            ) : (
                                <input type="text" vjs-att={prop.id} placeholder={prop.description} />
                            )
                        )}

                        {prop.type === 'number' && (
                            hasValues ? (
                                useRadio ? (
                                    <div className="vjs-radio-group">
                                        {prop.values.map((v:string|ShapePropertyValueDefinition) => (
                                            <label key={getShapePropertyValueLabel(v)}>
                                                <input type="radio" vjs-att={prop.id} value={getShapePropertyValueValue(v)} /> {getShapePropertyValueLabel(v)}
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <select vjs-att={prop.id}>
                                        {prop.values.map((v:string|ShapePropertyValueDefinition) => <option key={getShapePropertyValueLabel(v)} value={getShapePropertyValueValue(v)}>{getShapePropertyValueLabel(v)}</option>)}
                                    </select>
                                )
                            ) : (
                                <input type="number" vjs-att={prop.id} placeholder={prop.description} min={prop.min} max={prop.max} />
                            )
                        )}

                        {isBoolean && (
                            prop.editor === 'select' ? (
                                <select vjs-att={prop.id} vjs-datatype="boolean" >
                                    <option value=""></option>
                                    <option value="true">{getBooleanLabel(prop, true)}</option>
                                    <option value="false">{getBooleanLabel(prop, false)}</option>
                                </select>
                            ) : prop.editor === 'radio' ? (
                                <div className="vjs-radio-group">
                                    <label><input type="radio" name={prop.id} vjs-att={prop.id} vjs-datatype="boolean"  value="true" /><span>{getBooleanLabel(prop, true)}</span></label>
                                    <label><input type="radio" name={prop.id} vjs-att={prop.id} vjs-datatype="boolean" value="false" /><span>{getBooleanLabel(prop, false)}</span></label>
                                </div>
                            ) : (
                                <label>
                                    <input type="checkbox" vjs-datatype="boolean" vjs-att={prop.id} /> {prop.label || prop.id}
                                </label>
                            )
                        )}

                        {['string', 'number', 'boolean'].indexOf(prop.type) === -1 && (
                            <input type="text" vjs-att={prop.id} placeholder={prop.description} />
                        )}
                        {prop.description && <div className="vjs-field-desc">{prop.description}</div>}
                    </div>
                )
            })}
        </>
    );
}
