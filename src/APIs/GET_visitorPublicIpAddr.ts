export interface IAPIResponse_getVisitorPublicIpAddr {
    ip: string
}

export const getVisitorPublicIpAddr = async <IAPIResponse_getVisitorPublicIpAddr>() => {
    const response = fetch("https://api.ipify.org/?format=json")
    const data = (await response).json()
    console.log(data)
    return Promise.resolve(data) as Promise<IAPIResponse_getVisitorPublicIpAddr>;
}