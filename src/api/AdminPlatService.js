import axios from 'axios'; //es una librería de JavaScript utilizada para realizar solicitudes HTTP (como GET, POST, PUT, DELETE) desde el navegador o Node.js hacia servidores o APIs

const API_URL = "http://localhost:8080/api/restaurantes";

export const getRestaurantesPendientes = async () => {
    const res = await axios.get(`${API_URL}/estado/PENDIENTE`);
    return res.data;
};

// /nit/{nit}/aprobar
export const aprobarRestaurante = async (nit) => {
    const res = await axios.put(`${API_URL}/nit/${encodeURIComponent(nit)}/aprobar`);
    return res.data;
};

// /nit/{nit}/rechazar
export const rechazarRestaurante = async (nit) => {
    const res = await axios.put(`${API_URL}/nit/${encodeURIComponent(nit)}/rechazar`);
    return res.data;
};

export const getConteoPendientes = async () => {
    try {
        const res = await axios.get(`${API_URL}/count/estado/PENDIENTE`);
        return res.data; // Devuelve el número (ej: 2)
    } catch (error) {
        console.error("Error al obtener conteo:", error);
        return 0;
    }
};

//Obtener todos los restaurantes activos
export const obtenerAllActivesRestaurantes = async () => {
    try {
        const response = await axios.get(`${API_URL}/estado/ACTIVO`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
        throw error;
    }
};

//Eliminar un restaurant por su nit
export const eliminarRestaurante = async (nit) => {
    try {
        const response = await axios.delete(`${API_URL}/nit/${nit}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar restaurante:", error);
        throw error;
    }
};
