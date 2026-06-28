import { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";
import { getListMesasRestaurant } from "../../api/Gestion-Restaurant";
import { obtenerReservasPorNit } from "../../api/reservaRestauService";
import Stat from "./Estadisticas";

export default function PanelEstadisticas() {

    const { user } = useAuth();

    const [reservas, setReservas] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const cargarDatos = async () => {

            try {

                if (!user || !user.token) {
                    return;
                }

                console.log("========== PANEL ==========");
                console.log("USER:", user);

                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                };

                // Obtener restaurante
                const { data: restaurante } = await axios.get(
                    `http://localhost:8080/api/restaurantes/${user.id}`,
                    config
                );

                console.log("RESTAURANTE:", restaurante);
                console.log("NIT:", restaurante.nit);

                // Obtener mesas
                const mesasData = await getListMesasRestaurant(
                    user.id,
                    user.token
                );

                console.log("MESAS API:", mesasData);

                setMesas(mesasData);

                // Obtener reservas
                const reservasData = await obtenerReservasPorNit(
                    restaurante.nit,
                    user.token
                );

                console.log("RESERVAS API:", reservasData);

                setReservas(reservasData);

            } catch (error) {

                console.error("ERROR PANEL:", error);

                if (error.response) {
                    console.log("STATUS:", error.response.status);
                    console.log("DATA:", error.response.data);
                }

            } finally {
                setLoading(false);
            }

        };

        if (user) {
            cargarDatos();
        }

    }, [user]);

    useEffect(() => {
        console.log("ESTADO MESAS:", mesas);
    }, [mesas]);

    useEffect(() => {
        console.log("ESTADO RESERVAS:", reservas);
    }, [reservas]);

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