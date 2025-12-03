import React from   'react';
import {Modal, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './estilos/Sessionrequired.css';
import { BiLogIn } from 'react-icons/bi';
import { PersonPlus } from 'react-bootstrap-icons';

function SessionRequiredModal({show, handleClose}) {
    //inicializacion useNavigate para cambio de ruta
    const navigate = useNavigate();

    //funcion para manejar el click en el boton de iniciar sesion
    const handleLoginClick = () => {
        handleClose();
        navigate('/IniciarSesion');
    };

    //funcion para manejar el click en el boton de registrarse
    const handleRegisterClick = () => {
        handleClose();
        navigate('/crear-cuenta');
    };

    return(
        //modal de bootstrap: show/onhide para la visibilidad
        <Modal
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="session-required-title"
        >
        <Modal.Header closeButton>
            <Modal.Title  id="session-required-title">Iniciar Sesion Requerido</Modal.Title>
        </Modal.Header>

        <Modal.Body className='text-center'>
           <p>Para acceder y buscar y reservar restaurantes, necesitas tener una cuenta en DineMeNow</p> 

           {/* boton iniciar sesion */}
           <Button
              variant='primary'
              className='buttonNaranjaDegrade'
              onClick={handleLoginClick}
              style={{width: '100%', marginBottom:'10px'}}
              >
                <BiLogIn size={20} className='me-2'/>
                Iniciar Sesion
              </Button>

              {/* boton registro */}
              <Button
              variant="secondary"
              onClick={handleRegisterClick}
              className='btn-registro'
              >
                <PersonPlus size={18} className='me-2'/>
                Crear Cuenta
              </Button>

              <p className='small mt-3'>
                ¿No tienes cuenta? Registrate gratis y comienza a hacer reservas.
              </p>
        </Modal.Body>
        </Modal>
    )
};

export default SessionRequiredModal;