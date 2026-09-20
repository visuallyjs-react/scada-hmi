import {ShapePropertyType, ShapeSet} from "@visuallyjs/browser-ui";
import {ALARM_PROPERTY, DEFAULT_BACKGROUND_COLOR} from "./constants.ts";
import {ShapePropertyDefinition} from "@visuallyjs/browser-ui/types/browser-ui/shape-library/shape-library-definitions";

export const INSTRUMENTATION_SHAPES = (props?:{backgroundColor?:string}): ShapeSet => {

    const backgroundColor = props?.backgroundColor || DEFAULT_BACKGROUND_COLOR

    // As per ISA-5.1, the first letter of an instrument bubble identifies the measured variable.
    const measuredVariables = {
        F: "Flow",
        L: "Level",
        P: "Pressure",
        T: "Temperature",
        A: "Analysis"
    };

    // Subsequent letters identify the function of the instrument.
    const functions = {
        I: "Indicator",
        R: "Recorder",
        C: "Controller",
        T: "Transmitter",
        S: "Switch"
    };

    // The list of values for the 'function' property dropdown. Includes an empty value.
    const functionValues = [
        {value:'', label:"None"},
        {value:'I', label:'Indicator'},
        {value:'R', label:"Recorder"},
        {value:'C', label:"Controller"},
        {value:'T', label:"Transmitter"},
        {value:'S', label:"Switch"}];

    const width = 60;
    const height = 60;

    /**
     * Helper function to generate the SVG template for an instrument bubble.
     * @param variable The character to display, representing the measured variable (F, L, P, etc.)
     */
    const template = (variable: string) => `<svg preserveAspectRatio="none" overflow="visible" viewBox="0 0 ${width} ${height}" width="{{width}}" height="{{height}}" data-alarm="{{alarm}}">
        <circle cx="${width/2}" cy="${height/2}" r="${width/2}" fill="${backgroundColor}" stroke="{{color}}" stroke-width="2" data-vjs-bg="true"/>
        <text x="${width/2}" y="${height/2}" font-size="14px" text-anchor="middle" letter-spacing="3px" dominant-baseline="central" stroke="none" fill="{{color}}">${variable}{{function}}</text>       
    </svg>`;

    const functionProp = {
        id: "function",
        label: "Function",
        type: "string" as ShapePropertyType,
        values:functionValues,
        defaultValue: "I"
    } as const

    const instrumentationProperties:Array<ShapePropertyDefinition> = [
        functionProp, ALARM_PROPERTY
    ]

    return {
        id: "isa-5.1-instrumentation",
        name: "ISA 5.1 Instrumentation",
        shapes: [
            {
                type: "flow-instrument",
                label: "Flow Instrument",
                template: template("F"),
                properties: instrumentationProperties
            },
            {
                type: "level-instrument",
                label: "Level Instrument",
                template: template("L"),
                properties: instrumentationProperties
            },
            {
                type: "pressure-instrument",
                label: "Pressure Instrument",
                template: template("P"),
                properties: instrumentationProperties
            },
            {
                type: "temperature-instrument",
                label: "Temperature Instrument",
                template: template("T"),
                properties: instrumentationProperties
            },
            {
                type: "analysis-instrument",
                label: "Analysis Instrument",
                template: template("A"),
                properties: instrumentationProperties
            }
        ]
    };
};
