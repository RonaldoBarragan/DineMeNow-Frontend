// ------------------------------------------------------------
// ZONA DE IMPORTACIONES REALES (Descomentar a futuro)
// ------------------------------------------------------------
// import { Navigation } from './components/layout/Navigation';
// import { Footer } from './components/layout/Footer';

import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import Header from "./components/comHomePage/Header";
import Footer from "./components/comHomePage/Footer";

// -------------------------------------
function App() {
  // 1. Ejecutar useLocation para obtener la ruta actual
  const location = useLocation();

  // 2. Lógica para determinar si estamos en una página que debe ser "limpia" (sin Header/Footer).
  const path = location.pathname.toLowerCase();

  const pathsToHideHeader = [
    "/iniciarsesion",
    "/verificartoken",
    "/crear-cuenta",
    "/cambiar",
    "/recuperar",
   
    
    // Agrega otras rutas donde el header no deba aparecer
  ];

  const pathsToHideFooter = [
    "/iniciarsesion",
    "/verificartoken",
    "/crear-cuenta",
    "/cambiar",
    "/recuperar",
    "/registro-restaurantes",
    
    
    // Agrega otras rutas donde el footer no deba aparecer
  ];

  // Verifica si la ruta actual está en la lista para ocultar el Header
  const shouldHideHeader = pathsToHideHeader.includes(path);

  // Verifica si la ruta actual está en la lista para ocultar el Footer
  const shouldHideFooter = pathsToHideFooter.includes(path);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* cambiar el isLoginPage por el isSpecialPage si se va a bloquear o descartar el nav en la pagina deseada  */}
      {/* 4. Renderizado CONDICIONAL del Navbar */}

      {/* Solo se renderiza si NO es la página de Login */}
      {!shouldHideHeader && <Header />}
      {/* Cuando exista el real, cámbialo por: { !isLoginPage && <Navigation /> } */}
      {/* 5. El Contenido Dinámico (Esto siempre va) */}
      <Container className="flex-grow-1">
        <AppRoutes />
      </Container>
      {/* cambiar el isLoginPage por el isSpecialPage si se va a bloquear o descartar el footer en la pagina deseada  */}
      {/* 6. Renderizado CONDICIONAL del Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
