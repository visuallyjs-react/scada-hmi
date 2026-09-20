import {
    ControlsComponent,
    DiagramComponent,
    DiagramPaletteComponent,
    DiagramProvider
} from "@visuallyjs/browser-ui-react"
import diagramOptions from "./diagram-options.ts";
import Inspector from "./Inspector"
import modelOptions from "./model-options.ts";

export default function App({url}:{url?:string}) {

    return <div className="vjs-shmi-container">
            <DiagramProvider>
                <div style={{display:"flex", flex: 1, position:"relative"}}>
                    <DiagramComponent options={diagramOptions} modelOptions={modelOptions} url={url}/>
                    <ControlsComponent/>
                    <Inspector/>
                    <div className="vjs-palette">
                    <DiagramPaletteComponent iconSize={{width:120, height:120}} showLabels={true}/>
                    </div>
                </div>
            </DiagramProvider>
            </div>
}
