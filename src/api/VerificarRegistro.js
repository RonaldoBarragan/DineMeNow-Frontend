const API_URL = "http://localhost:8080/api/verificacion";


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