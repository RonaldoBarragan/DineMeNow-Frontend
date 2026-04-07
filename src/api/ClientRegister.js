const API_URL = "http://localhost:8080/api/clientes";

// 🔧 Normaliza errores (ej: "documento.numero" → "numero")
const normalizeErrors = (errors) => {
  const newErrors = {};

  if (!errors) return null;

  Object.keys(errors).forEach((key) => {
    const simpleKey = key.split(".").pop();
    newErrors[simpleKey] = errors[key];
  });

  return newErrors;
};

export const registroUsuario = async (data) => {

  // Construimos el objeto EXACTO que espera el backend
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

  // 🔍 Log del request ANTES de enviarlo (para debugging)
  console.log("📤 Enviando registro al backend:", requestBody);

  try {

    const response = await fetch(API_URL + "/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    let responseJson = null;

    // 🔍 Intentamos leer la respuesta del backend
    try {
      responseJson = await response.json();
    } catch {
      throw {
        message: "Respuesta inválida del servidor",
        error: null,
        errors: null,
      };
    }

    console.log("Respuesta backend:", responseJson);

    // ❌ Si el backend responde con error (400, 500, etc.)
    if (!response.ok) {
      throw {
        message: responseJson.error || "Error al registrar el usuario",
        error: responseJson.error || null,
        errors: normalizeErrors(responseJson.errors),
      };
    }

    // ✅ Todo correcto
    return responseJson;

  } catch (error) {

    // 🔁 Si ya es un error controlado, lo reenviamos
    if (error.message && error.errors !== undefined) {
      throw error;
    }

    // 🌐 Error de conexión (servidor caído, red, etc.)
    throw {
      message: "Error de conexión con el servidor",
      error: null,
      errors: null,
    };
  }
};