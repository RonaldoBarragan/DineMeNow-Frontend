import { Card, Container } from "react-bootstrap";
import Tittle from "../components/comVista-Restaurante/Tittle";
import Stat from "../components/comVista-Restaurante/Estadisticas";
import styles from '../components/comVista-Restaurante/style.module.css';
import NavSecciones from "../components/comVista-Restaurante/Nav-Secciones";

export default function Vista_Restaurante() {
    return (
        <>
        <Container className={styles["margen-provi container-principal-propio"]}>
            <Tittle />
            <Stat className={`${styles.clase1} ${otrosStyles.clase2}`}/>
            <Card className="p-3">
                <NavSecciones />
            </Card>
        </Container>
        </>
    )
}