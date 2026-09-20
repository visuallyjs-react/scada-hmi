import { LabelOverlay } from "@visuallyjs/browser-ui";
import {
    LINE_TYPE_DATA_LINK,
    LINE_TYPE_ELECTRICAL,
    LINE_TYPE_PNEUMATIC,
    LINE_TYPE_PROCESS_MAJOR,
    LINE_TYPE_PROCESS_MINOR,
    PROPERTY_LINE_TYPE
} from "./constants";

export function getEdgeMappings() {
    return [
        {
            property: PROPERTY_LINE_TYPE,
            name:"Line Type",
            mappings: {
                [LINE_TYPE_PROCESS_MAJOR]: {
                    lineWidth: 5
                },
                [LINE_TYPE_PROCESS_MINOR]: {
                    lineWidth: 2
                },
                [LINE_TYPE_ELECTRICAL]: {
                    dashArray: "8 4"
                },
                [LINE_TYPE_PNEUMATIC]: {
                    overlays: [
                        {
                            type: LabelOverlay.type,
                            options: {
                                label: "//",
                                location: 0.2,
                                backgroundStyle:{fill:"transparent"},
                                rotatable:"strict"
                            }
                        },
                        {
                            type: LabelOverlay.type,
                            options: {
                                label: "//",
                                location: 0.8,
                                backgroundStyle:{fill:"transparent"},
                                rotatable:"strict"
                            }
                        }
                    ]
                },
                [LINE_TYPE_DATA_LINK]: {
                    lineWidth: 4,
                    dashArray: "2",
                    strokeLinecap: "round",
                    cssClass:"data-link-edge"
                }
            }
        }
    ];
}
