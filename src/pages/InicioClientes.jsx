import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/comHomePage/Header";
import FilterBar from "../components/comVistacliente/FilterBar";
import Restaulist from "../components/comHomePage/Restaulist";
import '../components/comVistacliente/estilos2/InicioCliente.css';

export default function InicioClientes() {
    return (
        <div className="vista-cliente-page-wrapper">
            {/* 1. HEADER */}
            <Header viewMode="results" userName="Maria González" />

            {/* 2. BARRA DE FILTROS */}
            <FilterBar />

            {/* 3. CONTENIDO */}
            <Container className="my-4">
                <Restaulist />
            </Container>
        </div>
    );
}