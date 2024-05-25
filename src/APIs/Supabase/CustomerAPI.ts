/* eslint-disable no-throw-literal */
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";
import { Supabase_API_Error } from "./SupabaseAPIError";

export interface Customer {
    ID: number;
    CREATED_AT: Date;
    CUSTOMER_NAME: string;
    CUSTOMER_DOB: Date;
    CUSTOMER_MAINACC_BALANCE: number;
}

export const getCustomerList = async (): Promise<Customer[] | CustomApiErrorMessage> => {
    try {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Customer?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: Supabase_API_Error = await response.json();
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
