import axios from "axios";

const API_URL = "http://localhost:8080/api/reservas";

export const obtenerReservasPorNit = async (nit, token) => {

    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    };

    const {data} = await axios.get(
        `${API_URL}/restaurante/${nit}`,
        config
    );

    return data;
};