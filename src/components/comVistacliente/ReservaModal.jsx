import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import "./estilos2/Style-Modal-Reserva.css";
import { useEffect, useState } from "react";
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

  //Reiniciar campos al cerrar el modal
  useEffect(() => {
    if (!mostrar) {
      setFormData({
        fecha: "",
        hora: "",
        descripcion: "",
        nombreCliente: "",
        telefono: "",
      });
      setMesaSeleccionada(null);
      setPlatosSeleccionados([]);
    }
  }, [mostrar]);

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
      //agregacion del nit y otros
      nitRestaurante: restaurant?.nit || "",
      nombreCliente: formData.nombreCliente,
      nombrePlatos: platosSeleccionados
        .map((p) => `${p.cantidad}x ${p.nombre}`),
      numeroMesa: mesaSeleccionada.id.toString(),
      fecha: formData.fecha, // Formato YYYY-MM-DD del input date
      hora: formData.hora ? `${formData.hora}:00` : "", // Agregamos :00 para cumplir con LocalTime (HH:mm:ss) 
      descripcion: formData.descripcion,
      estado: "PENDIENTE",
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
      <Modal.Header closeButton  >
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

              {/* Visualización de platos */}
              
                <Card className={`p-3 mb-3 transition-card ${platosSeleccionados.length > 0 ? "visible" : "hidden"}`}>
                  <Card.Title className="fs-6 fw-bold">
                    Platillos Seleccionados
                  </Card.Title>
                  {platosSeleccionados.map((plato, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center mb-3">
                      <span>{plato.nombre} <small className="text-success">${plato.precio.toLocaleString()}</small></span>
                      <div className="d-flex align-items-center gap-2">                
                        <Button variant="outline-secondary" size="sm" onClick={() => cambiarCantidad(plato.nombre, -1)}>-</Button>
                        <span>{plato.cantidad}</span>
                        <Button variant="outline-secondary" size="sm" onClick={() => cambiarCantidad(plato.nombre, 1)}>+</Button>
                        <Button variant="outline-danger" size="sm" onClick={() => eliminarPlato(plato.nombre)}>x</Button>
                      </div>
                    </div>
                    
                  ))}
                  {/* Total */}
                  <hr className="m-0 p-0"/>
                  <div className="d-flex justify-content-between fw-bold pt-1">
                    <span>Total:</span>
                    <span>${platosSeleccionados.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toLocaleString()}</span>
                  </div>
                </Card>
              
              <Form.Group className="mb-3">
                <Form.Label>Mesa</Form.Label>
                <Row className="g-2">
                  {restaurant?.mesas?.map((mesa) => (
                    <Col xs={6} key={mesa.id}>
                      <Card
                        className={`mesa-card p-2 text-center rounded border ${mesaSeleccionada?.id === mesa.id ? "mesa-selected" : ""}`}
                        onClick={() => setMesaSeleccionada(mesa)}
                      >
                        <div className="mesa-nombre fw-semibold">
                          Mesa {mesa.id}
                        </div>
                        <small className="text-muted">
                          {mesa.personas} personas • {mesa.tipo}
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
                  placeholder="Alergias, preferencias de mesa, etc"
                  value={formData.descripcion}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="p-0">
                <Col>
                  <Form.Group controlId="Nombre_Cliente">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
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
                      placeholder="Telefono"
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
            <h5 className="mb-3"><FiCalendar /> Menú - Pre-Ordenar</h5>
            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
              {restaurant?.menu?.map((plato, idx) => (
                <Card key={idx} className="mb-3">
                  <Card.Body>
                    <Card.Title className="fw-bold fs-6">{plato.nombre}</Card.Title>
                    <Card.Text className="text-left small mb-1">{plato.descripcion}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="color-letra-precio">${plato.precio.toLocaleString()}</span>
                      <Button
                        size="sm"
                        className="buttonNaranjaDegrade size-letra-propio"
                        onClick={() => agregarPlato(plato)}
                      >
                        {platosSeleccionados.find(p => p.nombre === plato.nombre) 
                        ? <><span>{platosSeleccionados.find(p => p.nombre === plato.nombre).cantidad}</span> <span>+</span></> 
                        : "Agregar"}
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
        <Button className="bg-white" variant="light" onClick={ocultar}>
          Cancelar
        </Button>
        <Button className="buttonNaranjaDegrade" onClick={manejarCrearReserva}>
          Crear Reserva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
