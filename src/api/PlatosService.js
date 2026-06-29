const API = "http://localhost:8080/api/platos";

export const obtenerPlatos = async (nit, token)=>{

    const response = await fetch(`${API}/listarPlatos/${nit}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });

    if(!response.ok){
        throw new Error("Error obteniendo platos");
    }

    return await response.json();

}