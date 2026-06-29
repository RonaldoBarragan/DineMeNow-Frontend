import api from "./axiosConfig"

const API_URL = "http://localhost:8080/api/clientes";

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

export const consultarPerfil = async (userId, token) => {
    const res = await fetch(`${API_URL}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //aqui usamos el token que recibimos
        "Authorization": `Bearer ${token}` 
      }
    });
    //verficar si la respuesta es correcta antes de convertir a json
    if(!res.ok){
      throw new Error(`Error ${res.status}: No autorizado`);
    }
    return res.json();
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