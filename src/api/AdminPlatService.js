/*import axios from 'axios'; //es una librería de JavaScript utilizada para realizar solicitudes HTTP (como GET, POST, PUT, DELETE) desde el navegador o Node.js hacia servidores o APIs

const API_URL = "http://localhost:8080/api/restaurantes";

// Función auxiliar para obtener los headers con el token
const getAuthHeaders = () =>{
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData?.token;

    return{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    };
};
*/
import api from './axiosConfig';

export const getRestaurantesPendientes = async () => {
    // Pasamos getAuthHeaders() como segundo o tercer argumento según el método
    const res = await api.get(`/restaurantes/estado/PENDIENTE`);
    return res.data;
};

// /nit/{nit}/aprobar
export const aprobarRestaurante = async (nit) => {
    // En PUT, el segundo argumento es el body (vacío {}) y el tercero son los headers
    const res = await axios.put(`${API_URL}/nit/${encodeURIComponent(nit)}/aprobar`, {}, getAuthHeaders());
    return res.data;
};

// /nit/{nit}/rechazar
export const rechazarRestaurante = async (nit) => {
    const res = await axios.put(`${API_URL}/nit/${encodeURIComponent(nit)}/rechazar`, {}, getAuthHeaders());
    return res.data;
};

export const getConteoPendientes = async () => {
    try {
        const res = await axios.get(`${API_URL}/count/estado/PENDIENTE`, getAuthHeaders());
        return res.data; // Devuelve el número (ej: 2)
    } catch (error) {
        console.error("Error al obtener conteo:", error);
        return 0;
    }
};

//Obtener todos los restaurantes activos
export const obtenerAllActivesRestaurantes = async () => {
    try {
        const response = await axios.get(`${API_URL}/estado/ACTIVO`, getAuthHeaders());
        return response.data;
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
        throw error;
    }
};

//Eliminar un restaurant por su nit
export const eliminarRestaurante = async (nit) => {
    try {
        const response = await axios.delete(`${API_URL}/nit/${nit}`, getAuthHeaders());
        return response.data;
    } catch (error) {
        console.error("Error al eliminar restaurante:", error);
        throw error;
    }
};
