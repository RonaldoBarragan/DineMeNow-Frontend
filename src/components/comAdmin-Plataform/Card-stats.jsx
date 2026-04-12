import { Card, Col, Row } from "react-bootstrap";
import { LuBuilding } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { getConteoPendientes } from "../../api/AdminPlatService";
import { useEffect, useState } from "react";
//Falta colores a los iconos

export default function Card_stats({totalClientes, totalRestaurantes, refresh}) {
    const[solicitudesCount, setSolicitudesCount] = useState(0);

        //funcion para trae el numero rela del backend
        const cargarConteos = async () =>{
            try{
                const countPendientes = await getConteoPendientes();
                setSolicitudesCount(countPendientes);
            }catch(error){
                console.error("Error al cargar estadisticas", error);
            }
        };

    
        //actualizar al cargar el omponente
        useEffect(()=>{
            cargarConteos();
        }, [refresh]);


    return (
        <>
        <Row className="p-0 mt-3 mb-3">
            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuBuilding className="icon-color-restaurant" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{totalRestaurantes}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Restaurantes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuUsers className="icon-color-users" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{totalClientes}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Usuarios</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
                <Card.Body className="d-flex align-items-center gap-2">
                    <LuSettings className="icon-color-solis" size={28} />
                    <div className="flex-column">
                        <Card.Title className="fw-bold mb-0">{solicitudesCount}</Card.Title>
                        <Card.Text className="text-left mt-0 size-letra-propio">Solicitudes</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    )
}