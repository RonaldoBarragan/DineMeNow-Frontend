import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ChevronDown, Funnel, GeoAlt } from 'react-bootstrap-icons';
import './estilos2/FilterBar.css';

export default function FilterBar() {
    const [viewMode, setViewMode] = useState('lista');

    return (
    <div className="filter-bar-container">
        <Container>
            <Row className="g-3">
                    
                    {/* Filtro 1 a la Izquierda */}
                    <Col xs={12} md={3}> 
                    <div className='filter-trigger'>
                        <GeoAlt className='icon' />
                        <span>Todas las zonas</span>
                        <ChevronDown className='chevron'/>
                    </div>
                    </Col>
                    
                    {/*filtro 2*/}
                    <Col xs={12} md={3}>
                        <div className="filter-trigger">
                            <Funnel className="icon" /> 
                            <span>Todos los tipos</span> 
                            <ChevronDown className="chevron" />
                        </div>
                    </Col>

                    {/* Filtro 3 */}
                    <Col xs={12} md={3}>
                        <div className="filter-trigger">
                            <span>Todos los precios</span> 
                            <ChevronDown className="chevron "/>
                        </div>
                    </Col>
            

                    {/* Botones de Vista a la Derecha */}
                    <Col xs={12} md={3}>
                        <div className="view-buttons">
                            <Button
                                className={`view-btn ${viewMode === 'lista' ? 'active' : ''}`}
                                onClick={() => setViewMode('lista')}
                            >
                                Lista
                            </Button>
                            <Button
                                className={`view-btn ${viewMode === 'mapa' ? 'active' : ''}`}
                                onClick={() => setViewMode('mapa')}
                            >
                                Mapa
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}