import api from "./axiosConfig";

const RESTAURANT_URL = "/restaurantes"; //URL para restaurantes

// Obtener la lista de platos de un restaurante por su NIT, endpoint anidado
export const getListPlatosRestaurant = async (idAcc) => {

  const { data: restaurante } = await api.get(`${RESTAURANT_URL}/${idAcc}`);
  const { data: platos } = await api.get(`/platos/listarPlatos/${encodeURIComponent(restaurante.nit)}`);
  
  return platos;
};

export const getListMesasRestaurant = async (idAcc) => {

  const { data: restaurante } = await api.get(`${RESTAURANT_URL}/${idAcc}`);
  const { data: mesas } = await api.get(`/mesas/restaurante/${encodeURIComponent(restaurante.nit)}`);
  
  return mesas;
};

//Actualizar la contraseña temporal de un restaurante
export const ActualizarContraTempResta = async (id, passwordActual, passwordNueva) => {
    try {
        await api.put(`/restaurantes/${id}/cambiar-password`, {
            passwordActual: passwordActual,
            passwordNueva: passwordNueva,
        });

        return true;
    } catch (error) {
        const errorMsg = error.response?.data || "Error al actualizar la contraseña";
        throw new Error(errorMsg);
    }
};

//Registrar un restaurante nuevo (terminarlo)
export const RegistrarRestaurante = async (datos) => {
    try {
        const { data } = await api.post(`${RESTAURANT_URL}/registro`, datos);
        return data;
    } catch (error) {
        const mensaje = error.response?.data?.mensaje || "Error al registrar el restaurante";
        console.error("Error en la petición API:", error);
        throw new Error(mensaje);
    }
};