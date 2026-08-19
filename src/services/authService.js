import api from "../api/axiosConfig";

export async function loginUsuario(data) {
  const requestBody = {
    user: data.user || data.correo || data.email,
    nombre: data.nombre || data.firstName,
    apellido: data.apellido || data.lastName,
    correo: data.correo || data.email || data.user,
    pass: data.pass || data.password,
    password: data.password || data.pass,
  };

  if (!requestBody.user && !requestBody.correo) {
    throw new Error("Debe ingresar usuario o correo electrónico.");
  }

  if (!requestBody.pass && !requestBody.password) {
    throw new Error("Debe ingresar la contraseña.");
  }

  try {
    const { data: responseData } = await api.post("/auth/login", requestBody);
    return responseData;
  } catch (error) {
    const message =
      error.response?.data?.mensaje ||
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Error en login";
    throw new Error(message);
  }
}