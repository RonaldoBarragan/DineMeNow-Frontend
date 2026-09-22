import React from 'react';
import { Modal, Button, Badge, ListGroup } from 'react-bootstrap';

const ModalInfoRestaurant = ({ show, onHide, restaurant }) => {
  const getBadgeClass = (estado) => {
    switch (estado?.toLowerCase()) {
      case 'activo':
      case 'active':
        return 'badge-state-confirmadaMesero';
      case 'pendiente':
        return 'badge-state-pendienteMesero';
      case 'inactivo':
      case 'cancelado':
        return 'badge-state-canceladaMesero';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Detalles del Restaurante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {restaurant ? (
          <ListGroup variant="flush">
            {/* Restaurante y NIT */}
            <ListGroup.Item>
              <strong>Restaurante:</strong> {restaurant.nombre || restaurant.name || "Sin Nombre"} (NIT: {restaurant.nit || "N/A"})
            </ListGroup.Item>

            {/* Razón Social y Propietario */}
            <ListGroup.Item>
              <strong>Razón Social:</strong> {restaurant.razonSocial || "N/A"}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Propietario / Gestor:</strong> {restaurant.propietario || restaurant.representante || "N/A"}
            </ListGroup.Item>

            {/* Contacto */}
            <ListGroup.Item>
              <strong>Contacto:</strong> {restaurant.correo || restaurant.email || "N/A"} | Telefono: {restaurant.telefono ? `+57 ${restaurant.telefono}` : "N/A"}
            </ListGroup.Item>

            {/* Ubicación */}
            <ListGroup.Item>
              <strong>Ubicación:</strong> {restaurant.direccion?.calle 
                ? `${restaurant.direccion.calle} ${restaurant.direccion.numero || ''}` 
                : (restaurant.direccion || "N/A")} 
              {restaurant.zona || restaurant.direccion?.zona ? ` (${restaurant.zona || restaurant.direccion?.zona})` : ''}
            </ListGroup.Item>

            {/* Categoria y Rango de Precios */}
            <ListGroup.Item>
              <strong>Categoría:</strong> {restaurant.categoria || restaurant.type || "Gastronomía"} | <strong>Precios:</strong> {restaurant.rangoPrecios || restaurant.precios || "Moderado"}
            </ListGroup.Item>

            {/* Capacidad */}
            <ListGroup.Item>
              <strong>Capacidad Total:</strong> {restaurant.capacidad || restaurant.aforo || "N/A"} personas
            </ListGroup.Item>

            {/* Estado de la cuenta */}
            <ListGroup.Item>
              <strong>Estado Cuenta:</strong>{' '}
              <Badge className={`${getBadgeClass(restaurant.estado || restaurant.status)} text-capitalize`}>
                {restaurant.estado || restaurant.status || "Activo"}
              </Badge>
            </ListGroup.Item>

            {/* Descripción */}
            <ListGroup.Item>
              <strong>Descripción:</strong> {restaurant.descripcion || restaurant.description || 'Sin descripción registrada'}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <p className="text-center text-muted py-3">No hay información cargada para este restaurante.</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button className="buttonNaranjaDegrade" size="sm" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInfoRestaurant;