// ------------------------------------------------------------
// ZONA DE IMPORTACIONES REALES (Descomentar a futuro)
// ------------------------------------------------------------
// import { Navigation } from './components/layout/Navigation';
// import { Footer } from './components/layout/Footer';

import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; 
import { AppRoutes } from './routes/AppRoutes'; 

// --- COMPONENTES TEMPORALES (DUMMY) ---
const NavbarDummy = () => (
  <div className="p-3 bg-primary text-white mb-4">
    🛡️ Aquí irá el <b>Navbar</b>
  </div>
);

const FooterDummy = () => (
  <div className="p-3 bg-dark text-white mt-4 text-center">
    🦶 Aquí irá el <b>Footer</b>
  </div>
);
// -------------------------------------
function App() {
  // 2. Ejecutar useLocation para obtener la ruta actual
  const location = useLocation();

  // 3. Crear una variable que decide si debe aparecer el Navbar/Footer
  //    Comprobamos si la ruta actual es '/login'
  const isLoginPage = location.pathname === '/login';
  
  // Si deseas que esté oculto en otra ruta, añades:
  // const isSpecialPage = location.pathname === '/login' || location.pathname === '/otra-ruta-limpia';


  return (
    <div className="d-flex flex-column min-vh-100">
      {/* cambiar el isLoginPage por el isSpecialPage si se va a bloquear o descartar el nav en la pagina deseada  */}
      {/* 4. Renderizado CONDICIONAL del Navbar */}
      {/* Solo se renderiza si NO es la página de Login */}
      { !isLoginPage && <NavbarDummy /> } 
      {/* Cuando exista el real, cámbialo por: { !isLoginPage && <Navigation /> } */}


      {/* 5. El Contenido Dinámico (Esto siempre va) */}
      <Container className="flex-grow-1">
         <AppRoutes />
      </Container>

      {/* cambiar el isLoginPage por el isSpecialPage si se va a bloquear o descartar el footer en la pagina deseada  */}
      {/* 6. Renderizado CONDICIONAL del Footer */}
      { !isLoginPage && <FooterDummy /> }
      {/* Cuando exista el real, cámbialo por: { !isLoginPage && <Footer /> } */}
      
    </div>
  )
}

export default App