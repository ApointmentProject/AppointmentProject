import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error("Error en la API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);