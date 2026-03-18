import { Card, Col, Row } from "react-bootstrap";

import { FcOk, FcOvertime, FcBusinesswoman } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GoClock } from "react-icons/go";
import './CardsInfStats.css';


export default function CardsInfStats() {
  return (
    <Row className="mb-4">
      
      <Col className="mb-3">
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <MdOutlineDateRange size={30} className="me-2" />
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5">12</span>
              <span className="text-muted letra-size">Reservas hoy</span>
            </div>
          </div>
        </Card>
      </Col>

      <Col className="mb-3">
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <IoMdCheckmarkCircleOutline size={30} className="me-3" />
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5">8</span>
              <span className="text-muted letra-size">Mesas disponibles</span>
            </div>
          </div>
        </Card>
      </Col>

      <Col className="mb-3">
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <GoPeople size={30} className="icono-infStatsReservas" />
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5">9</span>
              <span className="text-muted letra-size">Confirmadas</span>
            </div>
          </div>
        </Card>
      </Col>

      <Col className="mb-3">
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <GoClock size={30} className="me-3" />
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5">3</span>
              <span className="text-muted letra-size">Pendientes</span>
            </div>
          </div>
        </Card>
      </Col>

    </Row>
  );
}