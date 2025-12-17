import { Container } from "react-bootstrap";
import Form_Info_Operativa from "../components/comRegistro-Restaurantes/form-info-operativa";
import Form_Restaurante from "../components/comRegistro-Restaurantes/form-info-restaurante";
import Form_Info_Document from "../components/comRegistro-Restaurantes/form-info-documentacion";
import '../components/comRegistro-Restaurantes/page-style.css';

export default function Registro_Restaurante() {
    return (
        <>
        <Container className="py-5 container-cards mt-4">
            <Form_Restaurante />
            <Form_Info_Operativa />
            <Form_Info_Document />
        </Container>
        </>
    )
}