/* eslint-disable no-throw-literal */
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";
import { SupabaseApiError } from "./SupabaseApiError";

export interface FinLitContent {
    ID: number;
    CREATED_AT: Date;
    CONTENT_TITLE: string;
    CONTENT_DESC: string;
    CONTENT_VIEW_COUNT: number;
    CONTENT_INTERACTED_WITH: boolean;
}

export const getFinLitContentAPI = async (): Promise<FinLitContent[] | CustomApiErrorMessage> => {
    try {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/FinLitContent?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw { customMessage: "something wrong, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
        }
        const data: FinLitContent[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "bro please work - anyways this is trying to get customer[]",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}
