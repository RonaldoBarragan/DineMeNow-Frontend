export default function Form_Registro() {
  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <div className="mb-4">
        <h2 className="fw-bold">Registra tu Restaurante</h2>
        <p>Únete a DineMeNow y comienza a gestionar tus reservas de manera eficiente. 
        Nuestro equipo revisará tu solicitud y te contactaremos en 24-48 horas.</p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Información Básica del Restaurante</h5>
          <p className="text-muted">Proporciona los datos principales de tu restaurante</p>

          <form>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Nombre del Restaurante <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Ej: La Puerta Falsa" 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Nombre del Propietario/Representante <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre completo" 
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Correo Electrónico <span className="text-danger">*</span>
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="restaurante@ejemplo.com" 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Teléfono de Contacto <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="(+57) 300 123 4567" 
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Descripción del Restaurante</label>
              <textarea 
                className="form-control"
                rows="4"
                placeholder="Describe tu restaurante, especialidades, ambiente, etc."
              ></textarea>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
