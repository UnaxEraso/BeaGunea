import React from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Importación de estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa aquí tu CSS personalizado (ajusta la ruta según tu carpeta)
import './comercios.css'
import Header from '../header/header';

const comerciosLocales = [
  { id: 1, nombre: "La Viña", tipo: "Gastronomía", descripcion: "Famosa por su tarta de queso, un emblema de la Parte Vieja.", imagen: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400", barrio: "Parte Vieja" },
  { id: 2, nombre: "Librería Donosti", tipo: "Cultura", descripcion: "Una de las librerías con más solera de la ciudad.", imagen: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400", barrio: "Centro" },
  { id: 3, nombre: "Minimil", tipo: "Moda", descripcion: "Diseño vasco contemporáneo con raíces en la tradición artesanal.", imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400", barrio: "Centro" },
  { id: 4, nombre: "Pukas Surf", tipo: "Deporte", descripcion: "Referente mundial en la fabricación de tablas de surf.", imagen: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400", barrio: "Gros" },
  { id: 5, nombre: "Pastelería Oiartzun", tipo: "Gastronomía", descripcion: "Dulces artesanales icónicos frente al Boulevard.", imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400", barrio: "Parte Vieja" },
  { id: 6, nombre: "Box San Sebastián", tipo: "Artesanía", descripcion: "Marroquinería de lujo con el sello inconfundible de la ciudad.", imagen: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=400", barrio: "Centro" },
  { id: 7, nombre: "Akelarre", tipo: "Gastronomía", descripcion: "Experiencia culinaria de vanguardia con vistas al Cantábrico.", imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400", barrio: "Igeldo" }
];

function Comercios() {
  return (
    <>
      <Header />
      <main className="comercios-main-container">
        <Container>
          <div className="text-center mb-5">
            <h2 className="titulo-seccion">Comercios Locales de Donostia</h2>
            <p className="subtitulo-seccion">Desliza para descubrir la esencia de nuestra ciudad.</p>
          </div>

          <div className="swiper-netflix-wrapper">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={25}
              slidesPerView={1}
              navigation={true}
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
                        <Badge className="badge-tipo">
                          {comercio.tipo}
                        </Badge>
                        <small className="text-muted">{comercio.barrio}</small>
                      </div>
                      <Card.Title className="card-title-custom">{comercio.nombre}</Card.Title>
                      <Card.Text className="card-text-custom">
                        {comercio.descripcion}
                      </Card.Text>
                      <Button className="mt-auto btn-ver-mas">
                        Ver más
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