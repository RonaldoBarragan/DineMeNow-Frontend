import { Container } from "react-bootstrap";
import Card_Acc from "../components/comAdmin-Plataform/Card-Info-Acc";
import '../components/comAdmin-Plataform/style-page.css';
import Card_stats from "../components/comAdmin-Plataform/Card-stats";

export default function AdminP_Panel() {
    return (
        <>
        <Container className='margen-provi container-cards'>
            <Card_Acc />
            <Card_stats />
        </Container>
        </>
    )
}