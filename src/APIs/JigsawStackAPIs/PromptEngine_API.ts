// TODO: PROPS

import { promptEnginewIDFallbackData } from "../../Constants/FallbackData";
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";

export const getAiResponseHistory = async (): Promise<AI_Response | CustomApiErrorMessage> => {

    return promptEnginewIDFallbackData;

    // const response = await fetch("https://api.jigsawstack.com/v1/ai/prompt_engine/9eedaf69-46ad-46b8-ad45-7868d13d280a", {
    //     headers: [["x-api-key", `${process.env.REACT_APP_JIGSAW_STACK_API_KEY}`]],
    //     method: "POST"
    // } as RequestInit)

    // if (response.status === 401) {
    //     const errorObj = await response.json();
    //     return { customMessage: "something wrong for jigsaw api, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
    // }

    // return await response.json()
}

export interface AI_Response {
    success: boolean;
    result: AI_Response_Result[];
}

export interface AI_Response_Result {
    excerpt: string;
    summary: string;
}
