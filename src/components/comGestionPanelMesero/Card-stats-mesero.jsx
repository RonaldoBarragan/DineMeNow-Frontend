import { Card, Col, Row } from "react-bootstrap";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { useEffect, useState } from "react";
import { getListMesasRestaurant, getReservasRestaurant } from "../../api/Restaurant-Service";

function obtenerFechaLocalHoy() {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const dia = String(ahora.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
}

function filtrarReservasHoy(reservas) {
    const hoy = obtenerFechaLocalHoy();
    return reservas.filter((reserva) => reserva.fecha === hoy);
}

function separarMesas(mesas) {
    const disponibles = mesas.filter((mesa) => mesa.estado === "true");
    const ocupadas = mesas.filter((mesa) => mesa.estado === "false");

    return { disponibles, ocupadas };
}

export default function Card_stats_mesero({idRestaurant}) {
    const [stats, setStats] = useState({
        reservasHoy: 0,
        mesasDisponibles: 0,
        mesasOcupadas: 0,
    });

    useEffect(() => {
        if (!idRestaurant) return;

        const loadStats = async () => {
            try {
                const [reservas, mesas] = await Promise.all([
                    getReservasRestaurant(idRestaurant),
                    getListMesasRestaurant(idRestaurant),
                ]);

                const reservasHoy = filtrarReservasHoy(reservas);
                const { disponibles, ocupadas } = separarMesas(mesas);

                setStats({
                    reservasHoy: reservasHoy.length,
                    mesasDisponibles: disponibles.length,
                    mesasOcupadas: ocupadas.length,
                });
            } catch (error) {
                console.error("Error al obtener estadísticas:", error);
            }
        };
        loadStats();
    }, [idRestaurant]);

    return (
    <>
    <Row className="p-0 mt-3 mb-3">
        <Col>
        <Card>
            <Card.Body className="d-flex align-items-center gap-2">
                <MdOutlineDateRange className="icon-color-ReMesero" size={30} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">{stats.reservasHoy}</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Reservas hoy</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
            <Card.Body className="d-flex align-items-center gap-2">
                <IoMdCheckmarkCircleOutline  className="icon-color-MeDisponible" size={30} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">{stats.mesasDisponibles}</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Mesas disponibles</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
            <Card.Body className="d-flex align-items-center gap-2">
                <GoPeople className="icon-color-MeOcupadas" size={30} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">{stats.mesasOcupadas}</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Mesas ocupadas</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </>
      )
}