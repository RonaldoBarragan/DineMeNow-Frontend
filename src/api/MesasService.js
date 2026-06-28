const API = "http://localhost:8080/api/mesas";

export  const obtenerMesas = async(nit, token) =>{

    const response = await fetch(`${API}/restaurante/${nit}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });

    if(!response.ok){
        throw new Error("Error obteniendo mesas");
    }

    return await response.json();
}