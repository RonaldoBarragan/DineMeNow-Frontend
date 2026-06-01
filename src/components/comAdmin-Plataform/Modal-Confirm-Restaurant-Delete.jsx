import { Button, Modal } from "react-bootstrap";

export default function Modal_Delete_Confirm ({ mostrar, onConfirmar, onCancelar, mensaje }) {
    return (
        <>
        <Modal show={mostrar} onHide={onCancelar} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {mensaje || "¿Estás seguro de que deseas realizar esta acción? Esta acción no se puede deshacer."}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancelar}>Cancelar</Button>
                <Button variant="danger" onClick={onConfirmar}>Eliminar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}