import api from "./axiosConfig"

export const registroUsuario = async (data) => {
    const requestBody = {
        nombre: data.nombre,
        apellido: data.apellido,
        documento: {
            tipo: data.documento.tipo,
            numero: data.documento.numero,
        },
        direccion: {
            calle: data.direccion.calle,
            numero: data.direccion.numero,
            ciudad: data.direccion.ciudad,
            codigoPostal: data.direccion.codigoPostal,
            pais: data.direccion.pais,
        },
        correo: data.correo,
        telefono: data.telefono,
        foto: data.foto || "",
        user: data.user,
        password: data.password,
    };

    try {
        const { data: responseJson } = await api.post("/clientes/registro", requestBody);
        return responseJson;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error al registrar el usuario");
    }
};

export const consultarPerfil = async (userId) => {
    try {
        const { data } = await api.get(`/clientes/${userId}`);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.mensaje || `Error: No autorizado`);
    }
};

//Consultar las mesas de un restaurant cuando se esta con perfil de cliente
export const obtenerMesas = async (nit) => {
    try {
        const { data } = await api.get(`/mesas/restaurante/${encodeURIComponent(nit)}`);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.mensaje || "Error obteniendo mesas");
    }
};

//Consultar los platos de un restaurant cuando se esta con perfil de cliente
export const obtenerPlatos = async (nit) => {
    try {
        const { data } = await api.get(`/platos/listarPlatos/${encodeURIComponent(nit)}`);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.mensaje || "Error obteniendo platos");
    }
};

//Crear una reserva desde el perfil de cliente
export const crearReserva = async (reservaData) => {
    try {
        const { data } = await api.post(`/reservas/CrearReservas`, reservaData);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.mensaje || "Error al crear la reserva");
    }
};