import { Button, Card, Form } from "react-bootstrap";
import './form-info-documentacion.css';

export default function Form_Info_Document() {
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Documentación</Card.Title>
                <p className="text-muted">Sube los documentos requeridos para verificar tu restaurante</p>

                <Form>
                    <Form.Label className="letra-size">Documentos (RUT, Camara de Comercio, etc.)</Form.Label> 
                    {/* Caja de arrastrar */}
                    <div className="d-flex flex-column align-items-center mt-3 caja-document">
                    
                    <div className="icon-document">↑</div>

                    <p className="text-muted mb-2">Arrastra y suelta tus archivos aquí, o haz clic para seleccionar</p>

                    <p className="text-muted letra-size">Formatos aceptados: <strong>PDF, JPG, PNG</strong> (máximo 10MB)</p>

                    <Form.Control type="file" className="mt-2 text-muted" />
                    </div>
                    {/* Botones inferiores */}
                    <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button variant="light" className="px-4" href="/">Cancelar</Button>

                    <Button className="px-4 buttonNaranjaDegrade">Enviar Solicitud</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}