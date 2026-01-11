import axios from "axios";

export const jikanClient = axios.create({
    baseURL: import.meta.env.VITE_JIKAN_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type' : "application/json",
    },

});

jikanClient.interceptors.response.use(
    (response) => {
        if (import.meta.env.DEV) {
        console.log(response.config.url, response.status);
        }
        return response;
    },
    (error) => {
        console.error("API error", error);

        if (error.response?.status === 429) {
        console.warn("Rate limit exceeded");
        }

        return Promise.reject(error);
    }
);
