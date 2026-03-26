import { Card, Container } from "react-bootstrap";
import { FiAlertTriangle } from "react-icons/fi";
import "./Configuracion-Cuenta.css";
function ConfiguracionCuenta(){
return(
  <Container className="card-confirestau">
    <Card className="confi-card-restau">
      <Card.Body>
        <div className="encabezado-confirestau">
          <div className="encabezado-title-confirestau">
            <FiAlertTriangle size={15} />
            <p className="encb-title-confirestau">Zona Peligrosa</p>
            
            <div className="encb-desc-confirestau">
              <FiAlertTriangle size={15} />
              <p className="encb-desc">La eliminación de tu cuenta es permanente e irreversible. Todos tus datos, reservas, menús y configuraciones se perderán para siempre.</p>
            </div>
          </div>

        </div>
      </Card.Body>
    </Card>
  </Container>
)
}
export default ConfiguracionCuenta;