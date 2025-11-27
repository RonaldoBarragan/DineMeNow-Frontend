import { Container } from "react-bootstrap";
import Form_Info_Operativa from "../components/comRegistro-Restaurantes/form-info-operativa";
import Form_Restaurante from "../components/comRegistro-Restaurantes/form-info-restaurante";
import Form_Info_Document from "../components/comRegistro-Restaurantes/form-info-documentacion";

export default function Registro_Restaurante() {
    return (
        <>
        <Container className="container py-5" style={{ maxWidth: "900px", minHeight: "100vh"}}>
            <Form_Restaurante />
            <Form_Info_Operativa />
            <Form_Info_Document />
        </Container>
        </>
    )
}