import { Card } from 'react-bootstrap';
import { FcDepartment } from "react-icons/fc";

export default function Tittle() {
  return (
    <>
    <Card className="p-3 mb-4">
      <Card.Title className="fw-bold"><FcDepartment size={35} /> Panel de Gestión - Restaurante</Card.Title>
      <p className='text-left letra-size text-muted mb-0'>Gestor La Mesa Criolla - La Mesa Criolla</p>
    </Card>
    </>
  );
}