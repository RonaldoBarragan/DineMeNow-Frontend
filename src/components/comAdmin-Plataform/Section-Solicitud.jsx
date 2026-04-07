import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row, Spinner } from "react-bootstrap"; // Corregida importación de Spinner
import { LuCircleCheckBig } from "react-icons/lu";
import { CgCloseO } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { getRestaurantesPendientes, aprobarRestaurante, rechazarRestaurante } from "../../api/AdminPlatService";

export default function Section_Solicitud({onAccionCompletada}) {
    const [solicitudes, setSolicitudes] = useState([]);
    const [loading, setLoading] = useState(true);

    const cargarDatos = async () => {
        try {
            setLoading(true);
            const data = await getRestaurantesPendientes();
            setSolicitudes(data);
        } catch (error) {
            console.error("Error al cargar la solicitud: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarDatos();
    }, []);

    const manejoAprobacion = async (nit) => {
        try {
            await aprobarRestaurante(nit);
            alert("¡Restaurante aprobado con éxito!");

            cargarDatos(); //limpia la lista de tarjetas

            if(onAccionCompletada){
                onAccionCompletada();//eso hara que se cambie el numerito de solicitudes
            }

        } catch (error) {
            alert("Error al aprobar el restaurante");
        }
    };

    const manejoRechazo = async (nit) => {
    try {
        await rechazarRestaurante(nit);
        alert("Restaurante rechazado");
        
        cargarDatos(); 

        if(onAccionCompletada){
            onAccionCompletada();
        }
    } catch (error) {
        alert("Error al rechazar el restaurante");
    }
};

    if (loading) {
        return (
            <div className="text-center p-5">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <>
            <h3 className="fw-bold mb-3">Solicitudes de Registro pendientes</h3>
            {solicitudes.length === 0 ? (
                <p className="text-muted">No hay solicitudes nuevas por el momento.</p>
            ) : (
                solicitudes.map((sol) => (
                    <Card className="mb-4" key={sol.nit}>
                        <Card.Body>
                            <Card.Title className="fs-6 d-flex justify-content-between">
                                {sol.nombre}
                                <Badge pill className="badge-pending">Pendiente</Badge>
                            </Card.Title>
                            <Row className="size-letra-propio p-1">
                                <Col md={4}>
                                    <span className="fw-bold text-muted">Información básica</span>
                                    <div className="text-left size-letra-propio">
                                        <p className="m-0">Ciudad: {sol.direccion.ciudad}</p>
                                        <p className="m-0">Categoría: {sol.categoria}</p>
                                        <p className="m-0 text-muted small">NIT: {sol.nit}</p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <span className="fw-bold text-muted">Contacto</span>
                                    <div className="text-left size-letra-propio">
                                        <p className="m-0">Email: {sol.correo}</p>
                                        <p className="m-0">Teléfono: {sol.telefono}</p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <span className="fw-bold text-muted">Detalles adicionales</span>
                                    <div className="text-left size-letra-propio">
                                        <p className="m-0">Dirección: {`${sol.direccion.calle} ${sol.direccion.numero}`}</p>
                                        <p className="m-0">Capacidad: {sol.capacidad} personas</p>
                                        <p className="m-0">Horario: {sol.horarioApertura} - {sol.horarioCierre}</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3"><hr className="m-0 p-0"/></Row>

                            <Row className="p-0 mt-2">
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="success" 
                                        size="sm" 
                                        className="fw-bold d-flex align-items-center gap-2"
                                        onClick={() => manejoAprobacion(sol.nit)}
                                    >
                                        <LuCircleCheckBig size={18} /> Aceptar
                                    </Button>

                                    <Button 
                                        variant="outline-danger" 
                                        size="sm" 
                                        className="fw-bold d-flex align-items-center gap-2"
                                        onClick={() => manejoRechazo(sol.nit)}
                                    >
                                        <CgCloseO size={18}/>Rechazar
                                    </Button>

                                    <Button 
                                        variant="outline-secondary" 
                                        size="sm" 
                                        className="fw-bold d-flex align-items-center gap-2"
                                    >
                                        <MdOutlineRemoveRedEye size={18}/>Ver documentos
                                    </Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            )}
        </>
    );
}