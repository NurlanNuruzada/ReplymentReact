import { httpClient } from "../Utils/HttpClient";


export const GetAllDomains = async (AppUserId) => {
    try {
        const result = await httpClient.get(`/api/Domains?AppUserId=${AppUserId}`)
        return result
    }
    catch (error) {
        return error
    }
}