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
  const estaticos = [
    {
      name: "La Mesa Criolla",
      image: "https://images.unsplash.com/photo-1644753787071-8933b5daed2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBmb29kJTIwYXJlcGF8ZW58MXx8fHwxNzU2MjI5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: "4.8",
      zone: "Zona Rosa",
      distance: "1.2 km",
      cuisines: ["Colombiana", "Típica"],
    },
    {
      name: "Bella Napoli",
      image: "https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzU2MjI5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: "4.7",
      zone: "Chapinero",
      distance: "850 m",
      cuisines: ["Italiana", "Pizza"],
    },
    {
        name: "Sabor Sushi",
        image: "https://acortar.link/PnN8Ef",
        rating: "4.9",
        zone: "Usaquén",
        distance: "2.1 km",
        cuisines: ["Japonesa", "Sushi"],
    },
    {
        name: "El Mesón Gourmet",
        image: "https://acortar.link/fEdjHY",
        rating: "4.6",
        zone: "La Candelaria",
        distance: "3.5 km",
        cuisines: ["Internacional", "Gourmet"],
        mesas: [

        { id: 1, personas: 2, tipo: "interior" },

        { id: 2, personas: 4, tipo: "interior" },

        { id: 3, personas: 6, tipo: "terraza" },

        ],



        menu: [

        { nombre: "Ajiaco Santafereño", descripcion: "Tradicional sopa bogotana con pollo, mazorca y papas", precio: 18000 },

        { nombre: "Bandeja Paisa", descripcion: "Frijoles, arroz, carne molida...", precio: 25000 },

        //Agregar 4

        { nombre: "Empanadas de Carne", descripcion: "Empanadas rellenas de carne molida con verduras", precio: 15000 },

        { nombre: "Sancocho", descripcion: "Sopa tradicional colombiana con carne y tubérculos", precio: 20000 },

        { nombre: "Chicharrón", descripcion: "Trozos de cerdo fritos crujientes", precio: 22000 },

        { nombre: "Mazamorra", descripcion: "Postre tradicional hecho con maíz y azúcar", precio: 12000 }]
    }
  ];

  // Estados
  const [listaRestaurantes, setListaRestaurantes] = useState(estaticos);
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
          menu: r.menu || [{ nombre: "Combo Especial", precio: 25000 },
                          { nombre: "Bebida Grande", precio: 5000 }]
        }));

        // 3. MEZCLAMOS: Estáticos + Datos del Backend
        const combinados = [...estaticos, ...localesFormateados];
        setListaRestaurantes(combinados);
        
        // actualizar
        if (onLoadData) onLoadData(combinados.length);
        
        setCargando(false); // Detiene el mensaje de carga
      })
      .catch((err) => {
        console.error("Error al cargar Restaurantes", err);
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

  if (cargando) return <Container className="text-center my-5"><h3>Cargando sabores...</h3></Container>;

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