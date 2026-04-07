import Card from 'react-bootstrap/Card';
import { LuUtensilsCrossed } from "react-icons/lu";
import './style-Mesero.css';

function Card_info_mesero () {
  return (
        <>
        <Card>
            <Card.Body className="d-flex align-items-center gap-2">
                <LuUtensilsCrossed className="icon-color-AccMesero" size={35} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">Panel de Mesero</Card.Title>
                    <Card.Text className="text-left mt-0 size-letra-propio">Carlos Mendez - La Mesa Criolla</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}

export default Card_info_mesero;