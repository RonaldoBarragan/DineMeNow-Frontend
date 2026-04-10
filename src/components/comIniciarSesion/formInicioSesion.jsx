import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formInicioSesion.css';
import { AiOutlineLock } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { loginUsuario } from '../../services/authService';
import { useAuth, normalizeRole } from '../../context/AuthContext';

function FormularioInicioSesion() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!correo.trim() || !password) {
      setError('Ingresa tu correo electrónico y contraseña.');
      return;
    }

    setLoading(true);
    try {
      const response = await loginUsuario({ correo, password });

      if (!response.roles || response.roles.length === 0) {
        setError('El usuario no tiene roles asignados');
        return;
      }

      const rawRole = typeof response.roles[0] === 'string'
        ? response.roles[0]
        : response.roles[0]?.nombre || response.roles[0]?.name;

      const role = normalizeRole(rawRole);

      if (!role) {
        setError('No se pudo determinar el rol del usuario.');
        return;
      }
      console.log("response del backend:", response);  // ← agrega est
      login(response);

      if (role === 'cliente') {
        navigate('/cliente/inicio');
      } else if (role === 'admin') {
        navigate('/adminp/panel');
      } else if (role === 'restaurante') {
        navigate('/restaurante/vista');
      } else if (role === 'empleado' || role === 'mesero') {
        navigate('/mesero/panel');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'No se pudo iniciar sesión. Revisa tus datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="cardForm ">
        <Card.Body>
        <p className='pForm'>Iniciar Sesión</p>
<Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label className='labelForm'>Email</Form.Label>
					<div className='input-container-relative'>
                <Form.Control
                  type="email"
                  placeholder="tu@email.com"
                  className='inputForm icon-form-padding-left'
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
								<div className='icon-form-overlay'>
                <BsEnvelope size={15} />
              	</div>
								</div>
                </Form.Group>

                <Form.Group className="mb-3 text-start custom-input-group" controlId="formBasicPassword">
                <Form.Label className='labelForm'>Contraseña</Form.Label>
                <div className='input-container-relative'>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  className='inputForm icon-form-padding-left'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='icon-form-overlay'>
                <AiOutlineLock size={20} />
              	</div>
                </div>
                </Form.Group>
                {error && <p className="text-danger small mb-3">{error}</p>}
                <Button type="submit" size="sm" className="buttonNaranjaDegrade w-100" disabled={loading}>
                {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                </Button>
								<p className="text-center mt-3">
								<Link className='linkFormRecuperar' to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
                </p>
                

            </Form>
        </Card.Body>
        
    </Card>
    
  );
}

export default FormularioInicioSesion;