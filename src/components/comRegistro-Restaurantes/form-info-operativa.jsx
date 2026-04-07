import { Card, Col, Form, Row } from "react-bootstrap";
import './page-style.css';
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDeliveryDining } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaMapMarkerAlt, FaHashtag, FaCity } from "react-icons/fa";

export default function Form_Info_Operativa({onChange, onDireccionChange, setFormData, valores}) {
    //funcion para manejar los servicios,checkbox
    const handleCheckboxChange = (e) =>{
        const {value, checked} = e.target;
        //creacion de copia limpia del array
        let listaServicios = [...valores.servicios];

        if(checked){
            //se agrega el valor solo si no existe para evitar duplicados
            if(!listaServicios.includes(value)){
                listaServicios.push(value)
            }
        }else {
            //filtrar para quitar el elemento  y re-indexar el array, quitando los null
           listaServicios = listaServicios.filter(s => s !== value && s !==null);
        }

        //usar .filter(Boolean) para eliminar cualquier null
        const listaLimpia = listaServicios.filter(Boolean);

        //actualizar el  array de servicio en registrocompleto
        setFormData({
            ...valores,
            servicios: listaLimpia
        });
    };

    const handleDiasChange = (e) => {
    const { value, checked } = e.target;
    let listaDias = [...valores.diasAbierto];

    if (checked) {
        if (!listaDias.includes(value)) {
            listaDias.push(value);
        }
    } else {
        listaDias = listaDias.filter(d => d !== value);
    }

    setFormData({
        ...valores,
        diasAbierto: listaDias
    });
};

    return (
        <>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="fw-bold mb-3">Información Operativa</Card.Title>
                <p className="text-muted text-left">Detalles sobre el funcionamiento de tu restaurante</p>

                <div className="mt-3">
                    {/* direccion */}
                    <h6 className="fw-bold text-primary mb-3">Dirección del Local</h6>
                    <Row className="mb-4">
                        <Col md={4}>
                        <Form.Label className="fw-semibold">Calle / Carrera <span className="text-danger">*</span></Form.Label>
                            <div className="input-container-relative">
                                <Form.Control 
                                    name="calle"
                                    value={valores.direccion.calle}
                                    onChange={onDireccionChange}
                                    placeholder="Ej: Calle 26" 
                                    className="inputForm icon-form-padding-left" 
                                />
                                <FaMapMarkerAlt className="icon-form-overlay" />
                            </div>
                        </Col>

                        <Col md={4}>
                            <Form.Label className="fw-semibold">Número / Placa <span className="text-danger">*</span></Form.Label>
                            <div className="input-container-relative">
                                <Form.Control 
                                    name="numero"
                                    value={valores.direccion.numero}
                                    onChange={onDireccionChange}
                                    placeholder="Ej: # 10 - 05" 
                                    className="inputForm icon-form-padding-left" 
                                />
                                <FaHashtag className="icon-form-overlay" />
                            </div>
                        </Col>

                        <Col md={4}>
                            <Form.Label className="fw-semibold">Ciudad <span className="text-danger">*</span></Form.Label>
                            <div className="input-container-relative">
                                <Form.Control 
                                    name="ciudad"
                                    value={valores.direccion.ciudad}
                                    onChange={onDireccionChange}
                                    placeholder="Bogotá" 
                                    className="inputForm icon-form-padding-left" 
                                />
                                <FaCity className="icon-form-overlay" />
                            </div>
                        </Col>

                        <Col md={4}>
                            <Form.Label className="fw-semibold">Codigo Postal <span className="text-danger">*</span></Form.Label>
                            <div className="input-container-relative">
                                <Form.Control 
                                    name="codigoPostal"
                                    value={valores.direccion.codigoPostal}
                                    onChange={onDireccionChange}
                                    placeholder="111110" 
                                    className="inputForm icon-form-padding-left" 
                                />
                                <FaCity className="icon-form-overlay" />
                            </div>
                        </Col>

                        <Col md={4}>
                            <Form.Label className="fw-semibold">Pais <span className="text-danger">*</span></Form.Label>
                            <div className="input-container-relative">
                                <Form.Control 
                                    name="pais"
                                    value={valores.direccion.pais}
                                    onChange={onDireccionChange}
                                    placeholder="Colombia" 
                                    className="inputForm icon-form-padding-left" 
                                />
                                <FaCity className="icon-form-overlay" />
                            </div>
                        </Col>

                    </Row>
            
                    {/* capacidad y horarios*/}
                    <h6 className="fw-bold text-primary mb-3">Operación</h6>
                    <Row className="mb-3">
                        <Col md={4}>
                        <Form.Label className="fw-semibold">Capacidad Total (personas) <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">                       
                        <Form.Control 
                        name="capacidad"
                        value={valores.capacidad}
                        onChange={onChange}
                        type="number" 
                        placeholder="50" 
                        className="inputForm icon-form-padding-left" />
                        <HiMiniUserGroup className="icon-form-overlay" />
                        </div> 
                        </Col>

                        <Col>
                        <Form.Label className="fw-semibold">Horario de Apertura <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">
                        <Form.Control
                        name="horarioApertura"
                        value={valores.horarioApertura} 
                        onChange={onChange}
                        type="time" 
                        className="inputForm" />
                        </div>
                        </Col>

                        <Col>
                        <Form.Label className="fw-semibold">Horario de Cierre <span className="text-danger">*</span></Form.Label>
                        <div className="input-container-relative">
                        <Form.Control 
                        name="horarioCierre"
                        value={valores.horarioCierre}
                        onChange={onChange}
                        type="time" 
                        className="inputForm" />
                        </div>
                        </Col>
                    </Row>

                {/*dias abierto*/}
                    <h6 className="fw-bold text-primary mt-4 mb-3">Días de Atención</h6>
            <Row className="mb-3">
                <Col>
                     <div className="d-flex flex-wrap gap-3">
            {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia) => (
                <Form.Check
                    key={dia}
                    inline
                    type="checkbox"
                    label={dia}
                    value={dia}
                    checked={valores.diasAbierto.includes(dia)}
                    onChange={handleDiasChange}
                />
            ))}
        </div>
    </Col>
</Row>

                    {/*servicios*/}
                    <Row>
                        <Form.Label className="letra-size">Servicios Adicionales</Form.Label>
                        <Col>                       
                        <div className="d-flex align-items-center gap-2">
                        <MdDeliveryDining />
                        <Form.Check 
                        type="checkbox" 
                        label="Servicio a domicilio"
                        value="Servicio a domicilio" 
                        checked={valores.servicios.includes("Servicio a domicilio")}
                        onChange={handleCheckboxChange}
                        />
                        </div>
                        </Col>

                        <Col>
                        <div className="d-flex align-items-center gap-2">
                        <FaParking />
                        <Form.Check 
                        type="checkbox" 
                        label="Parqueadero"
                        value="Parqueadero"
                        checked={valores.servicios.includes("Parqueadero")}
                        onChange={handleCheckboxChange}
                         />
                        </div>
                        </Col>

                        <Col>
                        <div className="d-flex align-items-center gap-2">
                        <FaCreditCard />
                        <Form.Check 
                        type="checkbox" 
                        label="Acepta tarjetas"
                        value="Acepta tarjetas"
                        checked={valores.servicios.includes("Acepta tarjetas")}
                        onChange={handleCheckboxChange}
                         />
                        </div>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}