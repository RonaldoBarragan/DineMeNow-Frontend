import { Tab, Tabs } from "react-bootstrap";
import Profile_Form from "./Section-Profile-Form";
import Profile_Foto from "./Section-Profile-Foto";
import Security_Pass from "./Section-Security-Pass";

export default function Nav_Mesero() {
    return (
        <>        
        <Tabs defaultActiveKey="Profile" className="rounded-pill mb-3 tab-mesero" variant="pills" justify>
            <Tab eventKey="Profile" title="Mi perfil">
                <Profile_Foto />
                <Profile_Form />
            </Tab>
            <Tab eventKey="Segurity" title="Seguridad">
                <Security_Pass />
            </Tab>
        </Tabs>        
        </>
    )
}