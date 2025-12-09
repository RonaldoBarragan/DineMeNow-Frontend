import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/comHomePage/Header";
import FilterBar from "../components/comVistacliente/FilterBar";
import Restaulist from "../components/comHomePage/Restaulist";
import '../components/comVistacliente/estilos2/InicioCliente.css';

export default function InicioClientes() {
    const isAuthenticated = true;
    const filteredRestaurants = [1,2,3,4];  

    return ( 
        <div className="vista-cliente-page-wrapper">
            {/* 1. HEADER */}
            <Header viewMode="results" userName="Maria González" />

            {/* 2. BARRA DE FILTROS */}
            <FilterBar />

            {/* 3. CONTENIDO */}
            <div className="mb-6 ms-4 mt-3">
                <h2 className="restaurants-title">
                    {!isAuthenticated
                    ? 'Restaurantes disponibles'
                : `${filteredRestaurants.length} restaurantes encontrados`}
                </h2>
            </div>  
            {/* Lista de restaurantes */}
            <Container className="my-4">
                <Restaulist showDeaultTitle={false}/>
            </Container>
        </div>
    );
}