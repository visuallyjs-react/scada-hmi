import { ModelOptions } from "@visuallyjs/browser-ui"
import {ObjectData} from "@visuallyjs/browser-ui/types/core/model/graph";
import {VisuallyJsModel} from "@visuallyjs/browser-ui/types/core/toolkit";

const modelOptions:ModelOptions = {
    nodeFactory:(model: VisuallyJsModel, type: string, data: ObjectData, continueCallback: (o: ObjectData) => any, abortCallback: () => any, params?: any) => {
        continueCallback(Object.assign(data, {color:"#A9A9A9"}))
        return true
    }
}

export default modelOptions
