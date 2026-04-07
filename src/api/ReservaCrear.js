const API_URL = "http://localhost:8080/api/reservas";

export const crearReserva = async (reservaData) => {
  try {
    const response = await fetch(`${API_URL}/CrearReservas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservaData),
    });

    if (!response.ok) {
      throw new Error("Error al crear la reserva");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en el servicio de reservas:", error);
    throw error;
  }
};
