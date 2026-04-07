import { useState } from 'react';
import { Heart, HeartFill, StarFill, GeoAlt, Signpost } from 'react-bootstrap-icons';
import './estilos/Restaulist.css';
import SessionRequiredModal from './SessionRequiredModal';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReservaModal from '../comVistacliente/ReservaModal';

// Componente de tarjeta individual
function RestaurantCard({ name, image, rating, zone, distance, cuisines, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>

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
    </>
  );
}

// Componente principal de lista
export default function Restaulist({
  showDefaultTitle=true,
  isAuthenticated=false
}) {

//estados necesarios
const [showModal, setShowModal] = useState(false);
const [mostrarModal, setMostrarModal] = useState(false);
const [selectedRestaurant, setSelectedRestaurant] = useState(null);


  const restaurants = [
    {
        name: "La Mesa Criolla",
        image: "https://images.unsplash.com/photo-1644753787071-8933b5daed2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBmb29kJTIwYXJlcGF8ZW58MXx8fHwxNzU2MjI5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: "4.8",
        zone: "Zona Rosa",
        distance: "1.2 km",
        cuisines: ["Colombiana", "Típica"],

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
        { nombre: "Mazamorra", descripcion: "Postre tradicional hecho con maíz y azúcar", precio: 12000 }

        ]
    },
    {
        name: "Bella Napoli",
        image: "https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzU2MjI5MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: "4.7",
        zone: "Chapinero",
        distance: "850 m",
        cuisines: ["Italiana", "Pizza"],

        mesas: [
        { id: 1, personas: 2, tipo: "interior" },
        { id: 2, personas: 4, tipo: "interior" },
        { id: 3, personas: 4, tipo: "terraza" },
        ],

        menu: [
        { nombre: "Pizza Margherita", descripcion: "Clásica pizza con tomate, mozzarella y albahaca", precio: 22000 },
        { nombre: "Lasagna Bolognese", descripcion: "Capas de pasta, carne molida y salsa bechamel", precio: 28000 },
        ]
    },
    {
        name: "Sabor Sushi",
        image: "https://acortar.link/PnN8Ef",
        rating: "4.9",
        zone: "Usaquén",
        distance: "2.1 km",
        cuisines: ["Japonesa", "Sushi"],

        mesas: [
        { id: 1, personas: 2, tipo: "interior" },
        { id: 2, personas: 4, tipo: "interior" },
        { id: 3, personas: 6, tipo: "terraza" },
        ],

        menu: [
        { nombre: "Sushi Roll Clásico", descripcion: "Roll de arroz con salmón, aguacate y pepino", precio: 30000 },
        { nombre: "Tempura Udon", descripcion: "Sopa de fideos udon con tempura de camarones", precio: 35000 },
        ]
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
        { id: 3, personas: 4, tipo: "terraza" },
        ],

        menu: [
        { nombre: "Filete Mignon", descripcion: "Filete de res con salsa de vino tinto y puré de papas", precio: 45000 },
        { nombre: "Risotto de Mariscos", descripcion: "Arroz cremoso con camarones, calamares y mejillones", precio: 40000 },
        ]
    }
  ];

  //Logica de sesion

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    if (!isAuthenticated){
        //si el usuario no ha iniciado sesion, mostrar modal de login
        setShowModal (true);
    }else{
      //si el usuario ha iniciado sesion, mostrar el modal de reserva
        setMostrarModal (true);
    }
  };

  const closeModal = () => setShowModal(false); //cerrar modal

  return (
    
<Container className="restaurant-container">
  {showDefaultTitle && (
    <h3 className="restaurants-title">Restaurantes disponibles</h3>
  )}
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {restaurants.map((restaurant, idx) => (
          <Col key={idx}>
            <RestaurantCard {...restaurant} 
            onClick={() => handleRestaurantClick(restaurant)}/>
          </Col>
        ))}
      </Row>
      {/*renderizado del modal de login*/}
      <ReservaModal restaurant={selectedRestaurant} mostrar={mostrarModal} ocultar={() => setMostrarModal(false)} />
      <SessionRequiredModal
      show= {showModal}
      handleClose= {() => setShowModal(false)}
      />
    </Container>
  );
}