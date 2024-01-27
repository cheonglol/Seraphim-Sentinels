import { redirect } from "react-router-dom"

export interface ILoaderData_SocmedHandler {
    referrerAddr: string
}

export const socmedHandleLoader = async () => {
    if (window.document.referrer !== "https://l.instagram.com/") { return redirect("/") }
    return { referrerAddr: window.document.referrer } as ILoaderData_SocmedHandler
}