import { Card, Container, Modal, Button, Form, Col, Row } from "react-bootstrap";
import "./reservas-Proximas.css";

import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import {
  getMyReservas,
  deleteReserva,
  updateReserva,
  obtenerMesas,
  obtenerPlatos
} from "../../api/Client-Service";

function ReservasProximas() {

  const { user } = useAuth();

  const [reservas, setReservas] = useState([]);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState(null);
  const [platosSeleccionados, setPlatosSeleccionados] = useState([]);

  useEffect(() => {

    const cargarReservas = async () => {

      try {

        const data = await getMyReservas();

        console.log("RESERVAS COMPLETAS:", data);

        const reservasProximas = data.filter((reserva) => {

          const fechaReserva = new Date(
            `${reserva.fecha}T${reserva.hora}`
          );

          return fechaReserva >= new Date();

        });

        setReservas(reservasProximas);

      } catch (error) {

        console.error("Error cargando reservas:", error);

      }

    };

    if (user) {
      cargarReservas();
    }

  }, [user]);

  const cerrarModal = () => {

    setShowModal(false);
    setReservaSeleccionada(null);
    setPlatosSeleccionados([]);
    setTipoModal(null);

  };

  const abrirModalEditar = async (reserva) => {

    try {

      console.log("RESERVA PARA EDITAR:", reserva);

      const [menuRestaurante, mesasRestaurante] = await Promise.all([
        obtenerPlatos(reserva.nitRestaurante),
        obtenerMesas(reserva.nitRestaurante)
      ]);

      console.log("MENU DEL RESTAURANTE:", menuRestaurante);
      console.log("MESAS DEL RESTAURANTE:", mesasRestaurante);

      setReservaSeleccionada({
        ...reserva,
        menu: menuRestaurante,
        mesas: mesasRestaurante
      });

      const platosReserva = Array.isArray(reserva.nombrePlatos)
        ? reserva.nombrePlatos
        : [];

      const platos = platosReserva.map((nombre) => {

        const match = nombre.match(/^(\d+)x\s(.+)$/);

        const nombrePlato = match
          ? match[2].trim()
          : nombre.trim();

        const cantidad = match
          ? Number(match[1])
          : 1;

        const platoMenu = menuRestaurante.find(
          (plato) =>
            plato.nomPlato?.trim().toLowerCase() ===
            nombrePlato.trim().toLowerCase()
        );

        return {
          ...(platoMenu || {}),
          nomPlato: platoMenu?.nomPlato || nombrePlato,
          cantidad,
          precio: Number(
            platoMenu?.precio ??
            platoMenu?.valor ??
            0
          )
        };

      });

      setPlatosSeleccionados(platos);

      setTipoModal(1);
      setShowModal(true);

    } catch (error) {

      console.error("Error obteniendo menú y mesas:", error);

      alert(
        error.message ||
        "No se pudo cargar el menú y las mesas del restaurante."
      );

    }

  };

  const abrirModalEliminar = (reserva) => {

    setReservaSeleccionada(reserva);
    setTipoModal(2);
    setShowModal(true);

  };

  const agregarPlato = (plato) => {

    setPlatosSeleccionados((prev) => {

      const existe = prev.find(
        (p) =>
          p.nomPlato?.trim().toLowerCase() ===
          plato.nomPlato?.trim().toLowerCase()
      );

      if (existe) {

        return prev.map((p) =>
          p.nomPlato?.trim().toLowerCase() ===
          plato.nomPlato?.trim().toLowerCase()
            ? {
                ...p,
                cantidad: p.cantidad + 1,
                precio: Number(
                  plato.precio ??
                  plato.valor ??
                  p.precio ??
                  0
                )
              }
            : p
        );

      }

      return [
        ...prev,
        {
          ...plato,
          precio: Number(
            plato.precio ??
            plato.valor ??
            0
          ),
          cantidad: 1
        }
      ];

    });

  };

  const cambiarCantidad = (nombre, valor) => {

    setPlatosSeleccionados((prev) =>
      prev.map((plato) =>
        plato.nomPlato === nombre
          ? {
              ...plato,
              cantidad: Math.max(
                1,
                plato.cantidad + valor
              )
            }
          : plato
      )
    );

  };

  const eliminarPlato = (nombre) => {

    setPlatosSeleccionados((prev) =>
      prev.filter(
        (plato) =>
          plato.nomPlato !== nombre
      )
    );

  };

  const totalPagar = platosSeleccionados.reduce(
    (total, plato) =>
      total +
      Number(plato.precio || 0) *
      Number(plato.cantidad || 0),
    0
  );

  const actualizarReserva = async () => {

    try {

      if (!reservaSeleccionada) {
        return;
      }

      const nombresPlatos = platosSeleccionados.map(
        (plato) =>
          `${plato.cantidad}x ${plato.nomPlato}`
      );

      const reservaActualizada = {

        nitRestaurante:
          reservaSeleccionada.nitRestaurante,

        nombreCliente:
          reservaSeleccionada.nombreCliente,

        nombreRestaurante:
          reservaSeleccionada.nombreRestaurante,

        nombrePlatos:
          nombresPlatos,

        numeroMesa:
          Number(reservaSeleccionada.numeroMesa),

        fecha:
          reservaSeleccionada.fecha,

        hora:
          reservaSeleccionada.hora?.length === 5
            ? `${reservaSeleccionada.hora}:00`
            : reservaSeleccionada.hora,

        descripcion:
          reservaSeleccionada.descripcion || "",

        estado:
          reservaSeleccionada.estado

      };

      console.log(
        "DATOS ACTUALIZADOS:",
        reservaActualizada
      );

      const respuesta = await updateReserva(
        reservaSeleccionada.id,
        reservaActualizada
      );

      console.log(
        "RESPUESTA BACKEND:",
        respuesta
      );

      setReservas((reservasActuales) =>
        reservasActuales.map((reserva) =>
          reserva.id === reservaSeleccionada.id
            ? {
                ...reserva,
                ...respuesta,
                nombrePlatos: nombresPlatos,
                numeroMesa:
                  reservaSeleccionada.numeroMesa,
                fecha:
                  reservaSeleccionada.fecha,
                hora:
                  reservaSeleccionada.hora
              }
            : reserva
        )
      );

      cerrarModal();

      alert(
        "Reserva actualizada correctamente."
      );

    } catch (error) {

      console.error(
        "Error al actualizar:",
        error
      );

      console.error(
        "Respuesta servidor:",
        error.response?.data
      );

      alert(
        error.response?.data?.mensaje ||
        error.message ||
        "Ocurrió un error al actualizar la reserva."
      );

    }

  };

  const eliminarReserva = async (reservaId) => {

    try {

      await deleteReserva(reservaId);

      setReservas((reservasActuales) =>
        reservasActuales.filter(
          (reserva) =>
            reserva.id !== reservaId
        )
      );

      cerrarModal();

      alert(
        "Reserva eliminada correctamente."
      );

    } catch (error) {

      console.error(
        "Error al eliminar:",
        error
      );

      alert(
        "No se pudo eliminar la reserva."
      );

    }

  };

  return (

    <>

      <Modal
        size="lg"
        centered
        show={showModal}
        onHide={cerrarModal}
      >

        {tipoModal === 1 && (

          <>

            <Modal.Header closeButton>

              <Modal.Title>
                Editar Reserva
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <Row className="g-3">

                <Col>

                  <Form>
                    <Form.Group className="mb-3">

                      <Form.Label>
                        Fecha
                      </Form.Label>

                      <Form.Control
                        type="date"
                        value={
                          reservaSeleccionada?.fecha ||
                          ""
                        }
                        onChange={(e) =>
                          setReservaSeleccionada({
                            ...reservaSeleccionada,
                            fecha: e.target.value
                          })
                        }
                      />

                    </Form.Group>

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Hora
                      </Form.Label>

                      <Form.Control
                        type="time"
                        value={
                          reservaSeleccionada?.hora
                            ?.substring(0, 5) ||
                          ""
                        }
                        onChange={(e) =>
                          setReservaSeleccionada({
                            ...reservaSeleccionada,
                            hora: e.target.value
                          })
                        }
                      />

                    </Form.Group>

                    <Card
                      className={`p-3 mb-3 transition-card ${
                        platosSeleccionados.length > 0
                          ? "visible"
                          : "hidden"
                      }`}
                    >

                      <Card.Title className="fs-6 fw-bold">

                        Platillos Seleccionados

                      </Card.Title>

                      {platosSeleccionados.map(
                        (plato, index) => (

                          <div
                            key={index}
                            className="d-flex justify-content-between align-items-center mb-3"
                          >

                            <div>

                              <div className="fw-semibold">

                                {plato.nomPlato}

                              </div>

                              <small className="text-success">

                                $
                                {Number(
                                  plato.precio || 0
                                ).toLocaleString()}

                              </small>

                            </div>

                            <div className="d-flex align-items-center gap-2">

                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() =>
                                  cambiarCantidad(
                                    plato.nomPlato,
                                    -1
                                  )
                                }
                              >
                                -
                              </Button>

                              <span>
                                {plato.cantidad}
                              </span>

                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() =>
                                  cambiarCantidad(
                                    plato.nomPlato,
                                    1
                                  )
                                }
                              >
                                +
                              </Button>

                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() =>
                                  eliminarPlato(
                                    plato.nomPlato
                                  )
                                }
                              >
                                x
                              </Button>

                            </div>

                          </div>

                        )
                      )}

                      <hr className="m-0 p-0" />

                      <div className="d-flex justify-content-between fw-bold pt-2">

                        <span>
                          Total:
                        </span>

                        <span>

                          $
                          {totalPagar.toLocaleString()}

                        </span>

                      </div>

                    </Card>

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Mesa
                      </Form.Label>

                      <Row className="g-2">

                        {reservaSeleccionada?.mesas?.map(
                          (mesa) => (

                            <Col
                              xs={6}
                              key={
                                mesa.id ||
                                mesa.numMesa
                              }
                            >

                              <Card
                                className={`mesa-card p-2 text-center rounded border ${
                                  Number(
                                    reservaSeleccionada?.numeroMesa
                                  ) ===
                                  Number(
                                    mesa.numMesa
                                  )
                                    ? "mesa-selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  setReservaSeleccionada({
                                    ...reservaSeleccionada,
                                    numeroMesa:
                                      mesa.numMesa
                                  })
                                }
                              >

                                <div className="mesa-nombre fw-semibold">

                                  Mesa {mesa.numMesa}

                                </div>

                                <small className="text-muted">

                                  Capacidad:
                                  {" "}
                                  {mesa.capacidad}
                                  {" "}
                                  personas

                                </small>

                              </Card>

                            </Col>

                          )
                        )}

                      </Row>

                    </Form.Group>

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Solicitudes especiales
                      </Form.Label>

                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Alergias, preferencias de mesa, etc."
                        value={
                          reservaSeleccionada?.descripcion ||
                          ""
                        }
                        onChange={(e) =>
                          setReservaSeleccionada({
                            ...reservaSeleccionada,
                            descripcion:
                              e.target.value
                          })
                        }
                      />

                    </Form.Group>

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Nombre
                      </Form.Label>

                      <Form.Control
                        type="text"
                        value={
                          reservaSeleccionada?.nombreCliente ||
                          ""
                        }
                        onChange={(e) =>
                          setReservaSeleccionada({
                            ...reservaSeleccionada,
                            nombreCliente:
                              e.target.value
                          })
                        }
                      />

                    </Form.Group>

                  </Form>

                </Col>

                <Col>

                  <h5 className="mb-3">

                    <CiCalendar />
                    {" "}
                    Menú

                  </h5>

                  <div
                    className="overflow-auto"
                    style={{
                      maxHeight: "430px"
                    }}
                  >

                    {reservaSeleccionada?.menu?.length > 0 ? (

                      reservaSeleccionada.menu.map(
                        (plato, index) => {

                          const platoSeleccionado =
                            platosSeleccionados.find(
                              (p) =>
                                p.nomPlato
                                  ?.trim()
                                  .toLowerCase() ===
                                plato.nomPlato
                                  ?.trim()
                                  .toLowerCase()
                            );

                          return (

                            <Card
                              key={
                                plato.id ||
                                index
                              }
                              className="mb-3"
                            >

                              <Card.Body>

                                <Card.Title className="fw-bold fs-6">

                                  {plato.nomPlato}

                                </Card.Title>

                                <Card.Text className="text-left small mb-1">

                                  {plato.descripcion}

                                </Card.Text>

                                <div className="d-flex justify-content-between align-items-center">

                                  <span className="color-letra-precio">

                                    $
                                    {Number(
                                      plato.precio ??
                                      plato.valor ??
                                      0
                                    ).toLocaleString()}

                                  </span>

                                  <Button
                                    size="sm"
                                    className="buttonNaranjaDegrade size-letra-propio"
                                    onClick={() =>
                                      agregarPlato(
                                        plato
                                      )
                                    }
                                  >

                                    {platoSeleccionado ? (

                                      <>
                                        <span>
                                          {platoSeleccionado.cantidad}
                                        </span>

                                        {" "}

                                        <span>
                                          +
                                        </span>
                                      </>

                                    ) : (

                                      "Agregar"

                                    )}

                                  </Button>

                                </div>

                              </Card.Body>

                            </Card>

                          );

                        }
                      )

                    ) : (

                      <p className="text-muted">
                        No se encontró el menú del restaurante.
                      </p>

                    )}

                  </div>

                </Col>

              </Row>

            </Modal.Body>

            <Modal.Footer>

              <Button
                className="bg-white"
                variant="light"
                onClick={cerrarModal}
              >
                Cancelar
              </Button>

              <Button
                className="buttonNaranjaDegrade"
                onClick={actualizarReserva}
              >
                Guardar cambios
              </Button>

            </Modal.Footer>

          </>

        )}

        {tipoModal === 2 && (

          <>

            <Modal.Header closeButton>

              <Modal.Title>
                Eliminar Reserva
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <p>
                ¿Estás seguro de que deseas
                eliminar esta reserva?
              </p>
            </Modal.Body>

            <Modal.Footer>

              <Button
                variant="secondary"
                onClick={cerrarModal}
              >
                Cancelar
              </Button>

              <Button
                variant="danger"
                onClick={() =>
                  eliminarReserva(
                    reservaSeleccionada.id
                  )
                }
              >
                Eliminar
              </Button>

            </Modal.Footer>

          </>

        )}

      </Modal>

      <Container className="Card-Proximadas">

        {reservas.length === 0 ? (

          <p className="text-muted text-center">
            No tienes reservas próximas.
          </p>

        ) : (

          reservas.map(
            (reserva) => (

              <Card
                key={reserva.id}
                className="Card-Reservas-Proximas"
              >

                <Card.Body>

                  <div className="div-card">

                    <Card.Title >

                      {reserva.nombreRestaurante}

                    </Card.Title>

                    <div className="fila-dos">

                      <div className="info-text-prox">

                        <div className="info-desc">

                          <CiCalendar />

                          {reserva.fecha}

                        </div>

                        <div className="info-desc">

                          <IoMdTime />

                          {reserva.hora}

                        </div>

                        <div className="info-desc">

                          <IoLocationOutline />

                          Mesa {reserva.numeroMesa}

                        </div>

                      </div>

                      <div className="header-right">

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            abrirModalEditar(
                              reserva
                            )
                          }
                        >

                          <FiEdit size={15} />

                        </Button>

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            abrirModalEliminar(
                              reserva
                            )
                          }
                        >

                          <FaRegTrashAlt size={15} />

                        </Button>

                      </div>

                    </div>

                  </div>

                </Card.Body>

              </Card>

            )
          )

        )}

      </Container>

    </>

  );

}

export default ReservasProximas;