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

export async function solicitarCodigoRecuperacion(correo) {
  try {
    const { data } = await api.post("/auth/recuperar-password/solicitar", { correo });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.mensaje ||
      error.response?.data?.error ||
      "No fue posible solicitar la recuperación de contraseña."
    );
  }
}

export async function verificarCodigoRecuperacion(correo, codigo) {
  try {
    const { data } = await api.post("/auth/recuperar-password/verificar-codigo", {
      correo,
      codigo,
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.mensaje ||
      error.response?.data?.error ||
      "Código incorrecto o ha expirado."
    );
  }
}

export async function cambiarPasswordConToken(resetToken, password) {
  try {
    const { data } = await api.post(
      "/auth/recuperar-password/cambiar",
      { password },
      { headers: { Authorization: `Bearer ${resetToken}` } }
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.mensaje ||
      error.response?.data?.error ||
      "No fue posible actualizar la contraseña."
    );
  }
}
