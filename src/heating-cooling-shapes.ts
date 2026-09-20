import {ShapeSet} from "@visuallyjs/browser-ui";
import {ALARM_PROPERTY, DEFAULT_BACKGROUND_COLOR} from "./constants.ts";

export const HEATING_COOLING_SHAPES = (props?:{backgroundColor?:string}): ShapeSet => {

    const backgroundColor = props?.backgroundColor || DEFAULT_BACKGROUND_COLOR

    const exchangerWidth = 100;
    const exchangerHeight = 100;

    const furnaceWidth = 120;
    const furnaceHeight = 100;

    const towerWidth = 80;
    const towerHeight = 120;

    return {
        id: "isa-5.1-heating-cooling",
        name: "ISA 5.1 Heating & Cooling",
        shapes: [
            {
                type: "heat-exchanger",
                label: "Heat Exchanger",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${exchangerWidth} ${exchangerHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                    <circle cx="${exchangerWidth/2}" cy="${exchangerHeight/2}" r="${exchangerWidth/2}" stroke="{{color}}" stroke-width="2" fill="${backgroundColor}" data-vjs-bg="true"/>
                    <path d="M 15 75 C 25 25, 75 25, 85 75" stroke="{{color}}" stroke-width="2" fill="none"/>
                </svg>`,
                properties: [
                    { id: "exchangerType", label: "Type", type: "string", values: ["Shell & Tube", "Plate", "Reboiler"], defaultValue: "Shell & Tube" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "furnace",
                label: "Furnace",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${furnaceWidth} ${furnaceHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                    <path d="M 0 10 C 0 0, ${furnaceWidth} 0, ${furnaceWidth} 10 L ${furnaceWidth} ${furnaceHeight} L 0 ${furnaceHeight} Z" stroke="{{color}}" stroke-width="2" fill="${backgroundColor}" data-vjs-bg="true"/>
                    <path d="M 15 ${furnaceHeight} L 30 ${furnaceHeight - 15} L 45 ${furnaceHeight} M 45 ${furnaceHeight} L 60 ${furnaceHeight - 15} L 75 ${furnaceHeight} M 75 ${furnaceHeight} L 90 ${furnaceHeight - 15} L 105 ${furnaceHeight}" stroke="{{color}}" stroke-width="2" fill="none" />
                </svg>`,
                properties: [
                    { id: "burnerState", label: "Burner State", type: "string", values: ["On", "Off"], defaultValue: "Off" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "cooling-tower",
                label: "Cooling Tower",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${towerWidth} ${towerHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">

                    <path d="M 0 0 L ${towerWidth} 0 L ${towerWidth - 10} ${towerHeight} L 10 ${towerHeight} Z" stroke="{{color}}" stroke-width="2" fill="${backgroundColor}" data-vjs-bg="true"/>
                </svg>`,
                properties: [
                    { id: "fanState", label: "Fan State", type: "string", values: ["On", "Off"], defaultValue: "Off" },
                    ALARM_PROPERTY
                ]
            }
        ]
    };
};
