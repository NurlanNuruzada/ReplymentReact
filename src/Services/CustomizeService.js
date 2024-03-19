import { httpClient } from "../Utils/HttpClient";

export const CreateCustomize = async (data) => {
    try {
        const response = await httpClient.post('/api/WidgetAllStyles', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};