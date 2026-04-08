import React,{useEffect, useState} from 'react';
import { Heart, HeartFill, StarFill, GeoAlt, Signpost } from 'react-bootstrap-icons';
import './estilos/Restaulist.css';
import SessionRequiredModal from './SessionRequiredModal';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReservaModal from '../comVistacliente/ReservaModal';

// Componente de tarjeta individual
function RestaurantCard({ name, image, rating, zone, distance, cuisines, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="restaurant-card h-100"
    onClick={onClick}
    style={{cursor: 'pointer'}}>
      <div className="restaurant-image-wrapper">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="restaurant-image"
        />
        <Button
          variant=""
          className="favorite-button"
          onClick={(e) => {
            e.stopPropagation();
          setIsFavorite (!isFavorite);
        }}
        >
          {isFavorite ? (
            <HeartFill size={20} color="#dc3545" />
          ) : (
            <Heart size={20} color="#ffffff" />
          )}
        </Button>
      </div>

      <Card.Body className="restaurant-body d-flex flex-column">
        <div className="restaurant-header mb-2">
          <Card.Title className="restaurant-name mb-0">{name}</Card.Title>
          <Badge bg="" className="rating-badge flex-shrink-0">
            <StarFill size={12} color="#ffc107" />
            <span className="ms-1 fw-bold">{rating}</span>
          </Badge>
        </div>

        <div className="restaurant-cuisines mb-2">
          {cuisines.map((cuisine, idx) => (
            <Badge
              key={idx}
              bg="light"
              text="secondary"
              className="cuisine-badge me-1"
            >
              {cuisine}
            </Badge>
          ))}
        </div>

        <Card.Text className="restaurant-info mt-auto">
          <span className="info-item">
            <GeoAlt size={12} className="me-1" />
            <small>{zone}</small>
          </span>
          <span className="info-item">
            <Signpost size={12} className="me-1" />
            <small>{distance}</small>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Componente principal de lista
export default function Restaulist({
  showDefaultTitle = true,
  isAuthenticated = false,
  onLoadData // 1. AGREGADO: Para que no de error de referencia
}) {

  // 2. Mantenemos tus estáticos aquí
  
  // Estados
  const [listaRestaurantes, setListaRestaurantes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurantes/estado/ACTIVO")
      .then((res) => res.json())
      .then((data) => {
        const localesFormateados = data.map(r => ({
          ...r,
          name: r.nombre,
          cuisines: [r.categoria],
          image: r.foto || "https://acortar.link/PnN8Ef",
          rating: "4.9",
          zone: "Bogotá",
          distance: "Cerca de ti",
          mesas: r.mesas || [{id: 1, personas:4, tipo:"General"}],
          menu: r.menu || [{ nombre: "Combo Especial", precio: 25000, descripcion: "(descripcion general del plato)" },
                          { nombre: "Bebida Grande", precio: 5000, descripcion: "(descripcion general del plato)" }], //Desc provisional estatica
        }));

        // 3. MEZCLAMOS: Estáticos + Datos del Backend
        setListaRestaurantes(localesFormateados);
        
        // actualizar
        if (onLoadData) onLoadData(localesFormateados.length);
        
        //setCargando(false); // Detiene el mensaje de carga
      })
      .catch((err) => {
        console.error("Error al cargar Restaurantes", err);
        setListaRestaurantes([]); // vacío si falla
        setCargando(false); // Muestra los estáticos aunque el back falle
      });
  }, []);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      setMostrarModal(true);
    }
  };

  //if (cargando) return <Container className="text-center my-5"><h3>Cargando sabores...</h3></Container>;

  return (
    <Container className="restaurant-container">
      {showDefaultTitle && <h3 className="restaurants-title">Restaurantes disponibles</h3>}
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {listaRestaurantes.map((restaurant, idx) => (
          <Col key={idx}>
            <RestaurantCard 
              {...restaurant} 
              onClick={() => handleRestaurantClick(restaurant)} 
            />
          </Col>
        ))}
      </Row>

      <ReservaModal 
        restaurant={selectedRestaurant} 
        mostrar={mostrarModal} 
        ocultar={() => setMostrarModal(false)} 
      />

      <SessionRequiredModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </Container>
  );
}