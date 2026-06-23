import React, {use, useState} from "react";
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import "../../design/global.css";
import { ActualizarContraTempResta } from "../../api/ActualizarContraTempResta";
import { useAuth } from "../../context/AuthContext";

export default function CambioContraObligatoria(){
  const {user, updateUser, isLoading} = useAuth();
  const [passwords, setPasswords] = useState({ actual:'', nueva: '', confirmar: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si no hay usuario, no intentes leer .id
    if (!user) {
        setError("No se encontró una sesión activa. Intenta iniciar sesión de nuevo.");
        return;
    }

    if(passwords.nueva !== passwords.confirmar){
      return setError("Las contraseñas no coinciden");
    }
    if(passwords.nueva.length < 8){
      return setError("La contraseña debe tener al menos 8 caracteres");
    }

    setLoading(true);
    try{
      //llamar a la api con los datos correctos
      await ActualizarContraTempResta(
        user.id,
        user.token,
        passwords.actual,
        passwords.nueva
      );

      updateUser({ mustChangePassword: false });

      alert("Contraseña actualizada con éxito. Ya puedes gestionar tu restaurante.");
      navigate('/restaurante/vista'); //enviar al panel real
    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };

  // Si el contexto aún está cargando el usuario del localStorage, mostramos un spinner o texto
  if (isLoading || !user) {
      return (
        <Container>
      <p>Cargando datos del usuario</p>
      </Container>
      );
  }

  return(
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <Card style={{maxWidth: '400px', width: '100%', borderRadius: '15px' }} className="shadow-lg p-4">
        <div className="text-center mb-4">
          <h3 className="fw-bold">Actualizar Contraseña</h3>
          <p className="text-muted small">Por seguridad, debes cambiar la clave temporal para activar tu cuenta.</p>
        </div>

        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="small fw-bold">Contraseña Actual</Form.Label>
            <Form.Control
            type="password"
            placeholder="Contraseña temporal"
            onChange={(e) => setPasswords({...passwords, actual: e.target.value})}
            />
          </Form.Group>

          <hr/>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Nueva Contraseña</Form.Label>
            <Form.Control
            type="password"
            placeholder="Minimo 8 caracteres"
            required
            onChange={(e) => setPasswords({...passwords, nueva: e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small fw-bold">Confirmar Contraseña</Form.Label>
            <Form.Control
            type="password"
            placeholder="Repita la contraseña"
            onChange={(e) => setPasswords({...passwords, confirmar: e.target.value})}
            />
          </Form.Group>

          <Button 
          className="w-100 buttonNaranjaDegrade border-0" 
          type="submit"
          disabled={loading}
          >
           {loading ? "Cargando..." : "Activar y Entrar"}
          </Button>

        </Form>

      </Card>

    </Container>
  );
}