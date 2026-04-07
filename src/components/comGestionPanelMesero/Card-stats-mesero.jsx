import { Card, Col, Row } from "react-bootstrap";

import { FcOk, FcOvertime, FcBusinesswoman } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GoClock } from "react-icons/go";



export default function Card_stats_mesero() {
  return (
          <>
          <Row className="p-0 mt-3 mb-3">
              <Col>
              <Card>
                  <Card.Body className="d-flex align-items-center gap-2">
                      <MdOutlineDateRange className="icon-color-ReMesero" size={30} />
                      <div className="flex-column">
                          <Card.Title className="fw-bold mb-0">12</Card.Title>
                          <Card.Text className="text-left mt-0 size-letra-propio">Reservas hoy</Card.Text>
                      </div>
                  </Card.Body>
              </Card>
              </Col>
  
              <Col>
              <Card>
                  <Card.Body className="d-flex align-items-center gap-2">
                      <IoMdCheckmarkCircleOutline  className="icon-color-MeDisponible" size={30} />
                      <div className="flex-column">
                          <Card.Title className="fw-bold mb-0">1.247</Card.Title>
                          <Card.Text className="text-left mt-0 size-letra-propio">Mesas disponibles</Card.Text>
                      </div>
                  </Card.Body>
              </Card>
              </Col>
  
              <Col>
              <Card>
                  <Card.Body className="d-flex align-items-center gap-2">
                      <GoPeople className="icon-color-MeOcupadas" size={30} />
                      <div className="flex-column">
                          <Card.Title className="fw-bold mb-0">2</Card.Title>
                          <Card.Text className="text-left mt-0 size-letra-propio">Mesas ocupadas</Card.Text>
                      </div>
                  </Card.Body>
              </Card>
              </Col>
  
              <Col>
              <Card>
                  <Card.Body className="d-flex align-items-center gap-2">
                      <GoClock className="icon-color-MeReservadas"s size={30} />
                      <div className="flex-column">
                          <Card.Title className="fw-bold mb-0">3</Card.Title>
                          <Card.Text className="text-left mt-0 size-letra-propio">Mesas reservadas</Card.Text>
                      </div>
                  </Card.Body>
              </Card>
              </Col>
          </Row>
          </>
      )
}