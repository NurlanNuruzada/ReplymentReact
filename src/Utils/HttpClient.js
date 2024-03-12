import Axios from "axios";

const api = Axios.create({
    baseURL: "https://localhost:7091", 
    headers: {
      Accept: "*/*",
    },
  });

class HttpClient {
  get(url, configs) {
    return api.get(url, configs);
  }
  post(url, data, configs) {
    return api.post(url, data, configs);
  }
  put(url, data, configs) {
    return api.put(url, data, configs);
  }
  delete(url, config) {
    return api.delete(url, config);
  }
}

export const httpClient = new HttpClient();