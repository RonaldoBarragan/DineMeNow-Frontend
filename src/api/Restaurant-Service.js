import api from "./axiosConfig";

const RESTAURANT_URL = "/restaurantes"; //URL para restaurantes

// Obtener la lista de platos de un restaurante por su NIT, endpoint anidado
export const getListPlatosRestaurant = async (idAcc) => {

    const { data: restaurante } = await api.get(`${RESTAURANT_URL}/${idAcc}`);
    const { data: platos } = await api.get(`/platos/listarPlatos/${encodeURIComponent(restaurante.nit)}`);
  
  return platos;
};

// 2. Guardar un nuevo plato
export const crearPlato = async (platoData) => {
    const { data } = await api.post(`/platos/crearPlato`, platoData);
    return data;
};

// 3. Eliminar un plato por su ID 
export const eliminarPlato = async (platoId) => {
    await api.delete(`/platos/borrarPlato/${platoId}`);
    return true;
};

// 4. actualizar un plato
export const actualizarPlato = async (platoId, platoData) => {
    // Hace la petición PUT al backend enviando el ID en la URL y el DTO modificado en el cuerpo
    const { data } = await api.put(`/platos/actualizarPlato/${platoId}`, platoData);
    return data;
};

//Obtener la lista de mesas de un restaurante por su NIT, endpoint anidado
export const getListMesasRestaurant = async (idAcc) => {

    const { data: restaurante } = await api.get(`${RESTAURANT_URL}/${idAcc}`);
    const { data: mesas } = await api.get(`/mesas/restaurante/${encodeURIComponent(restaurante.nit)}`);
  
  return mesas;
};

// 2. Guardar una nueva mesa
export const crearMesaRestaurant = async (mesaData) => {
    const { data } = await api.post(`/mesas/crearMesa`, mesaData);
    return data;
};

// 3. Eliminar una mesa por su ID 
export const eliminarMesa = async (mesaId) => {
    await api.delete(`/mesas/borrarMesa/${mesaId}`);
    return true;
};

// 4. actualizar una mesa
export const actualizarMesa = async (mesaId, mesaData) => {
    const { data } = await api.put(`/mesas/actualizarMesa/${mesaId}`, mesaData);
    return data;
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

//Registrar un restaurante nuevo
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