import {ShapeSet} from "@visuallyjs/browser-ui";
import {ALARM_PROPERTY, DEFAULT_BACKGROUND_COLOR} from "./constants.ts";

export const FLUID_HANDLING_SHAPES = (props?:{backgroundColor:string}): ShapeSet => {

    const backgroundColor = props?.backgroundColor || DEFAULT_BACKGROUND_COLOR

    const valveWidth = 80;
    const valveHeight = 60;

    const pumpWidth = 100;
    const pumpHeight = 80;

    const tankWidth = 100;
    const tankHeight = 120;

    const mixerWidth = 60;
    const mixerHeight = 100;


    return {
        id: "isa-5.1-fluid-handling",
        name: "ISA 5.1 Fluid Handling",
        shapes: [
            {
                type: "pump",
                label: "Pump",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${pumpWidth} ${pumpHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                    <rect x="0" y="0" rx="5" width="${pumpWidth}" height="${pumpHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                    <path d="M 0 ${pumpHeight/2} L ${pumpWidth/2 - 25} ${pumpHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <circle cx="${pumpWidth/2}" cy="${pumpHeight/2}" r="25" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <path d="M ${pumpWidth/2} ${pumpHeight/2 - 25} L ${pumpWidth/2} 0" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <text x="${pumpWidth/2}" y="${pumpHeight/2}" font-size="14px" text-anchor="middle" dominant-baseline="central" fill="{{color}}" stroke="none">P</text>
                </svg>`,
                properties: [
                    { id: "pumpType", label: "Type", type: "string", values: ["Centrifugal", "Positive Displacement"], defaultValue: "Centrifugal" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "gate-valve",
                label: "Gate Valve",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${valveWidth} ${valveHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                            <rect x="0" y="0" rx="5" width="${valveWidth}" height="${valveHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                            <path d="M 0 ${valveHeight/2} L ${valveWidth} ${valveHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <path d="M ${valveWidth/2 - 10} ${valveHeight/2 - 15} L ${valveWidth/2 + 10} ${valveHeight/2 + 15} M ${valveWidth/2 - 10} ${valveHeight/2 + 15} L ${valveWidth/2 + 10} ${valveHeight/2 - 15}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <r-if test="state === 'Closed'">
                                <rect x="${valveWidth/2 - 10}" y="${valveHeight/2 - 7.5}" width="20" height="15" fill="{{color}}" stroke="none"/>
                            </r-if>
                            
                    </svg>`,
                properties: [
                    {
                        id: "state",
                        label: "State",
                        type: "string",
                        values: ["Open", "Closed"],
                        defaultValue: "Open"
                    },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "globe-valve",
                label: "Globe Valve",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${valveWidth} ${valveHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                        <rect x="0" y="0" rx="5" width="${valveWidth}" height="${valveHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                            <path d="M 0 ${valveHeight/2} L ${valveWidth} ${valveHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <path d="M ${valveWidth/2 - 10} ${valveHeight/2 - 15} L ${valveWidth/2 + 10} ${valveHeight/2 + 15} M ${valveWidth/2 - 10} ${valveHeight/2 + 15} L ${valveWidth/2 + 10} ${valveHeight/2 - 15}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <circle cx="${valveWidth/2}" cy="${valveHeight/2}" r="4" fill="{{color}}" stroke="none"/>
                            <r-if test="state === 'Closed'">
                                <rect x="${valveWidth/2 - 10}" y="${valveHeight/2 - 7.5}" width="20" height="15" fill="{{color}}" stroke="none"/>
                            </r-if>
                            
                    </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["Open", "Closed"], defaultValue: "Open" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "tank",
                label: "Tank",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${tankWidth} ${tankHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">                    
                    <path d="M 0 20 C 0 0, ${tankWidth} 0, ${tankWidth} 20 L ${tankWidth} ${tankHeight} L 0 ${tankHeight} Z" stroke="{{color}}" stroke-width="4" fill="${backgroundColor}" data-vjs-bg="true"/>
                </svg>`,
                properties: [
                    { id: "tankType", label: "Type", type: "string", values: ["Silo", "Domed Roof", "Open Top"], defaultValue: "Domed Roof" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "mixer",
                label: "Mixer",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${mixerWidth} ${mixerHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}" data-on="{{state === 'On'}}">
                    <rect x="0" y="0" rx="5" width="${mixerWidth}" height="${mixerHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                        <rect x="${mixerWidth/2 - 5}" y="10" width="10" height="15" stroke="{{color}}" fill="none" stroke-width="2" rx="5"/>
                        <path d="M ${mixerWidth/2} 15 L ${mixerWidth/2} ${mixerHeight - 20}" stroke="{{color}}" stroke-width="2"/>
                        <path class="vjs-mixer-blade" d="M ${mixerWidth/2} ${mixerHeight - 20} L ${mixerWidth/2 - 20} ${mixerHeight - 10} L ${mixerWidth/2 + 20} ${mixerHeight - 10} Z" stroke="{{color}}" fill="none" stroke-width="2"/>
                </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["On", "Off"], defaultValue: "Off" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "fan",
                label: "Fan",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${pumpWidth} ${pumpHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}" data-on="{{state === 'On'}}">
<rect x="0" y="0" rx="5" width="${pumpWidth}" height="${pumpHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                    <path d="M 0 ${pumpHeight/2} L ${pumpWidth/2 - 25} ${pumpHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <circle cx="${pumpWidth/2}" cy="${pumpHeight/2}" r="25" stroke="{{color}}" stroke-width="2" fill="none" data-vjs-bg="true"/>
                    <path class="vjs-fan-blade" d="M ${pumpWidth/2} ${pumpHeight/2} L ${pumpWidth/2 - 15} ${pumpHeight/2 - 15} M ${pumpWidth/2} ${pumpHeight/2} L ${pumpWidth/2 + 15} ${pumpHeight/2 - 15} M ${pumpWidth/2} ${pumpHeight/2} L ${pumpWidth/2 - 15} ${pumpHeight/2 + 15} M ${pumpWidth/2} ${pumpHeight/2} L ${pumpWidth/2 + 15} ${pumpHeight/2 + 15}" stroke="{{color}}" stroke-width="1.5" fill="none"/>
                    <path d="M ${pumpWidth/2} ${pumpHeight/2 - 25} L ${pumpWidth/2} 0" stroke="{{color}}" stroke-width="2" fill="none"/>
                   
                </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["On", "Off"], defaultValue: "Off" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "compressor",
                label: "Compressor",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${pumpWidth} ${pumpHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}" data-on="{{state === 'On'}}">
<rect x="0" y="0" rx="5" width="${pumpWidth}" height="${pumpHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                    <path d="M 0 ${pumpHeight/2} L ${pumpWidth/2 - 25} ${pumpHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <circle cx="${pumpWidth/2}" cy="${pumpHeight/2}" r="25" stroke="{{color}}" stroke-width="2" fill="none" data-vjs-bg="true"/>
                    <path class="vjs-compressor-blade" d="M ${pumpWidth/2 + 20} ${pumpHeight/2 - 20} L ${pumpWidth/2} ${pumpHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                    <path d="M ${pumpWidth/2} ${pumpHeight/2 - 25} L ${pumpWidth/2} 0" stroke="{{color}}" stroke-width="2" fill="none"/>
                </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["On", "Off"], defaultValue: "Off" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "ball-valve",
                label: "Ball Valve",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${valveWidth} ${valveHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                        <rect x="0" y="0" rx="5" width="${valveWidth}" height="${valveHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                            <path d="M 0 ${valveHeight/2} L ${valveWidth} ${valveHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <path d="M ${valveWidth/2 - 10} ${valveHeight/2 - 15} L ${valveWidth/2 + 10} ${valveHeight/2 + 15} M ${valveWidth/2 - 10} ${valveHeight/2 + 15} L ${valveWidth/2 + 10} ${valveHeight/2 - 15}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <circle cx="${valveWidth/2}" cy="${valveHeight/2}" r="6" stroke="{{color}}" stroke-width="1.5" fill="transparent"/>
                            <r-if test="state === 'Closed'">
                                <circle cx="${valveWidth/2}" cy="${valveHeight/2}" r="6" stroke="{{color}}" stroke-width="1.5" fill="{{color}}"/>
                                </r-if>
                            
                    </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["Open", "Closed"], defaultValue: "Open" },
                    ALARM_PROPERTY
                ]
            },
            {
                type: "butterfly-valve",
                label: "Butterfly Valve",
                template: `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${valveWidth} ${valveHeight}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
                        <rect x="0" y="0" rx="5" width="${valveWidth}" height="${valveHeight}" stroke="{{color}}" fill="${backgroundColor}" data-vjs-bg="true"/>
                            <path d="M 0 ${valveHeight/2} L ${valveWidth} ${valveHeight/2}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <path d="M ${valveWidth/2 - 10} ${valveHeight/2 - 15} L ${valveWidth/2 + 10} ${valveHeight/2 + 15} M ${valveWidth/2 - 10} ${valveHeight/2 + 15} L ${valveWidth/2 + 10} ${valveHeight/2 - 15}" stroke="{{color}}" stroke-width="2" fill="none"/>
                            <path class="gate" d="M ${valveWidth/2} ${valveHeight/2-15} L ${valveWidth/2} ${valveHeight/2+15}" stroke="{{color}}" stroke-width="1.5" fill="none"/>
                            <r-if test="state === 'Closed'">
                                <rect x="${valveWidth/2 - 10}" y="${valveHeight/2 - 1.5}" width="20" height="3" fill="{{color}}"/>
                                </r-if>

                    </svg>`,
                properties: [
                    { id: "state", label: "State", type: "string", values: ["Open", "Closed"], defaultValue: "Open" },
                    ALARM_PROPERTY
                ]
            }
        ]
    };
};
