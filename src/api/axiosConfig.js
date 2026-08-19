import axios from "axios";

const api = axios.create({
    baseURL: "http://18.233.40.168:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

function getToken() {
    const stored = localStorage.getItem("auth");
    if (!stored) return null;
    try {
        const parsed = JSON.parse(stored);
        return parsed?.token ?? null;
    } catch {
        return null;
    }
}

// Interceptor de request: inyecta el token automáticamente
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

/*
// Interceptor de response: si el token vence o es inválido, limpiamos sesión
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem(STORAGE_KEY);
            window.location.href = "/login"; // fuerza vuelta al login
        }
        return Promise.reject(error);
    }
);
*/
export default api;
