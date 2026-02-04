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
    nombre: "Gros Tresneria",
    tipo: "Burdindegia / Erreminta Profesionalak",
    descripcion:
      "Erreminta profesionalak, makineria eta brikolajerako material espezializatua.",
    imagenBanner:
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=1200",
    barrio: "Gros",
    biografia:
      "Gros Tresneria zure proiektuak egiteko behar duzun guztia aurkituko duzun gunea da. 1995etik Gros auzoan, marka onenetako erreminta elektrikoak, eskuzko tresnak eta segurtasun ekipamendua eskaintzen ditugu. Profesionalentzat eta brikolaje zaleentzat aholkularitza teknikoa ematen dugu, tresna egokiena aukera dezazun.",
    horarios: "Astelehenetik Larunbatera: 09:00 - 13:30 | 16:00 - 20:00",
    direccion: "Agirre Mirimon Kalea, 4, Gros",
    telefono: "+34 943 55 66 77",
    productos: [
      // HERRAMIENTAS ELÉCTRICAS
      {
        id: 301,
        nombre: "Taladro Perkusorea 18V",
        descripcion: "Haririk gabeko taladroa, 2 bateria eta maletinarekin.",
        precio: 145.0,
        imagen: "/images/taller/taladro.jpg",
        valoracion: 4.9,
      },
      {
        id: 302,
        nombre: "Lijagailu Orbitala",
        descripcion: "Egurra eta metala lija-tzeko makina arina eta indartsua.",
        precio: 65.0,
        imagen: "/images/taller/lijadora.jpg",
        valoracion: 4.7,
      },
      {
        id: 303,
        nombre: "Zerra Zirkularra",
        descripcion: "Emozio handiko zerra, laser gida eta diskoarekin.",
        precio: 110.0,
        imagen: "/images/taller/sierra.jpg",
        valoracion: 4.8,
      },
      // HERRAMIENTAS MANUALES Y KITS
      {
        id: 304,
        nombre: "Tresnen Maletina",
        descripcion: "Karraska giltzak, edalontziak eta puntak dituen sorta osoa.",
        precio: 89.90,
        imagen: "/images/taller/maletin.jpg",
        valoracion: 5.0,
      },
      {
        id: 305,
        nombre: "Bihurkin Joko Profesionala", // Juego destornilladores
        descripcion: "Punta magnetikoa eta mango ergonomikoa duten 8 bihurkin.",
        precio: 24.50,
        imagen: "/images/taller/destornillador.jpg",
        valoracion: 4.6,
      },
      {
        id: 306,
        nombre: "Iltze-mailua (Martillo)",
        descripcion: "Altzairuzko mailua, kolpeak xurgatzen dituen mangoarekin.",
        precio: 18.0,
        imagen: "/images/taller/martillo.jpg",
        valoracion: 4.8,
      },
      {
        id: 307,
        nombre: "Metro Profesionala (5m)",
        descripcion: "Zinta metriko gogorra, blokeo automatikoarekin.",
        precio: 12.50,
        imagen: "/images/taller/metro.jpg",
        valoracion: 4.5,
      },
      {
        id: 308,
        nombre: "Laneko Poltsa",
        descripcion: "Erremintak garraiatzeko poltsa irekia, oinarri zurrunarekin.",
        precio: 35.0,
        imagen: "/images/taller/bolsa.jpg",
        valoracion: 4.7,
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

function GrosTresneriaDetalle() {
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
              <Badge bg="secondary" className="mb-3 tipo-badge">
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
                                 <Button size="sm" className="btn-add-cart">
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

export default GrosTresneriaDetalle;
