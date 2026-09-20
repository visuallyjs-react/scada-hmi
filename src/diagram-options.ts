import {INSTRUMENTATION_SHAPES} from "./isa-5.1-instrumentation";
import {FLUID_HANDLING_SHAPES} from "./fluid-handling-shapes";
import {HEATING_COOLING_SHAPES} from "./heating-cooling-shapes";
import {getEdgeMappings} from "./edge-mappings";

import { CONNECTOR_TYPE_ORTHOGONAL, type LabelPosition } from "@visuallyjs/browser-ui"

const options = {
    shapes:[INSTRUMENTATION_SHAPES(), FLUID_HANDLING_SHAPES(), HEATING_COOLING_SHAPES()],
    zoomToFit:true,
    edges:{
        layerIndex:0,
        allowUnattached:false,
        propertyMappings:getEdgeMappings(),
        connector:{
            type:CONNECTOR_TYPE_ORTHOGONAL,
            options:{
                cornerRadius:3
            }
        },
        lineStyle:{
            color:"#A9A9A9",
            lineWidth:3
        }
    },
    grid:{
        size:{
            width:20, height:20
        }
    },
     cells:{
        labelPosition:"bottom" as LabelPosition,
         labelBackground:{
            fill:"#636363"
         }
     },
    mediator:{
        canRotate: () => false,
        //canResize:() => false
    }
}

export default options
