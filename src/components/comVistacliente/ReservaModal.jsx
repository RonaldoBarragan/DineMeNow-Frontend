import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import "./estilos2/Style-Modal-Reserva.css";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
// Importa tu servicio aquí (ajusta la ruta según tu proyecto)
import { crearReserva } from "../../api/ReservaCrear";

export default function ReservaModal({ restaurant, mostrar, ocultar }) {
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [platosSeleccionados, setPlatosSeleccionados] = useState([]);

  // --- ESTADO PARA LOS CAMPOS DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    descripcion: "",
    nombreCliente: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Mapeamos el id del Form.Control al nombre del campo en el estado
    const fieldMap = {
      Fecha_Reserva: "fecha",
      Hora_Reserva: "hora",
      Solicitudes_Especiales: "descripcion",
      Nombre_Cliente: "nombreCliente",
      Telefono_Cliente: "telefono",
    };
    setFormData((prev) => ({ ...prev, [fieldMap[id]]: value }));
  };

  // --- LÓGICA DE ENVÍO AL BACKEND ---
  const manejarCrearReserva = async () => {
    // Validaciones básicas
    if (
      !mesaSeleccionada ||
      !formData.fecha ||
      !formData.hora ||
      !formData.nombreCliente
    ) {
      alert(
        "Por favor completa los campos obligatorios (Fecha, Hora, Mesa y Nombre)",
      );
      return;
    }

    // Construimos el objeto EXACTO que espera tu ReservaDto en Spring Boot
    const reservaParaEnviar = {
      nombreCliente: formData.nombreCliente,
      nombrePlatos: platosSeleccionados
        .map((p) => `${p.cantidad}x ${p.nombre}`)
        .join(", "),
      numeroMesa: mesaSeleccionada.id.toString(),
      fecha: formData.fecha, // Formato YYYY-MM-DD del input date
      hora: formData.hora + ":00", // Agregamos :00 para cumplir con LocalTime (HH:mm:ss)
      descripcion: formData.descripcion,
      estado: true,
    };

    try {
      const resultado = await crearReserva(reservaParaEnviar);
      console.log("Reserva exitosa:", resultado);
      alert("¡Reserva creada con éxito!");
      ocultar(); // Cerramos el modal
    } catch (error) {
      alert("Hubo un error al crear la reserva. Revisa la consola.");
    }
  };

  // Funciones de platos (mantengo las tuyas)
  const agregarPlato = (plato) => {
    setPlatosSeleccionados((prev) => {
      const existe = prev.find((p) => p.nombre === plato.nombre);
      if (existe) {
        return prev.map((p) =>
          p.nombre === plato.nombre ? { ...p, cantidad: p.cantidad + 1 } : p,
        );
      }
      return [...prev, { ...plato, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (nombre, valor) => {
    setPlatosSeleccionados((prev) =>
      prev.map((p) =>
        p.nombre === nombre
          ? { ...p, cantidad: Math.max(1, p.cantidad + valor) }
          : p,
      ),
    );
  };

  const eliminarPlato = (nombre) => {
    setPlatosSeleccionados((prev) => prev.filter((p) => p.nombre !== nombre));
  };

  return (
    <Modal size="lg" centered show={mostrar} onHide={ocultar}>
      <Modal.Header closeButton>
        <Modal.Title>Reservar en {restaurant?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-5">
          <Col>
            <Form>
              <h5 className="mb-3">
                <FiCalendar /> Detalles de la reserva
              </h5>
              <Form.Group controlId="Fecha_Reserva" className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="Hora_Reserva" className="mb-3">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={formData.hora}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Visualización de platos (mantengo tu Card) */}
              {platosSeleccionados.length > 0 && (
                <Card className="p-3 mb-3">
                  <Card.Title className="fs-6 fw-bold">
                    Platillos Seleccionados
                  </Card.Title>
                  {platosSeleccionados.map((plato, idx) => (
                    <div
                      key={idx}
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <small>
                        {plato.nombre} x{plato.cantidad}
                      </small>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => eliminarPlato(plato.nombre)}
                      >
                        x
                      </Button>
                    </div>
                  ))}
                </Card>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Mesa</Form.Label>
                <Row className="g-2">
                  {restaurant?.mesas.map((mesa) => (
                    <Col xs={6} key={mesa.id}>
                      <Card
                        className={`mesa-card p-2 text-center rounded border ${mesaSeleccionada?.id === mesa.id ? "mesa-selected" : ""}`}
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            mesaSeleccionada?.id === mesa.id
                              ? "#fff3e0"
                              : "white",
                        }}
                        onClick={() => setMesaSeleccionada(mesa)}
                      >
                        <div className="mesa-nombre fw-semibold">
                          Mesa {mesa.id}
                        </div>
                        <small className="text-muted">
                          {mesa.personas} pers.
                        </small>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Solicitudes_Especiales">
                <Form.Label>Solicitudes especiales</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={formData.descripcion}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId="Nombre_Cliente">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.nombreCliente}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Telefono_Cliente">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>

          {/* Sección de Menú (mantengo tu Col derecha) */}
          <Col>
            <h5 className="mb-3">Menú - Pre-Ordenar</h5>
            <div className="overflow-auto" style={{ maxHeight: "400px" }}>
              {restaurant?.menu.map((plato, idx) => (
                <Card key={idx} className="mb-2">
                  <Card.Body className="p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold small">{plato.nombre}</div>
                        <div className="text-success small">
                          ${plato.precio}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="orange"
                        onClick={() => agregarPlato(plato)}
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={ocultar}>
          Cancelar
        </Button>
        <Button className="buttonNaranjaDegrade" onClick={manejarCrearReserva}>
          Crear Reserva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
