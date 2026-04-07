import { Card, Tab, Tabs } from "react-bootstrap";
import Section_Solicitud from "./Section-Solicitud";
import Section_Restaurants from "./Section-Restaurants";
import Section_Clients from "./Section-Clients";
import { getConteoPendientes } from "../../api/AdminPlatService";
import { useEffect, useState } from "react";

export default function Nav_Section() {
    const[numSolicitudes, setNumSolicitudes] = useState(0);
    //funcion para trae el numero rela del backend
    const actualizarConteo = async () =>{
        try{
            const total = await getConteoPendientes();
            setNumSolicitudes(total);
        }catch(error){
            console.error("Error al actualizar conteo", error);
        }
    };

    //actualizar al cargar el omponente
    useEffect(()=>{
        actualizarConteo();
    }, []);

    return (
        <>
        <Card className="p-4 mb-3">
            <Tabs defaultActiveKey="Solicitudes" className="rounded-pill mb-3 tab-principal" variant="pills">
                {/*el titulo usa la variable numSolicitudes*/}
                <Tab eventKey="Solicitudes" title={`Solicitudes (${numSolicitudes})`}>
                    {/*pasar la funcin a actualizarConteo como una propiedad*/}
                    <Section_Solicitud onAccionCompletada={actualizarConteo} />
                </Tab>
                <Tab eventKey="Accs restaurant" title="Cuentas restaurantes">
                    <Section_Restaurants />
                </Tab>
                <Tab eventKey="Accs cliente" title="Clientes">
                    <Section_Clients />
                </Tab>
            </Tabs>
        </Card>
        </>
    )
}