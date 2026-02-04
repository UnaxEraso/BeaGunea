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
    id: 1, // ID hau zure datu-basearen arabera aldatu beharko duzu
    nombre: "Donosti Artisautza",
    tipo: "Eskulanak / Opariak",
    descripcion:
      "Bertako artisauek eskuz egindako pieza bakarrak eta opari bereziak.",
    imagenBanner:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200", // Zeramika/Artisautza irudia
    barrio: "Alde Zaharra",
    biografia:
      "Donosti Artisautza hiriko bihotzean jaio zen, euskal kultura eta diseinu garaikidea uztartzeko asmoz. Gure dendan aurkituko dituzun pieza guztiak bertako tailer txikietan eginak dira, maitasunez eta pazientziaz. Zeramikatik hasi eta bitxigintzara, pieza bakoitzak istorio bat kontatzen du. Opari berezi bat bilatzen baduzu edo zure etxea apaindu nahi baduzu, hau da zure lekua.",
    horarios: "Asteartetik Igandera: 10:30 - 14:00 | 16:30 - 20:30",
    direccion: "Fermin Calbeton Kalea, 24, Alde Zaharra",
    telefono: "+34 943 22 33 44",
    productos: [
      // ZERAMIKA ETA DEKORAZIOA
      {
        id: 401,
        nombre: "Zeramika Katilu Eskuz Egina",
        descripcion: "Esmalte urdinez margotutako gosaritarako katilu berezia.",
        precio: 18.50,
        imagen: "/images/artisau/tazaceramica.jpg",
        valoracion: 4.9,
      },
      {
        id: 402,
        nombre: "Loreontzi Modernoa",
        descripcion: "Buztinez egindako loreontzi geometrikoa, landare txikientzat.",
        precio: 25.0,
        imagen: "/images/artisau/florero.jpg",
        valoracion: 4.8,
      },
      {
        id: 403,
        nombre: "Egurrezko Taula Grabatuarekin",
        descripcion: "Gazta edo hestebeteak zerbitzatzeko haritz egurrezko taula.",
        precio: 32.0,
        imagen: "/images/artisau/tabla.jpg",
        valoracion: 4.7,
      },
      // OSAGARRIAK ETA EHUNAK
      {
        id: 404,
        nombre: "Zilarrezko Eguzkilore",
        descripcion: "Zilarrezko zintzilikarioa, euskal babes sinbolo tradizionala.",
        precio: 45.0,
        imagen: "/images/artisau/egzkilore.jpg",
        valoracion: 5.0,
      },
      {
        id: 405,
        nombre: "Kotoi Organikozko Poltsa (Tote)",
        descripcion: "Donostiako irudiekin serigrafiatutako oihalezko poltsa.",
        precio: 15.0,
        imagen: "/images/artisau/tote.jpg",
        valoracion: 4.6,
      },
      {
        id: 406,
        nombre: "Artilezko Galtzerdiak",
        descripcion: "Merino artilez eskuz ehundutako galtzerdi epelak.",
        precio: 22.0,
        imagen: "/images/artisau/calcetines.jpg",
        valoracion: 4.8,
      },
      // PAPELERIA
           {
        id: 407,
        nombre: "Alpargatak", // Alpargatas artesanales
        descripcion: "Jutezko zola eta kotoi naturalezko oihala, eskuz josiak.",
        precio: 34.00,
        imagen: "/images/artisau/alpargata.jpg",
        valoracion: 4.8,
      },
      {
        id: 408,
        nombre: "Kandela Naturala (Izpilikua)",
        descripcion: "Soja argizariaz eta olio esentzialez egindako kandela.",
        precio: 12.0,
        imagen: "/images/artisau/vela.jpg",
        valoracion: 4.9,
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

function DonostiArtisautzaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Datuak kargatu (Hemen ID 1 erabiltzen dugu adibiderako)
  const comercio = comerciosData[1];

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
              {/* Kolorea aldatu dut 'info'ra, artisautzarekin leunagoa delako */}
              <Badge bg="info" className="mb-3 tipo-badge text-white">
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
          <h2 className="section-title mb-4">Gure Sorkuntzak</h2>

          <div className="productos-swiper-wrapper">
            {/* Gezi pertsonalizatuak */}
            <div className="productos-prev"></div>
            <div className="productos-next"></div>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              navigation={{
                prevEl: ".productos-prev",
                nextEl: ".productos-next",
              }}
              spaceBetween={20}
              slidesPerView={1}
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
                            "https://placehold.co/400x300?text=Artisautza";
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
                          {/* Artisautza denez, botoiari kolore leunagoa jarri diot */}
                          <Button 
                            variant="info" 
                            size="sm" 
                            className="btn-add-cart text-white"
                            onClick={() => handleAddToCart(producto)}
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

export default DonostiArtisautzaDetalle;
