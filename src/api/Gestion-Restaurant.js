import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Obtener la lista de platos de un restaurante por su NIT, endpoint anidado
export const getListPlatosRestaurant = async (idAcc) => {
  const { data: restaurante } = await axios.get(`${API_URL}/restaurantes/${idAcc}`);
  const { data: platos } = await axios.get(`${API_URL}/platos/listarPlatos/${encodeURIComponent(restaurante.nit)}`);
  
  return platos;
};

export const getListMesasRestaurant = async (idAcc) => {
  const { data: restaurante } = await axios.get(`${API_URL}/restaurantes/${idAcc}`);
  const { data: mesas } = await axios.get(`${API_URL}/mesas/restaurante/${encodeURIComponent(restaurante.nit)}`);
  
  return mesas;
};