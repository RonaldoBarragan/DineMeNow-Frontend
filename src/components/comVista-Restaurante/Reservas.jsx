export default function Reservas() {
    return (
        <>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button className="nav-link active">Gestión de Reservas</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Gestión del Menú</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Gestión de Mesas</button>
        </li>
      </ul>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Reservas Recientes</h5>
        <button className="btn btn-danger">+ Nueva Reserva</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Personas</th>
              <th>Estado</th>
              <th>Solicitudes Especiales</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>Ana Rodríguez</strong> <br />
                <small>+57 300 123 4567</small>
              </td>
              <td>2025-08-27</td>
              <td>19:30</td>
              <td>4</td>
              <td>
                <span className="badge bg-success">Confirmada</span>
              </td>
              <td>Mesa cerca de la ventana</td>
              <td>
                <button className="btn btn-light btn-sm me-1">👁️</button>
                <button className="btn btn-success btn-sm me-1">✔️</button>
                <button className="btn btn-danger btn-sm">❌</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Carlos Mendoza</strong> <br />
                <small>+57 301 987 6543</small>
              </td>
              <td>2025-08-27</td>
              <td>20:00</td>
              <td>2</td>
              <td>
                <span className="badge bg-warning text-dark">Pendiente</span>
              </td>
              <td>Celebración de aniversario</td>
              <td>
                <button className="btn btn-light btn-sm me-1">👁️</button>
                <button className="btn btn-success btn-sm me-1">✔️</button>
                <button className="btn btn-danger btn-sm">❌</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Sofía García</strong> <br />
                <small>+57 302 456 7890</small>
              </td>
              <td>2025-08-27</td>
              <td>18:00</td>
              <td>6</td>
              <td>
                <span className="badge bg-success">Confirmada</span>
              </td>
              <td>Ninguna</td>
              <td>
                <button className="btn btn-light btn-sm me-1">👁️</button>
                <button className="btn btn-success btn-sm me-1">✔️</button>
                <button className="btn btn-danger btn-sm">❌</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Miguel Torres</strong> <br />
                <small>+57 305 234 5678</small>
              </td>
              <td>2025-08-28</td>
              <td>19:00</td>
              <td>3</td>
              <td>
                <span className="badge bg-warning text-dark">Pendiente</span>
              </td>
              <td>Sin gluten</td>
              <td>
                <button className="btn btn-light btn-sm me-1">👁️</button>
                <button className="btn btn-success btn-sm me-1">✔️</button>
                <button className="btn btn-danger btn-sm">❌</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
    )
}