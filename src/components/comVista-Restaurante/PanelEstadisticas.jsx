import { useState, useEffect } from "react";

import { useAuth } from "../../context/AuthContext";

import { getListMesasRestaurant, getReservasRestaurant } from "../../api/Restaurant-Service";

import Stat from "./Estadisticas";

export default function PanelEstadisticas() {

    const { user } = useAuth();

    const [reservas, setReservas] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const cargarDatos = async () => {

            try {
                // Obtener mesas
                const mesasData = await getListMesasRestaurant(user.id);
                setMesas(mesasData);

                // Obtener reservas
                const reservasData = await getReservasRestaurant(user.id);
                setReservas(reservasData);

            } catch (error) {
                console.error("ERROR PANEL:", error);

            } finally {
                setLoading(false);
            }

        };

        if (user) {
            cargarDatos();
        }

    }, [user]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                Cargando estadísticas...
            </div>
        );
    }

    return (
        <div className="container-fluid p-0">
            <Stat
                reservas={reservas}
                mesas={mesas}
            />
        </div>
    );
}