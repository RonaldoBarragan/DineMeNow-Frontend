import api from './axiosConfig';

export const getRestaurantesPendientes = async () => {
    const res = await api.get(`/restaurantes/estado/PENDIENTE`);
    return res.data;
};

// /nit/{nit}/aprobar
export const aprobarRestaurante = async (nit) => {
    const res = await api.put(`/restaurantes/nit/${encodeURIComponent(nit)}/aprobar`);
    return res.data;
};

// /nit/{nit}/rechazar
export const rechazarRestaurante = async (nit) => {
    const res = await api.put(`/restaurantes/nit/${encodeURIComponent(nit)}/rechazar`);
    return res.data;
};

export const getConteoPendientes = async () => {
    try {
        const res = await api.get(`/restaurantes/count/estado/PENDIENTE`);
        return res.data; // Devuelve el número (ej: 2)
    } catch (error) {
        console.error("Error al obtener conteo:", error);
        return 0;
    }
};

//Obtener todos los restaurantes activos
export const obtenerAllActivesRestaurantes = async () => {
    try {
        const response = await api.get(`/restaurantes/estado/ACTIVO`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
        throw error;
    }
};

//Eliminar un restaurant por su nit
export const eliminarRestaurante = async (nit) => {
    try {
        const response = await api.delete(`/restaurante/nit/${nit}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar restaurante:", error);
        throw error;
    }
};

//Obtener todos los clientes
export const obtenerAllClientes = async () => {
    try {
        const response = await api.get("/clientes");
        return response.data;
    } catch (error) {
        console.error("Error al obtener clientes:", error.response?.data || error.message);
        throw error;
    }
};