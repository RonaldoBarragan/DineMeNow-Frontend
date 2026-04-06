const API_URL = "http://localhost:8080/api/restaurantes";

export const RegistrarRestaurante = async (datos) => {
    try{
        const respuesta = await fetch(`${API_URL}/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),    
        });

        if (!respuesta.ok) {
            // Esto enviará el error al bloque 'catch' de RegistroCompleto
            const errorData = await respuesta.json();
            throw new Error(errorData.mensaje || "Error al registrar el restaurante");
        }
        return await respuesta.json();
    } catch (error) {
        console.error("Error en la petición API:", error);
        throw error;
    }
};