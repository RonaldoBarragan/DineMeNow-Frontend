const API_URL = "http://18.233.40.168:8080/api/auth/login";

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

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    const message = json?.mensaje || json?.error || json?.message || "Error en login";
    throw new Error(message);
  }

  return json;
}