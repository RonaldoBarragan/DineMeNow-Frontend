import axios from 'axios';

const API_URL = "http://localhost:8080/api/clientes";

const getAuthHeaders = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData?.token;

    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

//Obtener todos los clientes
export const obtenerAllClientes = async () => {
    try {
        const response = await axios.get(API_URL, getAuthHeaders()); //importante esa cosa (getAuthHeaders)poner en los demas roles
        return response.data;
    } catch (error) {
        console.error("Error al obtener clientes:", error.response?.data || error.message);
        throw error;
    }
};