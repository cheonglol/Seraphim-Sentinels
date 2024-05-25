/* eslint-disable no-throw-literal */
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";
import { SupabaseApiError } from "./SupabaseApiError";

export interface Investments {
    ID: number;
    CREATED_AT: Date;
    INVESTMENT_NAME: string;
    START_DATE: Date;
    END_DATE: Date;
    RISK_RATING: number;
    INTEREST_RATE: number;
    DESCRIPTION: string;
    AMOUNT: number;
    INTEREST_EARNED: number;
}

export const getInvestmentsAPI = async (): Promise<Investments[] | CustomApiErrorMessage> => {
    try {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Investments?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw { customMessage: "something wrong, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
        }
        const data: Investments[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "bro please work - anyways this is trying to get customer[]",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}
