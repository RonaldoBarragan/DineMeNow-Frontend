import { LiaEbay } from 'react-icons/lia';
import './añadir-empreado.css'
import {Card, Row, Col,Container, Button, Modal, Form, FormGroup } from 'react-bootstrap'; 
import { LuUserRoundPlus } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { useState } from 'react';
import { getRestaurantByIdAcc, registrarEmpleado } from "../../api/Restaurant-Service";
import { useAuth } from '../../context/AuthContext';
function Añadirempreado (){

    const [correo, setCorreo] = useState ("")
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    const [contraseña, setContraseña] = useState ("");
    const contraseñaValida = /^\d{4}$/.test(contraseña);

    const[cargo,setcargo] = useState("");
    const[tipoDocumento,setTipoDocumento] = useState("");
    
    const [telefono, setTelefono] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [ARL, setARL] = useState("");
    const [Documento, setDocumento] = useState("");
    const [EPS, setEPS] = useState("");
    const {user} = useAuth();

    const formularioValido =
    tipoDocumento &&
    Documento &&
    Nombre &&
    Apellido &&
    correoValido &&
    telefono &&
    EPS &&
    ARL &&
    cargo &&
    contraseñaValida;


    const confirmarRegistro = async () => {
        const restauranteinfo = await getRestaurantByIdAcc(user.id);
       const empleado = {
        
        documento: {
            tipo: tipoDocumento,
            numero: Documento
        },
        nombre: Nombre,
        apellido: Apellido,
        telefono: telefono,
        correo: correo,
        eps: EPS,
        arl: ARL,
        direccion: {
            calle: restauranteinfo.direccion.calle,
            numero: restauranteinfo.direccion.numero,
            ciudad: restauranteinfo.direccion.ciudad,
            codigoPostal: restauranteinfo.direccion.codigoPostal,
            pais: restauranteinfo.direccion.pais
        },
        rol: cargo,
        estado: "ACTIVO",
        foto: "",
        idRestaurante: restauranteinfo.nit,
        user: correo,
        password: contraseña,
    };


    try {

        const respuesta = await registrarEmpleado(empleado);

        console.log("Empleado creado:", respuesta);

        alert("Empleado registrado correctamente");

    } catch (error) {

        console.error("Error:", error);

        alert("Error al registrar empleado");

    }

    };

    const cancelarRegistro = () => {
        // Lógica para cancelar el registro, por ejem  limpiar los campos o cerrar el modal
        setNombre("");
        setApellido("");
        setEPS("");
        setARL("");
        setTelefono("");
        setCorreo("");
        setcargo("");
        setContraseña("");
        setTipoDocumento("");
        setDocumento("");
    };

    return (
        <>
        <Card className="card-Añadir">
            <p className='registro-empleado'> 
                <LuUserRoundPlus /> 
                Registro de Nuevo Empleado
            </p>
            <p className='datos-empre'> 
                <LuUser /> 
                Datos Personales
            </p>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Tipo de documento *</Form.Label>
                            <Form.Select value={tipoDocumento} 
                            onChange={(e) => setTipoDocumento(e.target.value)} className='input'>
                                <option value={""} disabled>seleccionar</option>
                                <option>CC</option>
                                <option>CE</option>
                                <option>TI</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Documento *</Form.Label>
                            <Form.Control className='input' type='text' placeholder='Ej:123456789' 
                            value={Documento}
                            onChange={(e) => { 
                                const soloNumeros = e.target.value.replace(/\D/g, "");
                                setDocumento(soloNumeros);
                            }}
                            />                        
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Nombre *</Form.Label>
                            <Form.Control  className='input'
                            type='text' 
                            placeholder='Ej:Carlos'
                            value={Nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>Apellidos *</Form.Label>
                            <Form.Control className='input' type='text' placeholder='Ej:Alberto' 
                            value={Apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            />                        
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label className='campo'>Correo Electronico *</Form.Label>
                        <div className='icono-input'><CiMail className='icono-control'/> 
                        <Form.Control 
                        className='input' 
                        type='email' 
                        placeholder='ejemplo@correo.com'
                        value={correo}
                        onChange={(e) =>setCorreo(e.target.value)}
                        /></div>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label className='campo'>  Telefono *</Form.Label>
                        <div className='icono-input'><FiPhone className='icono-control'/><Form.Control className='input' type='tel' placeholder='3201234567' 
                        value={telefono}
                        onChange={(e) => { 
                                const soloNumeros = e.target.value.replace(/\D/g, "");
                                setTelefono(soloNumeros);
                            }}
                        /></div>
                    </Form.Group>
                    </Col>
                </Row>
                
                <p className='datos-empre'><FiBriefcase /> Datos Laborales</p>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>EPS *</Form.Label>
                            <Form.Control  className='input'
                            type='text' 
                            placeholder='Ingrese la EPS'
                            value={EPS}
                            onChange={(e) => setEPS(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='campo'>ARL *</Form.Label>
                            <Form.Control  className='input'
                            type='text' 
                            placeholder='Ingrese la ARL'
                            value={ARL}
                            onChange={(e) => setARL(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className='campo'>Cargo/Puesto *</Form.Label>

                            <Form.Select value={cargo} 
                            onChange={(e) => setcargo (e.target.value)} className='input'>
                                <option value={""} disabled>Seleccione un cargo</option>
                                <option value="ROL_MESERO">Mesero</option>
                                <option value="ROL_CHEF">Chef</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
           
    <Form.Group className="mt-3">
        <Form.Label className="campo">
            Contraseña
        </Form.Label>

        <Form.Control
            className="input"
            type="text"
            placeholder="Ingrese la contraseña"
            value={contraseña}
            onChange={(e) => { 
                const soloNumeros = e.target.value.replace(/\D/g, "");
                setContraseña(soloNumeros);
                }}
        />
    </Form.Group>
            <div className="botones">
                <Button className='btn-cancelar' 
                onClick={cancelarRegistro}>
                    Cancelar
                </Button>
                <Button 
                    className='btn-confirmar' 
                    disabled={!formularioValido}
                    onClick={confirmarRegistro}
                >
                    Confirmar Registro
                </Button>
            </div>
        </Card>
        
      </>
    )
}
export default Añadirempreado;