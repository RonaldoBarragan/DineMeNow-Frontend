import React from 'react';
import { Modal, Button, Badge, ListGroup } from 'react-bootstrap';

const ModalInfoClient = ({ show, onHide, client }) => {
  // Función auxiliar para formatear dirección si viene como objeto o cadena
  const formatDireccion = (dir) => {
    if (!dir) return null;
    if (typeof dir === 'object') {
      const { calle, numero, ciudad, codigoPostal, pais } = dir;
      return [calle, numero, ciudad, codigoPostal, pais].filter(Boolean).join(', ');
    }
    return dir;
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Detalles del Cliente</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {client ? (
          <ListGroup variant="flush">
            {/* 1. Cliente */}
            <ListGroup.Item>
              <strong>Cliente:</strong> {client.nombreCliente || client.nombre || "Sin nombre registrado"}
            </ListGroup.Item>

            {/* 2. Documento de Identificación */}
            <ListGroup.Item>
              <strong>Documento:</strong>{' '}
              {typeof client.documento === 'object'
                ? `${client.documento?.tipo || ''} ${client.documento?.numero || ''}`.trim()
                : client.documento || "N/A"}
            </ListGroup.Item>

            {/* 3. Correo Electrónico */}
            <ListGroup.Item>
              <strong>Email:</strong> {client.correo || client.email || "N/A"}
            </ListGroup.Item>

            {/* 4. Teléfono sin duplicar +57 */}
            <ListGroup.Item>
              <strong>Teléfono:</strong>{' '}
              {client.telefono?.toString().startsWith("+57")
                ? client.telefono
                : `+57 ${client.telefono || 'N/A'}`}
            </ListGroup.Item>

            {/* 5. Reservas Totales directamente del Backend */}
            <ListGroup.Item>
              <strong>Reservas Totales:</strong>{' '}
              <Badge className="badge-count-reservas me-1">
                {client.reservasTotales ?? client.totalReservas ?? client.reservas ?? 0}
              </Badge>{' '}
              reservas
            </ListGroup.Item>

            {/* 6. Estado */}
            <ListGroup.Item>
              <strong>Estado:</strong>{' '}
              <Badge className="badge-state-confirmadaMesero">
                {client.estado || "Activo"}
              </Badge>
            </ListGroup.Item>

            {/* Dirección (si existe en la entidad) */}
            {client.direccion && (
              <ListGroup.Item>
                <strong>Dirección:</strong> {formatDireccion(client.direccion)}
              </ListGroup.Item>
            )}

            {/* Fecha de Registro (si existe en la entidad) */}
            {(client.fechaRegistro || client.createdAt) && (
              <ListGroup.Item>
                <strong>Fecha de Registro:</strong> {client.fechaRegistro || client.createdAt}
              </ListGroup.Item>
            )}
          </ListGroup>
        ) : (
          <p className="text-center text-muted py-3">No hay información seleccionada.</p>
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

export default ModalInfoClient;