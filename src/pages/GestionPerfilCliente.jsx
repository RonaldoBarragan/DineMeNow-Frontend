import { Container } from "react-bootstrap"
import HeadSectionGP from "../components/comGestionCliente/headSectionGP";
import NavSectionGP from "../components/comGestionCliente/navSectionGP";

export default function GestionPerfilCliente() {
    return (
        <Container className="container py-5 container-cards">
        <div className="mt-3">
            <HeadSectionGP></HeadSectionGP>
            <NavSectionGP></NavSectionGP>
        </div>
        </Container>
    )
}