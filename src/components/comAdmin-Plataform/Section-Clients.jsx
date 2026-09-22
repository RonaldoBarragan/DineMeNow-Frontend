import { useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ModalInfoClient from "./Modal-Info-Client";

export default function Section_Clients({ clientes }) {
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Abrir modal con la información directa del cliente
  const handleOpenInfoModal = (cliente) => {
    setSelectedClient(cliente);
    setShowModalInfo(true);
  };

  // Cerrar modal
  const handleCloseInfoModal = () => {
    setShowModalInfo(false);
    setSelectedClient(null);
  };

  return (
    <>
      {clientes.length === 0 ? (
        <p className="text-muted text-center mt-3">No hay clientes registrados.</p>
      ) : (
        <Table className="size-letra-propio align-middle">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Reservas Totales</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => {
              // Obtiene las reservas directamente del DTO/Entidad del backend
              const totalReservasBackend =
                cliente.reservasTotales ?? cliente.totalReservas ?? cliente.reservas ?? 0;

              return (
                <tr key={cliente.id || cliente.correo}>
                  <td>
                    {cliente.nombreCliente}
                    <br />
                    <small className="text-muted">
                      {cliente.documento?.tipo} {cliente.documento?.numero}
                    </small>
                  </td>
                  <td>{cliente.correo}</td>
                  {/* Formatea el número sin duplicar el indicativo +57 */}
                  <td>
                    {cliente.telefono?.toString().startsWith("+57")
                      ? cliente.telefono
                      : `+57 ${cliente.telefono || ""}`}
                  </td>
                  <td>
                    <Badge className="badge-count-reservas">
                      {totalReservasBackend}
                    </Badge>{" "}
                    <span>reservas</span>
                  </td>
                  <td>
                    <Badge className="badge-state-acc">Activo</Badge>
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2 icon-color-hover"
                      onClick={() => handleOpenInfoModal(cliente)}
                    >
                      <MdOutlineRemoveRedEye className="text-dark" size={15} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <ModalInfoClient
        show={showModalInfo}
        onHide={handleCloseInfoModal}
        client={selectedClient}
      />
    </>
  );
}