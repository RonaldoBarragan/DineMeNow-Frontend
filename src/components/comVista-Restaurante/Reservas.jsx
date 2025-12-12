import { Card, Table, Button, Badge } from "react-bootstrap";
import { Eye, Pencil, X } from "react-bootstrap-icons";

export default function Reservas() {
  return (
    <>
    {/*
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button className="nav-link active">Gestión de Reservas</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Gestión del Menú</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Gestión de Mesas</button>
      </li>
    </ul>
    */}

    {/* Encabezado */}
    <Card className="p-3">
      <Card.Title className="fw-bold d-flex justify-content-between">Reservas Recientes <Button variant="danger">+ Nueva Reserva</Button></Card.Title>
      {/* Tabla */}
      <Card.Body>
        <Table hover>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Personas</th>
              <th>Estado</th>
              <th>Solicitudes Especiales</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* FILA 1 */}
            <tr>
              <td>
                <strong>Ana Rodríguez</strong><br />
                <small className="text-muted">+57 300 123 4567</small>
              </td>
              <td>2025-08-27</td>
              <td>19:30</td>
              <td>4</td>
              <td>
                <Badge bg="success" pill>Confirmada</Badge>
              </td>
              <td>Mesa cerca de la ventana</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2"><Eye /></Button>
              </td>
            </tr>

            {/* FILA 2 */}
            <tr>
              <td>
                <strong>Carlos Mendoza</strong><br />
                <small className="text-muted">+57 301 987 6543</small>
              </td>
              <td>2025-08-27</td>
              <td>20:00</td>
              <td>2</td>
              <td>
                <Badge bg="warning" text="dark" pill>Pendiente</Badge>
              </td>
              <td>Celebración de aniversario</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2"><Eye /></Button>
                <Button variant="outline-secondary" size="sm" className="me-2"><Pencil /></Button>
                <Button variant="outline-danger" size="sm"><X /></Button>
              </td>
            </tr>

            {/* FILA 3 */}
            <tr>
              <td>
                <strong>Sofía García</strong><br />
                <small className="text-muted">+57 302 456 7890</small>
              </td>
              <td>2025-08-27</td>
              <td>18:00</td>
              <td>6</td>
              <td>
                <Badge bg="success" pill>Confirmada</Badge>
              </td>
              <td>Ninguna</td>
              <td>
                <Button variant="outline-secondary" size="sm"><Eye /></Button>
              </td>
            </tr>

            {/* FILA 4 */}
            <tr>
              <td>
                <strong>Miguel Torres</strong><br />
                <small className="text-muted">+57 305 234 5678</small>
              </td>
              <td>2025-08-28</td>
              <td>19:00</td>
              <td>3</td>
              <td>
                <Badge bg="warning" text="dark" pill>Pendiente</Badge>
              </td>
              <td>Sin gluten</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2"><Eye /></Button>
                <Button variant="outline-secondary" size="sm" className="me-2"><Pencil /></Button>
                <Button variant="outline-danger" size="sm"><X /></Button>
              </td>
            </tr>
          </tbody>
        </Table>
        </Card.Body>
      </Card>
    </>
  )
}