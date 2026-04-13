export const ActualizarContraTempResta = async (id, token, passwordActual, passwordNueva) =>{
    const respuesta = await fetch(`http://localhost:8080/api/restaurantes/${id}/cambiar-password`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`    
        },

        body: JSON.stringify({
        passwordActual: passwordActual,
        passwordNueva: passwordNueva
        }),
    });

    if(!respuesta.ok){
        // Si el backend lanza el RuntimeException ("La contraseña actual es incorrecta")
        // aquí lo captura
        const errorMsg = await respuesta.text();
        throw new Error(errorMsg || "Error al actualizar la contraseña");
    }

    //si es exitoso (nocontent)
    return true;
};