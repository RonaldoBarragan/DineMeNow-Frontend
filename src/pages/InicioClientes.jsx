import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/comHomePage/Header";
import FilterBar from "../components/comVistacliente/FilterBar";
import Restaulist from "../components/comHomePage/Restaulist";
import '../components/comVistacliente/estilos2/InicioCliente.css';


export default function InicioClientes() {
    const isAuthenticated = true;
    const [totalRestaurantes, setTotalRestaurantes] = useState(0);  

    return ( 
        <div className="vista-cliente-page-wrapper">
            {/* 1. HEADER */}
            <Header viewMode="results" />

            {/* 2. BARRA DE FILTROS */}
            <FilterBar />

            {/* 3. CONTENIDO */}
            <div className="mb-6 ms-4 mt-3">
                <h2 className="restaurants-title">
                    {!isAuthenticated
                    ? 'Restaurantes disponibles'
                : `${totalRestaurantes} restaurantes encontrados`}
                </h2>
            </div>  
            {/* Lista de restaurantes */}
            <Container className="my-4">
                <Restaulist 
                showDefaultTitle={false}
                isAuthenticated={isAuthenticated}
                // Opcional: pasar una función para actualizar el contador
                    onLoadData={(count) => setTotalRestaurantes(count)}
                />
            </Container>
        </div>
    );
}