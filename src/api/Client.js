import axios from 'axios';

const API_URL = "http://localhost:8080/api/clientes";

//Obtener todos los clientes
export const obtenerAllClientes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener clientes:", error.response?.data || error.message);
        throw error;
    }
};