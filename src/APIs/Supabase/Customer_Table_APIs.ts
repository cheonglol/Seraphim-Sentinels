/* eslint-disable no-throw-literal */
// ill add this comment to trigger the git lol
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";
import { SupabaseApiError } from "./SupabaseApiError";

export interface Customer {
    ID: number;
    CREATED_AT: Date;
    CUSTOMER_NAME: string;
    CUSTOMER_DOB: Date;
    CUSTOMER_MAINACC_BALANCE: number;
}

export const getCustomerList = async (): Promise<Customer[] | CustomApiErrorMessage> => {
    try {
        // "don't show the apikeys" - "ok" - *does it anyways through exposed url query params*
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Customer?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw { customMessage: "something wrong, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
        }
        const data: Customer[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "bro please work - anyways this is trying to get customer[]",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}

export const getCustomerList_ByCustomerID = async (ID: number): Promise<Customer[] | CustomApiErrorMessage> => {
    try {
        //const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Customer?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Customer?ID=eq.${ID}&select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw { customMessage: "something wrong, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
        }
        const data: Customer[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "bro please work - anyways this is trying to get customer[]",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}
