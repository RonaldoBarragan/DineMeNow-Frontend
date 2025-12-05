import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ChevronDown, Funnel, GeoAlt } from 'react-bootstrap-icons';
import './estilos2/FilterBar.css';

export default function FilterBar() {
    const [viewMode, setViewMode] = useState('lista');

    return (
        <div className="filter-bar-wrapper">
            <Container>
                <Row className="align-items-center py-2">
                    
                    {/* Filtros a la Izquierda */}
                    <Col xs={12} md={8} className="d-flex gap-3 filter-group">
                        <div className="filter-item d-flex align-items-center">
                            <GeoAlt className="me-2" size={16} /> 
                            Todas las zonas 
                            <ChevronDown className="ms-2" size={14} />
                        </div>
                        <div className="filter-item d-flex align-items-center">
                            <Funnel className="me-2" size={16} /> 
                            Todos los tipos 
                            <ChevronDown className="ms-2" size={14} />
                        </div>
                        <div className="filter-item d-flex align-items-center">
                            Todos los precios 
                            <ChevronDown className="ms-2" size={14} />
                        </div>
                    </Col>

                    {/* Botones de Vista a la Derecha */}
                    <Col xs={12} md={4} className="d-flex justify-content-end mt-2 mt-md-0">
                        <Button 
                            className={`btn-view-mode ${viewMode === 'lista' ? 'active' : ''}`}
                            onClick={() => setViewMode('lista')}
                        >
                            Lista
                        </Button>
                        <Button 
                            className={`btn-view-mode ${viewMode === 'mapa' ? 'active' : ''}`}
                            onClick={() => setViewMode('mapa')}
                        >
                            Mapa
                        </Button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}