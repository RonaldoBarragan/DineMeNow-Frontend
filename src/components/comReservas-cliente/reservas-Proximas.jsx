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
  updateReserva
} from "../../api/Client-Service";


function ReservasProximas() {

  const { user } = useAuth();

  const [reservas, setReservas] = useState([]);

  const [reservaSeleccionada, setReservaSeleccionada] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [tipoModal, setTipoModal] =
    useState(null);

  const [platosSeleccionados, setPlatosSeleccionados] =
    useState([]);


  // ==========================================
  // CARGAR RESERVAS
  // ==========================================

  useEffect(() => {

    const cargarReservas = async () => {

      try {

        const data = await getMyReservas();

        console.log(
          "Reservas cliente:",
          data
        );

        const reservasProximas = data.filter(
          (reserva) => {

            const fechaReserva = new Date(
              `${reserva.fecha}T${reserva.hora}`
            );

            const fechaActual = new Date();

            return fechaReserva >= fechaActual;
          }
        );

        setReservas(reservasProximas);

      } catch (error) {

        console.error(
          "Error cargando reservas:",
          error
        );

      }

    };


    if (user) {
      cargarReservas();
    }

  }, [user]);


  // ==========================================
  // CERRAR MODAL
  // ==========================================

  const cerrarModal = () => {

    // Cerrar modal
    setShowModal(false);

    // Quitar reserva seleccionada
    setReservaSeleccionada(null);

    // IMPORTANTE:
    // Limpiar los platos temporales
    setPlatosSeleccionados([]);

    // Limpiar tipo de modal
    setTipoModal(null);

  };


  // ==========================================
  // ABRIR MODAL EDITAR
  // ==========================================

  const abrirModalEditar = (reserva) => {

    console.log(
      "Reserva seleccionada:",
      reserva
    );


    // Guardamos la reserva
    setReservaSeleccionada({
      ...reserva
    });


    // ======================================
    // CARGAR PLATOS DE LA RESERVA
    // ======================================

    if (
      reserva.nombrePlatos &&
      reserva.nombrePlatos.length > 0
    ) {

      const platos =
        reserva.nombrePlatos.map(
          (nombre) => {

            /*
              Ejemplo:

              "2x Sushi"
              
              se convierte en:

              {
                nomPlato: "Sushi",
                cantidad: 2
              }
            */

            const match =
              nombre.match(
                /^(\d+)x\s(.+)$/
              );


            if (match) {

              return {

                nomPlato: match[2],

                cantidad:
                  Number(match[1])

              };

            }


            return {

              nomPlato: nombre,

              cantidad: 1

            };

          }
        );


      setPlatosSeleccionados(
        platos
      );

    } else {

      setPlatosSeleccionados([]);

    }


    setTipoModal(1);

    setShowModal(true);

  };


  // ==========================================
  // ABRIR MODAL ELIMINAR
  // ==========================================

  const abrirModalEliminar = (reserva) => {

    setReservaSeleccionada(
      reserva
    );

    setTipoModal(2);

    setShowModal(true);

  };


  // ==========================================
  // CAMBIAR CANTIDAD
  // ==========================================

  const cambiarCantidad = (
    nombre,
    valor
  ) => {

    setPlatosSeleccionados(
      (prev) =>

        prev.map(
          (plato) =>

            plato.nomPlato === nombre

              ? {

                  ...plato,

                  cantidad:
                    Math.max(
                      1,
                      plato.cantidad +
                      valor
                    )

                }

              : plato
        )

    );

  };


  // ==========================================
  // ELIMINAR PLATO
  // ==========================================

  const eliminarPlato = (
    nombre
  ) => {

    setPlatosSeleccionados(
      (prev) =>

        prev.filter(
          (plato) =>
            plato.nomPlato !== nombre
        )

    );

  };


  // ==========================================
  // ACTUALIZAR RESERVA
  // ==========================================

  const actualizarReserva =
    async () => {

      try {

        if (!reservaSeleccionada) {
          return;
        }


        // Convertir platos nuevamente
        // al formato del backend

        const nombresPlatos =
          platosSeleccionados.map(
            (plato) =>
              `${plato.cantidad}x ${plato.nomPlato}`
          );


        const reservaActualizada = {

          ...reservaSeleccionada,

          fecha:
            reservaSeleccionada.fecha,

          hora:
            reservaSeleccionada.hora,

          numeroMesa:
            Number(
              reservaSeleccionada.numeroMesa
            ),

          descripcion:
            reservaSeleccionada.descripcion,

          nombreCliente:
            reservaSeleccionada.nombreCliente,

          nombrePlatos:
            nombresPlatos

        };


        console.log(
          "Datos enviados:",
          reservaActualizada
        );


        const respuesta =
          await updateReserva(
            reservaSeleccionada.id,
            reservaActualizada
          );


        console.log(
          "Respuesta backend:",
          respuesta
        );


        setReservas(
          (reservasActuales) =>

            reservasActuales.map(
              (reserva) =>

                reserva.id ===
                reservaSeleccionada.id

                  ? respuesta

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
          "Ocurrió un error al actualizar la reserva."
        );

      }

    };


  // ==========================================
  // ELIMINAR RESERVA
  // ==========================================

  const eliminarReserva =
    async (reservaId) => {

      try {

        await deleteReserva(
          reservaId
        );


        setReservas(
          (reservasActuales) =>

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


        console.error(
          error.response?.data
        );


        alert(
          "No se pudo eliminar la reserva."
        );

      }

    };


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <>


      {/* ====================================== */}
      {/* MODAL */}
      {/* ====================================== */}

      <Modal

        size="lg"

        centered

        show={showModal}

        /*
          IMPORTANTE:

          La X del Modal.Header ejecutará
          esta función.
        */

        onHide={cerrarModal}

      >


        {/* ====================================== */}
        {/* EDITAR */}
        {/* ====================================== */}

        {tipoModal === 1 && (

          <>


            <Modal.Header closeButton>

              <Modal.Title>

                Editar Reserva

              </Modal.Title>

            </Modal.Header>


            <Modal.Body>

              <Row className="g-5">


                {/* ================================= */}
                {/* COLUMNA IZQUIERDA */}
                {/* ================================= */}

                <Col>

                  <Form>


          


                    {/* ============================= */}
                    {/* FECHA */}
                    {/* ============================= */}

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Fecha
                      </Form.Label>

                      <Form.Control

                        type="date"

                        value={
                          reservaSeleccionada
                            ?.fecha ||
                          ""
                        }

                        onChange={(e) =>

                          setReservaSeleccionada({

                            ...reservaSeleccionada,

                            fecha:
                              e.target.value

                          })

                        }

                      />

                    </Form.Group>


                    {/* ============================= */}
                    {/* HORA */}
                    {/* ============================= */}

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Hora
                      </Form.Label>

                      <Form.Control

                        type="time"

                        value={
                          reservaSeleccionada
                            ?.hora
                            ?.substring(0, 5) ||
                          ""
                        }

                        onChange={(e) =>

                          setReservaSeleccionada({

                            ...reservaSeleccionada,

                            hora:
                              e.target.value

                          })

                        }

                      />

                    </Form.Group>


                    {/* ============================= */}
                    {/* MESA */}
                    {/* ============================= */}

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Mesa
                      </Form.Label>

                      <Form.Control

                        type="number"

                        value={
                          reservaSeleccionada
                            ?.numeroMesa ||
                          ""
                        }

                        onChange={(e) =>

                          setReservaSeleccionada({

                            ...reservaSeleccionada,

                            numeroMesa:
                              e.target.value

                          })

                        }

                      />

                    </Form.Group>


                    {/* ============================= */}
                    {/* SOLICITUDES */}
                    {/* ============================= */}

                    <Form.Group className="mb-3">

                      <Form.Label>

                        Solicitudes especiales

                      </Form.Label>


                      <Form.Control

                        as="textarea"

                        rows={2}

                        placeholder="Alergias, preferencias de mesa, etc."

                        value={
                          reservaSeleccionada
                            ?.descripcion ||
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


                    {/* ============================= */}
                    {/* NOMBRE */}
                    {/* ============================= */}

                    <Form.Group className="mb-3">

                      <Form.Label>
                        Nombre
                      </Form.Label>


                      <Form.Control

                        type="text"

                        value={
                          reservaSeleccionada
                            ?.nombreCliente ||
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


                    {/* ============================= */}
                    {/* PLATILLOS */}
                    {/* ============================= */}

                    <h5 className="mb-3">

                      Platillos seleccionados

                    </h5>


                    {platosSeleccionados.length === 0 ? (

                      <p className="text-muted">

                        No hay platillos seleccionados.

                      </p>

                    ) : (

                      platosSeleccionados.map(
                        (plato, index) => (

                          <Card
                            key={index}
                            className="p-3 mb-3"
                          >

                            <div className="d-flex justify-content-between align-items-center">


                              {/* NOMBRE */}

                              <span>

                                {plato.nomPlato}

                              </span>


                              {/* CANTIDAD */}

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

                          </Card>

                        )

                      )

                    )}

                  </Form>

                </Col>


                {/* ================================= */}
                {/* COLUMNA DERECHA */}
                {/* ================================= */}

                <Col>

                  <h5 className="mb-3">

                    Menú - Pre-Ordenar

                  </h5>


                  {reservaSeleccionada?.menu?.length > 0 ? (

                    <div

                      className="overflow-auto"

                      style={{
                        maxHeight: "300px"
                      }}

                    >

                      {reservaSeleccionada.menu.map(
                        (plato, index) => (

                          <Card
                            key={index}
                            className="mb-3"
                          >

                            <Card.Body>

                              <Card.Title className="fw-bold fs-6">

                                {plato.nomPlato}

                              </Card.Title>


                              <Card.Text className="small mb-1">

                                {plato.descripcion}

                              </Card.Text>


                              <div className="d-flex justify-content-between align-items-center">

                                <span>

                                  $

                                  {plato.precio?.toLocaleString()}

                                </span>


                                <Button

                                  size="sm"

                                  className="buttonNaranjaDegrade"

                                  onClick={() => {

                                    const existe =
                                      platosSeleccionados.find(
                                        (p) =>
                                          p.nomPlato ===
                                          plato.nomPlato
                                      );


                                    if (existe) {

                                      cambiarCantidad(
                                        plato.nomPlato,
                                        1
                                      );

                                    } else {

                                      setPlatosSeleccionados(
                                        (prev) => [

                                          ...prev,

                                          {
                                            ...plato,
                                            cantidad: 1
                                          }

                                        ]
                                      );

                                    }

                                  }}

                                >

                                  Agregar

                                </Button>

                              </div>

                            </Card.Body>

                          </Card>

                        )
                      )}

                    </div>

                  ) : (

                    <p className="text-muted">

                      El menú del restaurante
                      no está disponible aquí.

                    </p>

                  )}

                </Col>

              </Row>

            </Modal.Body>


            {/* ====================================== */}
            {/* FOOTER */}
            {/* ====================================== */}

            <Modal.Footer>


              {/* CANCELAR */}

              <Button

                variant="light"

                onClick={cerrarModal}

              >

                Cancelar

              </Button>


              {/* GUARDAR */}

              <Button

                className="buttonNaranjaDegrade"

                onClick={actualizarReserva}

              >

                Guardar cambios

              </Button>


            </Modal.Footer>

          </>

        )}


        {/* ====================================== */}
        {/* MODAL ELIMINAR */}
        {/* ====================================== */}

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


              <strong>

                {reservaSeleccionada
                  ?.nombreRestaurante}

              </strong>


              <br />


              <span>

                {reservaSeleccionada
                  ?.fecha}

                {" - "}

                {reservaSeleccionada
                  ?.hora}

              </span>

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


      {/* ====================================== */}
      {/* CARDS */}
      {/* ====================================== */}

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


                    {/* RESTAURANTE */}

                    <Card.Title className="tituloo">

                      {reserva.nombreRestaurante}

                    </Card.Title>


                    <div className="fila-dos">


                      {/* INFORMACIÓN */}

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


                      {/* BOTONES */}

                      <div className="header-right">


                        {/* EDITAR */}

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


                        {/* ELIMINAR */}

                        <Button

                          variant="outline-secondary"

                          size="sm"

                          onClick={() =>
                            abrirModalEliminar(
                              reserva
                            )
                          }

                        >

                          <FaRegTrashAlt
                            size={15}
                          />

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
