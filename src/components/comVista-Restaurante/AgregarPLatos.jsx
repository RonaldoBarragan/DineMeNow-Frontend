import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react"; 


const estadoInicial = {
    nomPlato: "",
    categoria: "Entradas", 
    descripcion: "",
    precio: "",
    disponible: true
};

export default function AgregarPlato({ show, handleClose, onPlatoAgregado, platoEdicion }) {
    // Un solo estado formData inicializado correctamente
    const [formData, setFormData] = useState(estadoInicial);

    // Efecto para sincronizar los datos si es edición o creación
    useEffect(() => {
        if (platoEdicion) {
            let categoriaFormateada = "Entradas";
            if (platoEdicion.categoria && platoEdicion.categoria.length > 0) {
                const catRaw = platoEdicion.categoria[0];
                if (catRaw === "PLATOS_FUERTES") categoriaFormateada = "Platos Fuertes";
                else if (catRaw === "BEBIDAS") categoriaFormateada = "Bebidas";
                else if (catRaw === "POSTRES") categoriaFormateada = "Postres";
                else categoriaFormateada = "Entradas";
            }
            setFormData({
                nomPlato: platoEdicion.nomPlato || platoEdicion.nombre || "",
                categoria: categoriaFormateada,
                descripcion: platoEdicion.descripcion || "",
                precio: platoEdicion.precio || "",
                disponible: platoEdicion.disponible !== undefined ? platoEdicion.disponible : true
            });
        } else {
            setFormData(estadoInicial);
        }
    }, [platoEdicion, show]);

    // Manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // Al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const platoAEnviar = {
            ...formData,
            precio: parseFloat(formData.precio) || 0
        };

        onPlatoAgregado(platoAEnviar);
        
        setFormData(estadoInicial);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold">
                    {platoEdicion ? "Editar Plato" : "Agregar Nuevo Plato"}
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre del Plato</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="nomPlato" 
                            value={formData.nomPlato} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select name="categoria" value={formData.categoria} onChange={handleChange}>
                            <option value="Entradas">Entradas</option>
                            <option value="Platos Fuertes">Platos Fuertes</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Postres">Postres</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={2} 
                            name="descripcion" 
                            value={formData.descripcion} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio ($)</Form.Label>
                        <Form.Control 
                            type="number" 
                            name="precio" 
                            value={formData.precio} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check 
                            type="checkbox" 
                            label={formData.disponible ? "No disponible para los clientes": "Disponible para los clientes"} 
                            name="disponible" 
                            checked={formData.disponible} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type="submit" className="buttonNaranjaDegrade">
                        {platoEdicion ? "Guardar Cambios" : "Guardar Plato"}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}