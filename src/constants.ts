import {ShapePropertyType} from "@visuallyjs/browser-ui";

export const PROPERTY_LINE_TYPE = "lineType";

export const DEFAULT_BACKGROUND_COLOR = "#636363"

export const LINE_TYPE_PROCESS_MAJOR = "process-major";
export const LINE_TYPE_PROCESS_MINOR = "process-minor";
export const LINE_TYPE_ELECTRICAL = "electrical";
export const LINE_TYPE_PNEUMATIC = "pneumatic";
export const LINE_TYPE_DATA_LINK = "data-link";

export const ALL_LINE_TYPES = [
    LINE_TYPE_PROCESS_MAJOR,
    LINE_TYPE_PROCESS_MINOR,
    LINE_TYPE_ELECTRICAL,
    LINE_TYPE_PNEUMATIC,
    LINE_TYPE_DATA_LINK
];


export const ALARM_PROPERTY =
{
    id: "alarm",
    label: "Alarm",
    type: "string" as ShapePropertyType,
    values: ["None", "Low", "Medium", "High", "Critical"],
    defaultValue: "None"
}
