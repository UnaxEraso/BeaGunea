import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../header/header";
import "./comercioDetalle.css";

const comerciosData = {
  1: {
    id: 1,
    nombre: "Jostunaren Txokoa",
    tipo: "Jostuna / Mertzeria",
    descripcion:
      "Arropa konponketak, neurrira egindako jantziak eta josteko materiala.",
    imagenBanner:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200",
    barrio: "Gros",
    biografia:
      "Hogei urte baino gehiagoko esperientziarekin haria eta orratz artean, Jostunaren Txokoa zure konfiantzazko tailerra eta mertzeria da Gros auzoan. Arropa konponketaz gain, kalitatezko materialak eskaintzen ditugu zure sorkuntzetarako: botoiak, artileak, oihalak eta osagarri bereziak.",
    horarios: "Astelehenetik Ostiralera: 09:30 - 13:30 | 16:00 - 19:30",
    direccion: "Zabaleta kalea, 12, Gros",
    telefono: "+34 943 00 11 22",
    productos: [
      // SERVICIOS DE COSTURA
      {
        id: 101,
        nombre: "Prendas Personalizadas",
        descripcion:"Bakero, galtza eta kamiseta luzeera egokitzapena neurrira.",
        precio: 25.0,
        imagen:"/images/jostuna/personalizado.jpg",
        valoracion: 4.9,
      },
      {
        id: 102,
        nombre: "Kremailera Aldaketa",
        descripcion: "Jaka, gona edo praken kremaileren ordezkapena.",
        precio: 12.0,
        imagen: "/images/jostuna/cremmallera.jpg",
        valoracion: 4.9,
      },
      {
        id: 103,
        nombre: "Estutzea",
        descripcion: "Kamiseta, jaka edo soinekoen neurria doitzea.",
        precio: 15.0,
        imagen: "/images/jostuna/bajopantalon.jpg",
        valoracion: 4.7,
      },
      // NUEVOS PRODUCTOS DE MERCERÍA
      {
        id: 107,
        nombre: "Botoi sorta", // Pack de botones
        descripcion: "Egurrezko eta nakarrezko botoi sorta, diseinu klasikoak.",
        precio: 3.5,
        imagen: "/images/jostuna/botones.jpg",
        valoracion: 4.5,
      },
      {
        id: 108,
        nombre: "Artile Merino Obilloa", // Ovillo de lana
        descripcion: "Kalitate handiko artile merinoa, kolore askotarikoak.",
        precio: 6.9,
        imagen: "/images/jostuna/ovillos.jpg",
        valoracion: 4.8,
      },
      {
        id: 109,
        nombre: "Kotoizko Oihalak (1m)", // Telas de algodón
        descripcion: "Patchwork eta joskintzarako kotoi organikozko oihalak.",
        precio: 14.0,
        imagen: "/images/jostuna/tela.jpg",
        valoracion: 4.7,
      },
      {
        id: 110,
        nombre: "Eskuz Egindako Haizemailea", // Abanico pintado a mano
        descripcion:
          "Bertako artistek eskuz margotutako haizemaile esklusiboa.",
        precio: 25.0,
        imagen: "/images/jostuna/abanicos.jpg",
        valoracion: 4.9,
      },
      {
        id: 111,
        nombre: "Josteko Kit-a", // Kit de costura
        descripcion:
          "Oinarrizko tresnak: guraizeak, hariak, orratzak eta zinta.",
        precio: 18.5,
        imagen: "/images/jostuna/kitcostura.jpg",
        valoracion: 4.6,
      },
    ],
  },
};

const RenderStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="star-icon filled" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="star-icon filled" />);
    } else {
      stars.push(<FaRegStar key={i} className="star-icon empty" />);
    }
  }
  return <div className="stars-container">{stars}</div>;
};

function ComercioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const comercio = comerciosData[id];

  if (!comercio) {
    return (
      <>
        <Header />
        <Container className="py-5 text-center" style={{ marginTop: "100px" }}>
          <h2>Ez da komertzioa aurkitu</h2>
          <Button onClick={() => navigate("/comercios")} className="mt-3">
            Saltokietara itzuli
          </Button>
        </Container>
      </>
    );
  }

  const handleAddToCart = (producto) => {
    console.log("Saskira gehitzen:", producto);
  };

  return (
    <>
      <Header />
      <div
        className="comercio-banner"
        style={{ backgroundImage: `url(${comercio.imagenBanner})` }}
      >
        <div className="banner-overlay">
          <Container>
            <div className="banner-content">
              <Badge bg="light" text="dark" className="mb-3 tipo-badge">
                {comercio.tipo}
              </Badge>
              <h1 className="comercio-nombre">{comercio.nombre}</h1>
              <p className="comercio-subtitulo">{comercio.descripcion}</p>
            </div>
          </Container>
        </div>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8}>
            <div className="info-section">
              <h2 className="section-title">Guri Buruz</h2>
              <p className="biografia-text">{comercio.biografia}</p>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="info-card shadow-sm">
              <Card.Body>
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <h6>Ordutegia</h6>
                    <p className="mb-0">{comercio.horarios}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h6>Helbidea</h6>
                    <p className="mb-0">{comercio.direccion}</p>
                  </div>
                </div>

                <div className="info-item mb-0">
                  <FaPhone className="info-icon" />
                  <div>
                    <h6>Telefonoa</h6>
                    <p className="mb-0">{comercio.telefono}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="productos-section">
          <h2 className="section-title mb-4">Gure Produktuak</h2>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="productos-swiper py-4"
          >
            {comercio.productos.map((producto) => (
              <SwiperSlide key={producto.id}>
                <Card className="producto-card h-100 shadow-sm mx-1">
                  <div className="producto-imagen-wrapper">
                    <Card.Img
                      variant="top"
                      src={producto.imagen}
                      className="producto-imagen"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x300?text=Irudia+Falta";
                      }}
                    />
                    <div className="rating-badge">
                      <FaStar className="rating-star" />
                      <span>{producto.valoracion}</span>
                    </div>
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="producto-nombre">
                      {producto.nombre}
                    </Card.Title>
                    <Card.Text className="producto-descripcion">
                      {producto.descripcion}
                    </Card.Text>
                    <div className="mt-auto">
                      <RenderStars rating={producto.valoracion} />
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="producto-precio">
                          {producto.precio.toFixed(2)}€
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleAddToCart(producto)}
                          className="btn-add-cart"
                        >
                          Gehitu
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-5">
          <Button
            variant="outline-secondary"
            onClick={() => navigate("/comercios")}
          >
            ← Saltokietara itzuli
          </Button>
        </div>
      </Container>
    </>
  );
}

export default ComercioDetalle;
