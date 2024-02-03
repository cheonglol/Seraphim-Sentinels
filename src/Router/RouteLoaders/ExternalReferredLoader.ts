import { redirect } from "react-router-dom"
import { URL_REFERRED_BY_INSTAGRAM } from "../../Constants/URLsConstants"

export interface ILoaderData_ExternalReferred {
    referrerAddr: string
}

// TODO: handle more sources
export const ExternalReferredLoader = async () => {
    if (window.document.referrer !== URL_REFERRED_BY_INSTAGRAM) { return redirect("/") }
    return { referrerAddr: window.document.referrer } as ILoaderData_ExternalReferred
}