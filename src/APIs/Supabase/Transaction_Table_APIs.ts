/* eslint-disable no-throw-literal */
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";
import { Customer } from "./Customer_Table_APIs";
import { SupabaseApiError } from "./SupabaseApiError";

export interface Transaction {
    ID: number;
    CREATED_AT: Date;
    TRANSACTION_DATE: Date;
    TRANSACTION_AMOUNT: number;
    TRANSACTION_SENDER: string;
    TRANSACTION_RECIEVER: string;
    RISK_LEVEL: number;
    TRANSACTION_CATEGORY: string;
}

export const getTransactionAPI = async (): Promise<Transaction[] | CustomApiErrorMessage> => {
    try {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Transaction?select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw { customMessage: "something wrong, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
        }
        const data: Transaction[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "bro please work - anyways this is trying to get customer[]",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}

export interface TransactionJoinCustomer {
    transactionArr: Transaction
    customerArr: Customer
}

export const getTransactionAPI_ByCustomerID = async (customerID: number): Promise<TransactionJoinCustomer[] | CustomApiErrorMessage> => {
    try {
        const response = await fetch(`https://hqetsohrmplvbalujley.supabase.co/rest/v1/Transaction?TRANSACTION_SENDER=eq.${customerID}&select=*&apikey=${process.env.REACT_APP_SUPABASE_ANON_KEY}`, {
            // press ctrl + space and see if u need any of this @thomastmx if ure doing apis
        } as RequestInit)
        if (response.status === 401) {
            const errorObj: SupabaseApiError = await response.json();
            throw {
                customMessage: "401",
                caughtErrorMessage: errorObj
            } as CustomApiErrorMessage
        }
        const data: TransactionJoinCustomer[] = await response.json()
        return data

    } catch (error) {
        const errorObj: CustomApiErrorMessage = {
            customMessage: "getTransactionAPI_ByCustomerID",
            caughtErrorMessage: JSON.stringify(error)
        }
        return errorObj
    }
}
