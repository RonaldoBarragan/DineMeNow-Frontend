import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Configuración auxiliar para no repetir las cabeceras con el token
const getAuthConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});

// 1. Obtener la lista de platos de un restaurante por su NIT
export const getListPlatosRestaurant = async (idAcc, token) => {
  const config = getAuthConfig(token);
  // Buscar el restaurante por el ID de la cuenta para sacar el NIT
  const { data: restaurante } = await axios.get(`${API_URL}/restaurantes/${idAcc}`, config);
  // Buscar los platos vinculados a ese NIT
  const { data: platos } = await axios.get(`${API_URL}/platos/listarPlatos/${encodeURIComponent(restaurante.nit)}`, config);
  return platos;
};

// 2. Guardar un nuevo plato en MongoDB
export const crearPlato = async (platoData, token) => {
  const config = getAuthConfig(token);
  const { data } = await axios.post(`${API_URL}/platos/crearPlato`, platoData, config);
  return data;
};

// 3. Eliminar un plato por su ID 
export const eliminarPlato = async (platoId, token) => {
  const config = getAuthConfig(token);
  await axios.delete(`${API_URL}/platos/borrarPlato/${platoId}`, config);
  return true;
};

//actualizar un plato
export const actualizarPlato = async (platoId, platoData, token) => {
  const config = getAuthConfig(token);
  // Hace la petición PUT al backend enviando el ID en la URL y el DTO modificado en el cuerpo
  const { data } = await axios.put(`${API_URL}/platos/actualizarPlato/${platoId}`, platoData, config);
  return data;
};

export const crearMesaRestaurant = async (mesaData, token) => {
  const config = getAuthConfig(token);
  const { data } = await axios.post(`${API_URL}/mesas/crearMesa`, mesaData, config);
  return data;
};

export const getListMesasRestaurant = async (idAcc, token) => {
  const config = getAuthConfig(token);
  const { data: restaurante } = await axios.get(`${API_URL}/restaurantes/${idAcc}`, config);
  // 2. Traemos las mesas vinculadas a ese NIT mediante una petición GET 
  const { data: mesas } = await axios.get(`${API_URL}/mesas/restaurante/${encodeURIComponent(restaurante.nit)}`, config);
  return mesas;
};

// 3. Eliminar una mesa por su ID 
export const eliminarMesa = async (mesaId, token) => {
  const config = getAuthConfig(token);
  await axios.delete(`${API_URL}/mesas/borrarMesa/${mesaId}`, config);
  return true;
};

//actualizar una mesa
export const actualizarMesa = async (mesaId, mesaData, token) => {
  const config = getAuthConfig(token);
  // Hace la petición PUT al backend enviando el ID en la URL y el DTO modificado en el cuerpo
  const { data } = await axios.put(`${API_URL}/mesas/actualizarMesa/${mesaId}`, mesaData, config);
  return data;
};