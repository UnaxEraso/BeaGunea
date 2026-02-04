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
    id: 1, // Egokitu IDa
    nombre: "Ponsol Etxea",
    tipo: "Kapelak / Txapelak",
    descripcion:
      "1838tik dotorezia eta kalitatea eskaintzen. Espainiako kapela-denda zaharrena.",
    // ALDAKETA: Kapela asko erakusten dituen irudi espezifikoa (Unsplash)
    imagenBanner:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1200",
    barrio: "Alde Zaharra",
    biografia:
      "Ponsol Etxea ez da denda soil bat, Donostiako historiaren parte bizia baizik. 1838an sortua, Espainiako kapela-denda zaharrena izatearen ohorea dugu. Mende eta erdi baino gehiagoz, gure familiak belaunaldiz belaunaldi transmititu du txapelak eta kapelak egiteko eta saltzeko ofizioa. Gure apaletan munduko marka ospetsuenak eta bertako txapel tradizionalak aurkituko dituzu, beti ere aholkularitza pertsonalizatuarekin.",
    horarios: "Astelehenetik Larunbatera: 10:00 - 13:30 | 16:30 - 20:00",
    direccion: "Narrika Kalea, 4, Alde Zaharra",
    telefono: "+34 943 42 08 76",
    productos: [
      // TXAPELAK ETA KAPELAK
      {
        id: 501,
        nombre: "Txapel Euskaldun Klasikoa",
        descripcion:
          "Tolosa markako artile hutsezko txapel beltz tradizionala.",
        precio: 28.0,
        imagen: "/images/gorros/txapela.jpg",
        valoracion: 5.0,
      },
      {
        id: 502,
        nombre: "Panama Kapela (Handia)",
        descripcion: "Ekuadorren eskuz tokitilla lastoz egindako kapela.",
        precio: 120.0,
        imagen: "/images/gorros/panama.jpg",
        valoracion: 4.9,
      },
      {
        id: 503,
        nombre: "Feltrozko Fedora",
        descripcion:
          "Negurako kapela dotorea, untxi-feltroz egina, iragazgaitza.",
        precio: 85.0,
        imagen: "/images/gorros/feltro.jpg",
        valoracion: 4.8,
      },
      // OSAGARRIAK
      {
        id: 504,
        nombre: "Peaky Blinders Txapela",
        descripcion: "Gatsby estiloko txapela, tweed ehunarekin (Irish Cap).",
        precio: 45.0,
        imagen: "/images/gorros/pb.jpg",
        valoracion: 4.7,
      },
      {
        id: 505,
        nombre: "Kapela Ingelesa (Bowler)",
        descripcion: "Klasiko britainiarra, ekitaldi berezietarako aproposa.",
        precio: 110.0,
        imagen: "/images/gorros/bonbin.jpg",
        valoracion: 4.6,
      },
      {
        id: 506,
        nombre: "Trilby Kapela",
        descripcion:
          "Hegal motzeko kapela arina, estilo urbano eta modernorako.",
        precio: 38.0,
        // Irudia: Trilby estiloko kapela (hegal motza)
        imagen:
          "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=600",
        valoracion: 4.7,
      },

      // BESTEAK
      {
        id: 507,
        nombre: "Euri-babes Kapela",
        descripcion: "Ehun tekniko iragazgaitzez egindako kapela tolesgarria.",
        precio: 35.0,
        imagen: "/images/gorros/lluvia.jpg",
        valoracion: 4.5,
      },
      {
        id: 508,
        nombre: "Bisera Sport", // Gorra normal
        descripcion:
          "Eguneroko erabilerarako bisera erosoa, neurri erregulagarriarekin.",
        precio: 25.0,
        // Irudia: Bisera (gorra) urdin ilun klasikoa
        imagen: "/images/gorros/gorras.jpg",
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

function PonsolEtxeaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datuak kargatu
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
              {/* Badge iluna dotorezia emateko */}
              <Badge bg="dark" className="mb-3 tipo-badge">
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
              <h2 className="section-title">Gure Historia</h2>
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
          <h2 className="section-title mb-4">Gure Bilduma</h2>

          <div className="productos-swiper-wrapper">
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
                            "https://placehold.co/400x300?text=Kapela";
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
                            variant="dark"
                            size="sm"
                            className="btn-add-cart"
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

export default PonsolEtxeaDetalle;
