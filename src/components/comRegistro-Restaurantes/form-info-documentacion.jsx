import React from "react";
import './form-info-documentacion.css';
import './page-style.css';
import { Files } from "react-bootstrap-icons";
import { Button, Card, CardBody, CardTitle, Form, Row, Col } from "react-bootstrap";

export default function Form_Info_Document({onFileChange, valores}) {

    //funcion para manejar la seleccion de archivos
    const handleInternalFileChange = (e) => {
        const {name, files} = e.target;
        if(files && files[0]){
            //enviar a registrocompleto el nombre y el archivo
            onFileChange(name, files[0]);
        }
    };



    return (
        <>
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Documentación</Card.Title>
                <p className="text-muted text-left">Sube los documentos requeridos para verificar tu restaurante</p>
               
                <div className="mt-3">
                    <Row>
                        {/*caja para el rut*/}
                        <Col md={6} className="mb-3">
                         <Form.Label className="fw-semibold">Registro Único Tributario (RUT)</Form.Label>
                <div className="d-flex flex-column align-items-center caja-document p-3 border rounded text-center">
                    <div className="icon-document mb-2">📄</div>
                    <p className="small text-muted mb-2">
                            {valores.urlRut ? ` Seleccionado: ${valores.urlRut}` : "Sube tu RUT en PDF"}
                    </p>

                    <Form.Control
                        name="urlRut" // Coincide con el DTO
                        type="file" 
                        accept=".pdf,.jpg,.png"
                        onChange={handleInternalFileChange}
                        className="form-control-sm"
                    />
                </div>
                </Col>

                {/*caja para camara*/}
                <Col md={6} className="mb-3">
                         <Form.Label className="fw-semibold">Camara de Comercio</Form.Label>
                <div className="d-flex flex-column align-items-center caja-document p-3 border rounded text-center">
                    <div className="icon-document mb-2">🏛️</div>
                    <p className="small text-muted mb-2">
                            {valores.urlCamaraComercio ? ` Seleccionado: ${valores.urlCamaraComercio}` : "Sube el certificado vigente"}
                    </p>

                    <Form.Control
                        name="urlCamaraComercio" // Coincide con el DTO
                        type="file" 
                        accept=".pdf,.jpg,.png"
                        onChange={handleInternalFileChange}
                        className="form-control-sm"
                         />
                    </div>
                </Col>
            </Row>

            <p className="text-muted small mt-2">Formatos aceptados: <strong>PDF, JPG, PNG</strong> (máximo 10MB)</p>
            

                </div>
            </Card.Body>
        </Card>
        </>

    );
}