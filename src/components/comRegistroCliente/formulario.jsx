import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Formregistrocliente.css';
import { AiOutlineUser } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { registroUsuario } from '../../api/ClientRegister';
import { useNavigate } from 'react-router-dom';

function Formregristrousu() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: {
      tipo: 'CC',
      numero: '',
    },
    direccion: {
      calle: '',
      numero: '',
      ciudad: '',
      codigoPostal: '',
      pais: '',
    },
    correo: '',
    telefono: '',
    user: '',
    password: '',
    passwordConfirm: '',
    foto: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // 🔄 Validación básica
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido es requerido';
    if (!formData.documento.numero.trim()) newErrors['documento.numero'] = 'Documento es requerido';
    if (!formData.direccion.calle.trim()) newErrors['direccion.calle'] = 'Calle es requerida';
    if (!formData.direccion.numero.trim()) newErrors['direccion.numero'] = 'Número es requerido';
    if (!formData.direccion.ciudad.trim()) newErrors['direccion.ciudad'] = 'Ciudad es requerida';
    if (!formData.direccion.codigoPostal.trim()) newErrors['direccion.codigoPostal'] = 'Código postal es requerido';
    if (!formData.direccion.pais.trim()) newErrors['direccion.pais'] = 'País es requerido';
    if (!formData.correo.trim()) newErrors.correo = 'Email es requerido';
    if (!formData.telefono.trim()) newErrors.telefono = 'Teléfono es requerido';
    if (!formData.password.trim()) newErrors.password = 'Contraseña es requerida';
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  // 📝 Manejo de cambios en inputs simples
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = {
        ...prev,
        [name]: value,
      };


      if (name === 'correo') {
        newData.user = value;
      }

      return newData;
    });
  };

  // 📝 Manejo de cambios en inputs de documento
  const handleDocumentoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      documento: {
        ...prev.documento,
        [name]: value,
      },
    }));
  };

  // 📝 Manejo de cambios en inputs de dirección
  const handleDireccionChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      direccion: {
        ...prev.direccion,
        [name]: value,
      },
    }));
  };
  const navigate = useNavigate();
  // 🚀 Manejo del submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    // Valida el formulario
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      // 🔍 Log del request
      console.log('📤 Datos envíados:', formData);

      // Llamar al servicio
      const response = await registroUsuario(formData);
      // Redirigimos a la ruta de verificación pasando el correo "escondido" en el state
      //navigate('/verificar-token', { state: { email: formData.correo } });
      console.log('✅ Registro exitoso:', response);
      navigate('/verificartoken', { state: { email: formData.correo } });
      setSuccessMessage('¡Registro exitoso! Tu cuenta ha sido creada.');
      

      // Limpiar formulario
      //setFormData({
        //nombre: '',
        //apellido: '',
        //documento: { tipo: 'CC', numero: '' },
        //direccion: { calle: '', numero: '', ciudad: '', codigoPostal: '', pais: '' },
        //correo: '',
        //telefono: '',
        //user: '',
        //password: '',
        //passwordConfirm: '',
        //foto: '',
      //});

      // Redirigir o mostrar mensaje de éxito
      setTimeout(() => {
        // window.location.href = '/login'; // Descomentar si quieres redirigir
      }, 2000);

    } catch (error) {
      console.error('❌ Error en registro:', error);
      const mensajeError = error.response?.data?.message || error.message || 'Error al registrar el usuario';
      setErrors({
        submit: mensajeError,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="cardForm">
      <Card.Body>
        <p className='pForm'>Crear Cuenta</p>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        {/* Error general */}
        {errors.submit && (
          <div className="alert alert-danger" role="alert">
            {errors.submit}
          </div>
        )}

        <Form onSubmit={handleSubmit}>

          {/* Nombre y Apellido */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Nombre *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.nombre}
                  />
                  <div className='icon-form-overlay'>
                    <AiOutlineUser size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Apellido *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Tu apellido"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.apellido}
                  />
                  <div className='icon-form-overlay'>
                    <AiOutlineUser size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.apellido}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Documento */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Tipo *</Form.Label>
                <Form.Select
                  name="tipo"
                  value={formData.documento.tipo}
                  onChange={handleDocumentoChange}
                  className='inputForm'
                >
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="PA">PA</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group className="text-start">
                <Form.Label>Número *</Form.Label>
                <Form.Control
                  type="text"
                  name="numero"
                  value={formData.documento.numero}
                  onChange={handleDocumentoChange}
                  placeholder="Ej: 123456789"
                  className='inputForm'
                  isInvalid={!!errors['documento.numero']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['documento.numero']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Dirección - Calle y Número */}
          <Row className="mb-3">
            <Col md={8}>
              <Form.Group className="text-start">
                <Form.Label>Calle *</Form.Label>
                <Form.Control
                  type="text"
                  name="calle"
                  value={formData.direccion.calle}
                  onChange={handleDireccionChange}
                  placeholder="Ej: Carrera 5"
                  className='inputForm'
                  isInvalid={!!errors['direccion.calle']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['direccion.calle']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Número *</Form.Label>
                <Form.Control
                  type="text"
                  name="numero"
                  value={formData.direccion.numero}
                  onChange={handleDireccionChange}
                  placeholder="Ej: 123"
                  className='inputForm'
                  isInvalid={!!errors['direccion.numero']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['direccion.numero']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Ciudad y Código Postal */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Ciudad *</Form.Label>
                <Form.Control
                  type="text"
                  name="ciudad"
                  value={formData.direccion.ciudad}
                  onChange={handleDireccionChange}
                  placeholder="Ej: Bogotá"
                  className='inputForm'
                  isInvalid={!!errors['direccion.ciudad']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['direccion.ciudad']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Código Postal *</Form.Label>
                <Form.Control
                  type="text"
                  name="codigoPostal"
                  value={formData.direccion.codigoPostal}
                  onChange={handleDireccionChange}
                  placeholder="Ej: 110111"
                  className='inputForm'
                  isInvalid={!!errors['direccion.codigoPostal']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['direccion.codigoPostal']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* País */}
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group className="text-start">
                <Form.Label>País *</Form.Label>
                <Form.Control
                  type="text"
                  name="pais"
                  value={formData.direccion.pais}
                  onChange={handleDireccionChange}
                  placeholder="Ej: Colombia"
                  className='inputForm'
                  isInvalid={!!errors['direccion.pais']}
                />
                <Form.Control.Feedback type="invalid">
                  {errors['direccion.pais']}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Email y Teléfono */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Email *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.correo}
                  />
                  <div className='icon-form-overlay'>
                    <BsEnvelope size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.correo}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Teléfono *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="3001234567"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.telefono}
                  />
                  <div className='icon-form-overlay'>
                    <FiPhone size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.telefono}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          {/* Contraseña y Confirmar */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Contraseña *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.password}
                  />
                  <div className='icon-form-overlay'>
                    <AiOutlineLock size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="text-start">
                <Form.Label>Confirmar *</Form.Label>
                <div className='input-container-relative'>
                  <Form.Control
                    type="password"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className='inputForm icon-form-padding-left'
                    isInvalid={!!errors.passwordConfirm}
                  />
                  <div className='icon-form-overlay'>
                    <AiOutlineLock size={15} />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.passwordConfirm}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button
            type="submit"
            size="sm"
            className="buttonNaranjaDegrade w-100"
            disabled={loading}
          >
            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Formregristrousu;
