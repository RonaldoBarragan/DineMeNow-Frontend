import axios from "axios";

const API_URL = "http://localhost:8080/api/platos";

// Obtener la lista de platos de un restaurante por su NIT
export const getListPlatosRestaurant = async (nit) => {
    try {
        const res = await axios.get(`${API_URL}/listarPlatos/${encodeURIComponent(nit)}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching platos:", error);
        throw error;
    }
};