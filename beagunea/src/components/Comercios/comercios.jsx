import React from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './comercios.css';
import Header from '../header/header';

const comerciosLocales = [
  { id: 1, nombre: "Jostunaren Txokoa", tipo: "Jostuna / Konponketak", descripcion: "Arropa konponketak, neurrira egindako jantziak eta eraldaketak auzoaren bihotzean.", imagen: "/images/comercios/costura.jpg", barrio: "Gros" },
  { id: 2, nombre: "Oinetakoak 1949", tipo: "Zapataria / Oinetakoak", descripcion: "Oinetakoen konponketa artisaua, giltza kopiak eta larrua zaintzeko produktuak.", imagen: "/images/comercios/zapatos.jpg", barrio: "Erdialdea" },
  { id: 3, nombre: "Gros Tailerrak", tipo: "Mekanikaria / Tailerra", descripcion: "Mekanika orokorra, pneumatikoen berrikuspena eta zure ibilgailuaren mantentze osoa.", imagen: "/images/comercios/taller.jpg", barrio: "Gros" },
  { id: 4, nombre: "Ponsol Etxea", tipo: "Kapela-denda", descripcion: "Espainiako kapela-dendarik zaharrena. Euskal txapelak eta kalitate handiko kapelak 1838tik.", imagen: "/images/comercios/sombrero.jpg", barrio: "Alde Zaharra" },
  { id: 5, nombre: "Benegas Lurrin-denda", tipo: "Edertasuna", descripcion: "Donostiako lurrin-denda historikoa Eremu Erromantikoan, marka esklusiboekin.", imagen: "/images/comercios/perfume.jpg", barrio: "Erdialdea" }
];

function Comercios() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="comercios-main-container">
        <Container fluid className="mb-0 pb-0">
          <div className="text-center mb-4">
            <h2 className="titulo-seccion">Donostiako Tokiko Saltokiak</h2>
            <p className="subtitulo-seccion">Irristatu gure hiriaren esentzia ezagutzeko.</p>
          </div>

          <div className="swiper-netflix-wrapper mb-0">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
              }}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="mySwiper"
            >
              {comerciosLocales.map((comercio) => (
                <SwiperSlide key={comercio.id}>
                  <Card className="h-100 border-0 shadow-sm card-netflix">
                    <Card.Img variant="top" src={comercio.imagen} className="card-img-custom" />
                    <Card.Body className="d-flex flex-column bg-white">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Badge className="badge-tipo" style={{backgroundColor: '#D69F3A'}}>
                          {comercio.tipo}
                        </Badge>
                        <small className="text-muted">{comercio.barrio}</small>
                      </div>
                      <Card.Title className="card-title-custom">{comercio.nombre}</Card.Title>
                      <Card.Text className="card-text-custom">
                        {comercio.descripcion}
                      </Card.Text>
                      <Button 
                        className="btn-ver-mas"
                        onClick={() => navigate(`/comercio/${comercio.id}`)}
                      >
                        Ikusi gehiago
                      </Button>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Comercios;