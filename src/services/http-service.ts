import apiClient from "./api-client";

interface Payload{
    id: number;
}

// generic class for handling http requests
class HTTPService{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get(this.endpoint, {
            signal: controller.signal,
        });
        return {request, cancel: () => controller.abort()};
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id);
    }

    create<T>(payload: T) {
        return apiClient.post(this.endpoint, payload);
    }

    put<T> (payload: Payload) {
        return apiClient.put(this.endpoint + "/" + payload.id, payload);
    }
}

const createHTTPService = (endpoint: string) => new HTTPService(endpoint);
export default createHTTPService;
