const API_URL = "http://localhost:8080/api/verificacion";

export const confirmarCodigo = async (correo, codigo) => {
  try {
    const response = await fetch(`${API_URL}/confirmar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, codigo }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Error al verificar");
    return data;
  } catch (error) {
    throw error;
  }
};

export const reenviarCodigo = async (correo) => {
  try {
    const response = await fetch(`${API_URL}/enviar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo }),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};