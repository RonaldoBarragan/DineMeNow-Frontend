import './reservas-Pasadas.css';
import { Badge, Card, Container, Modal, Button } from 'react-bootstrap';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { useState } from 'react';
function ReservasPasadas() {
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState(null);
  return (
     <>
    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
      {/* 1 */}
    {tipoModal === 1 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title className='tituloo'>
          Detalles de la Reserva
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {/* Info principal */}
    <div className='info'>
      <p className='title-modal-nombre'>Sakura Sushi</p>
      {/* LADO IZQUIERDO */}
      <div className='modal-cuadro'>
      
      <div className="columna-pricipal">
      <div className='info-desc-modal'><CiCalendar size={15} /> 24 de septiembre de 2025</div>
      <div className='info-desc-modal'><RxPeople size={15} /> 3 personas</div>
      </div>
      {/* LADO DERECHO */}
      <div className="columna-pricipal">
      <div className='info-desc-modal'><IoMdTime size={15} /> 18:00</div>
      <div className='info-desc-modal'><IoLocationOutline size={15} /> Mesa 12</div>
      </div>
      
    </div >
    <div className='estado'><Badge className="badge-Completada">Completada</Badge></div>
    </div>

    {/* Información de contacto */}
    <div className='info-contacto'>
      <p className='title-modal'>Información de contacto</p>
      <div className='info'>
        {/* LADO IZQUIERDO */}
        <div className='fila-contacto'>
        <div className="columna-contac">
        <div className="campo">
          <span className="label">Nombre</span>
          <span className="valor">Juan Pérez</span>
        </div>
        <div className="campo">
          <span className="label">Email</span>
          <span className="valor">cliente@gmail.com</span>
        </div>
        </div>
        {/* LADO DERECHO */}
        <div className="columna-contac">
        <div className="campo">
          <span className="label">Teléfono</span>
          <span className="valor">3001234567</span>
        </div>
        </div>
    </div>
    </div>
    </div>

    {/* Info Platillos pre-ordenados */}
     <div className='info-platillos'>
      <p className='title-modal'><LuChefHat size={15} />Platillos pre-ordenados</p>
        <div className='info'>
          <div className='platillo-row'>
      <div>
        <span className="nombre">Sushi Variado (12 pzs)</span>
        <span className="cantidad">Cantidad: 2</span>
      </div>

      <div className="precio">
        <span className="valor-total">$90.000</span>
        <span className="valor-unitario">$45.000 c/u</span>
      </div>
    </div>

    {/* TOTAL */}
    <div className='platillo-total'>
      <span className="total">Total estimado:</span>
      <span className="valor-total-platos">$90.000</span>
        </div>
    </div>
    </div>
    {/* Solicitudes especiales */}
     <div className='info-solicitudes'>
      <p className='title-modal'>Solicitudes especiales</p>
      <div className='info'>
        <div className="campo">
          <span className="soli">Sin wasabi</span>
        </div> 
    </div>
    </div>
    {/* Información adicional */}
     <div className='info-reserva'>
      <p className='title-modal'>Información adicional</p>
      <div className='info'>
        {/* LADO IZQUIERDO */}
        <div className='fila-reserva'>
        <div className="columna-reserva">
        <div className="campo-reserva">
          <span className="label">ID de reserva</span>
          <span className="valor">res-003</span>
        </div>
        </div>
        {/* LADO DERECHO */}
        <div className="columna-reserva">
        <div className="campo-reserva">
          <span className="label">Fecha de creación</span>
          <span className="valor">20 sep 2025, 04:15</span>
        </div>
        </div>
        </div>
      </div>
    </div>

    </Modal.Body>
    <Modal.Footer>
      <Button className="btn-cerrar" onClick={() => setShowModal(false)}><span className="cerrar">Cerrar</span></Button>
    </Modal.Footer>
    </>
)}

  </Modal>
    <Container className='Card-Pasadas'>
      <Card className='Card-Reservas-Pasadas'>
        <Card.Body>
          <div className="div-card-pasadas">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo-pasadas">Sakura Sushi</Card.Title>
              <div className="header-right">
                <Badge className="badge-Completada">Completada</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos-pasadas">
    {/* IZQUIERDA */}
    <div className="info-text-pasadas">
      <div className="info-desc-pasadas"><CiCalendar size={15} /> 24 de septiembre de 2025</div>
      <div className="info-desc-pasadas"><IoMdTime size={15} /> 18:00</div>
      <div className="info-desc-pasadas"><RxPeople size={15} /> 3 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right-pasadas">          
      <button onClick={() => {
    setTipoModal(1);
    setShowModal(true);
  }} className="btn-detalles-pasadas">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles-pasadas">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc-pasadas full-width" >
    <IoLocationOutline size={15} /> Mesa 12
  </div>
  </div>
  <hr className="divider-pasadas" />
  <div className="info-desc-pasadas">
    <LuChefHat size={15} />1 platillo pre-ordenado • Total: <span className="precio-pasado">$90.000</span>
  </div>
  <hr className="divider-pasadas" />
  <div className="info-desc-pasadas">
    <strong>Solicitudes especiales:</strong>Sin wasabi
  </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export default ReservasPasadas;