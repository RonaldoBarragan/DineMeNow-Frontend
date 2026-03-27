import { Card, Container } from "react-bootstrap";
import { FiAlertTriangle } from "react-icons/fi";
import "./Configuracion-Cuenta.css";
import { RiDeleteBin6Line } from "react-icons/ri";
function ConfiguracionCuenta(){
return(
  <Container className="card-confirestau">
    <Card className="confi-card-restau">
      <Card.Body>
        <div className="encabezado-confirestau">
          <div className="encabezado-title-confirestau">
            <FiAlertTriangle size={15} />
            <p className="encb-title-confirestau">Zona Peligrosa</p>
          </div>
          <div className="encb-desc-confirestau">
              <FiAlertTriangle size={17} />
              <p className="encb-desc">La eliminación de tu cuenta es permanente e irreversible. Todos tus datos, reservas, menús y configuraciones se perderán para siempre.</p>
          </div>
          <p className="desc-pregunta fw-bold">¿Qué sucede al eliminar tu cuenta?</p>
          <p className="desc-list">• Se eliminará toda la información de tu restaurante</p>
          <p className="desc-list">• Se cancelarán todas las reservas futuras</p>
          <p className="desc-list">• Se eliminará tu menú y configuraciones</p>
          <p className="desc-list">• Los clientes no podrán encontrar tu restaurante</p>
          <p className="desc-list">• No podrás recuperar tu cuenta después</p>
          <button className="btn-eliminar-confirestau">
          <RiDeleteBin6Line size={15}/> <p className='Eliminar-confirestau'>Eliminar Cuenta Permanentemente</p>
          </button>
        </div>
      </Card.Body>
    </Card>
  </Container>
)
}
export default ConfiguracionCuenta;