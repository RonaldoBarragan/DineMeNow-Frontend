import { Badge, Card, Container, Modal, Button } from 'react-bootstrap';
import './reservas-Proximas.css';
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { useState } from 'react';
function ReservasProximas() {
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
      <p className='title-modal-nombre'>La Mesa Criolla</p>
      {/* LADO IZQUIERDO */}
      <div className='modal-cuadro'>
      
      <div className="columna-pricipal">
      <div className='info-desc-modal'><CiCalendar size={15} /> 14 de octubre de 2025</div>
      <div className='info-desc-modal'><RxPeople size={15} /> 4 personas</div>
      </div>
      {/* LADO DERECHO */}
      <div className="columna-pricipal">
      <div className='info-desc-modal'><IoMdTime size={15} /> 19:00</div>
      <div className='info-desc-modal'><IoLocationOutline size={15} /> Mesa 5</div>
      </div>
      
    </div >
    <div className='estado'><Badge className="badge-confirmada">Confirmada</Badge></div>
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
        <span className="nombre">Ajiaco Santafereño</span>
        <span className="cantidad">Cantidad: 2</span>
      </div>

      <div className="precio">
        <span className="valor-total">$36.000</span>
        <span className="valor-unitario">$18.000 c/u</span>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className='platillo-row'>
      <div>
        <span className="nombre">Bandeja Paisa</span>
        <span className="cantidad">Cantidad: 1</span>
      </div>

      <div className="precio">
        <span className="valor-total">$25.000</span>
        <span className="valor-unitario">$25.000 c/u</span>
      </div>
    </div>

    {/* TOTAL */}
    <div className='platillo-total'>
      <span className="total">Total estimado:</span>
      <span className="valor-total-platos">$61.000</span>
    
        </div>
    </div>
    </div>
    {/* Solicitudes especiales */}
     <div className='info-solicitudes'>
      <p className='title-modal'>Solicitudes especiales</p>
      <div className='info'>
        <div className="campo">
          <span className="soli">Mesa cerca de la ventana</span>
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
          <span className="valor">res-001</span>
        </div>
        </div>
        {/* LADO DERECHO */}
        <div className="columna-reserva">
        <div className="campo-reserva">
          <span className="label">Fecha de creación</span>
          <span className="valor">3 oct 2025, 05:00</span>
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
    {/* 2 */}
    {tipoModal === 2 && (
      <>
    <Modal.Header closeButton>
      <Modal.Title className='tituloo'>
          Detalles de la Reserva
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {/* Info principal */}
    <div className='info'>
      <p className='title-modal-nombre'>Bella Napoli</p>
      {/* LADO IZQUIERDO */}
      <div className='modal-cuadro'>
      
      <div className="columna-pricipal">
      <div className='info-desc-modal'><CiCalendar size={15} /> 19 de octubre de 2025</div>
      <div className='info-desc-modal'><RxPeople size={15} /> 2 personas</div>
      </div>
      {/* LADO DERECHO */}
      <div className="columna-pricipal">
      <div className='info-desc-modal'><IoMdTime size={15} /> 20:30</div>
      <div className='info-desc-modal'><IoLocationOutline size={15} /> Mesa 8</div>
      </div>
      
    </div >
    <div className='estado'><Badge className="badge-Pendiente">Pendiente</Badge></div>
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
        <span className="nombre">Pizza Margherita</span>
        <span className="cantidad">Cantidad: 1</span>
      </div>

      <div className="precio">
        <span className="valor-total">$32.000</span>
        <span className="valor-unitario">$32.000 c/u</span>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className='platillo-row'>
      <div>
        <span className="nombre">Pasta Carbonara</span>
        <span className="cantidad">Cantidad: 1</span>
      </div>

      <div className="precio">
        <span className="valor-total">$28.000</span>
        <span className="valor-unitario">$28.000 c/u</span>
      </div>
    </div>

    {/* TOTAL */}
    <div className='platillo-total'>
      <span className="total">Total estimado:</span>
      <span className="valor-total-platos">$60.000</span>
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
          <span className="valor">res-002</span>
        </div>
        </div>
        {/* LADO DERECHO */}
        <div className="columna-reserva">
        <div className="campo-reserva">
          <span className="label">Fecha de creación</span>
          <span className="valor">5 oct 2025, 09:30</span>
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
  {/* CARDS */}
    <Container className='Card-Proximadas'>
      {/* CARD 1 */}
      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <div className="div-card">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo">La Mesa Criolla</Card.Title>
              <div className="header-right">
                <Badge className="badge-confirmada">Confirmada</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos">
    {/* IZQUIERDA */}
    <div className="info-text-prox">
      <div className="info-desc"><CiCalendar size={15} /> 14 de octubre de 2025</div>
      <div className="info-desc"><IoMdTime size={15} /> 19:00</div>
      <div className="info-desc"><RxPeople size={15} /> 4 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right">          
      <button onClick={() => {
    setTipoModal(1);
    setShowModal(true);
  }} className="btn-detalles">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc full-width" >
    <IoLocationOutline size={15} /> Mesa 5
  </div>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <LuChefHat size={15} />2 platillos pre-ordenados • Total: <span className="precio">$61.000</span>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <strong>Solicitudes especiales:</strong>Mesa cerca de la ventana
  </div>
        </Card.Body>
      </Card>

      <Card className='Card-Reservas-Proximas'>
        <Card.Body>
          <div className="div-card">
{/* fila 1: título + badge + botón */}
              <Card.Title className="card-titulo">Bella Napoli</Card.Title>
              <div className="header-right">
                <Badge className="badge-Pendiente">Pendiente</Badge>
              </div>
              
  {/* fila 2: fecha hora personas — baja por flex-basis: 100% */}
  <div className="fila-dos">
    {/* IZQUIERDA */}
    <div className="info-text-prox">
      <div className="info-desc"><CiCalendar size={15} /> 19 de octubre de 2025</div>
      <div className="info-desc"><IoMdTime size={15} /> 20:30</div>
      <div className="info-desc"><RxPeople size={15} /> 2 personas</div>
    </div>
    {/* DERECHA */}
    <div className="header-right">          
      <button onClick={() => {
    setTipoModal(2);
    setShowModal(true);
  }} className="btn-detalles">
        <MdOutlineRemoveRedEye size={15} />
        <span className="Ver-detalles">Ver detalles</span>
      </button>
    </div>
  </div>
  
  {/* fila 3: mesa */}
  <div className="info-desc full-width" >
    <IoLocationOutline size={15} /> Mesa 8
  </div>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <LuChefHat size={15} />2 platillos pre-ordenados • Total: <span className="precio">$60.000</span>
  </div>
  <hr className="divider" />
  <div className="info-desc">
    <strong>Solicitudes especiales:</strong>Mesa cerca de la ventana
  </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export default ReservasProximas;