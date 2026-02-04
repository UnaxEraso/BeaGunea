import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BsStarFill,
  BsTruck,
  BsShop,
  BsGift,
  BsArrowRight,
  BsHeartFill,
  BsCartPlus,
  BsBag,
  BsLaptop,
  BsCart3,
  BsGem,
  BsCheckCircleFill,
} from "react-icons/bs";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { 
      id: 1, 
      name: "Estutzea", 
      price: "15.00€", 
      image: "/images/jostuna/bajopantalon.jpg" 
    },
    { 
      id: 2, 
      name: "Plantilak", 
      price: "12.00€", 
      image: "/images/oinetakoak/plantilla.jpg" 
    },
    { 
      id: 3, 
      name: "Zeramika Katilu Eskuz Egina", 
      price: "18.50€", 
      image: "/images/artisau/tazaceramica.jpg",
    },
    { 
      id: 4, 
      name: "Tresnen Maletina",
      price: "89.90€", 
      image: "/images/taller/maletin.jpg" 
    },
  ];

  const categories = [
    { name: "Arropa", icon: BsBag, color: "primary", count: 50 },
    { name: "Elektronika", icon: BsLaptop, color: "info", count: 60 },
    { name: "Elikagaiak", icon: BsCart3, color: "success", count: 70 },
    { name: "Bitxikeriak", icon: BsGem, color: "warning", count: 80 },
  ];

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="hero-section position-relative overflow-hidden">
        <div
          className="hero-slide d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/images/banner1.jpg')`,
            height: "70vh",
            backgroundSize: "120%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Container>
            <div className="carousel-caption d-block position-relative start-0 w-100 text-center">
              <h1 className="display-3 fw-bold mb-4 text-white drop-shadow">Bea Gunea</h1>
              <p className="lead fs-2 mb-4 text-white drop-shadow">
                Gure helburua internetera iristeko aukerarik izan ez duten saltoki tradizionalak digitalizatzea da, 
                hurbileko tratua eta auzoko bizitza galdu ez daitezen.
              </p>
              <div className="d-flex justify-content-center">
                {/* BOTÓN CON NAVEGACIÓN AÑADIDA */}
                <Button 
                  size="lg" 
                  className="btn-rosa px-5 py-3 fs-5"
                  onClick={() => navigate("/register-shop")}
                >
                  Erregistratu doan <BsCheckCircleFill className="ms-2" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="services py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Gure Zerbitzuak</h2>
              <p className="lead text-muted">BeaGunea-k euskal dendak batzen ditu zure eskura. Km0 kalitatea!</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-primary mb-4 mx-auto my-5">
                  <BsTruck size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-primary">Express Bidalketa</Card.Title>
                  <Card.Text className="lead mb-4">
                    Euskadi osoan <strong>24h</strong> bidalketa. Zure ategora ekartzen dugu.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-success mb-4 mx-auto my-5">
                  <BsShop size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-success">Tokiko Dendak</Card.Title>
                  <Card.Text className="lead mb-4">
                    <strong>Km0</strong> produktuen aukera zabala. Gure komunitateko saltzaileak.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-warning mb-4 mx-auto my-5">
                  <BsGift size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-warning">Eskaintza Berezkoak</Card.Title>
                  <Card.Text className="lead mb-4">
                    Eskaintza esklusiboak eta <strong>deskontuak</strong> gure bezeroentzat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3: CATEGORÍAS */}
      <section className="categories py-5 bg-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Kategoriak Popularrak</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {categories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <Col lg={3} md={6} className="mb-4" key={index}>
                  <Card className="h-100 border-0 shadow-sm hover-scale category-card text-center">
                    <Card.Body className="p-4">
                      <div
                        className={`cat-icon mb-3 mx-auto bg-${cat.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
                        style={{ width: "80px", height: "80px" }}
                      >
                        <IconComponent size={40} className={`text-${cat.color}`} />
                      </div>
                      <Card.Title className="h5 fw-bold mb-2">{cat.name}</Card.Title>
                      <Card.Text className="text-muted mb-4">+{cat.count} dendatan</Card.Text>
                      <Button variant="outline-rosa" className="w-100">
                        Ikusi <BsArrowRight className="ms-1" />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* SECTION 4: PRODUCTOS DESTACADOS */}
      <section className="featured-products py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Produktu Gomendatuak</h2>
              <p className="lead text-muted mb-4">
                Tokiko dendetan erosi eta komunitatea babestu. Lehenengo 50 erabiltzaileari <strong>5€ deskontua</strong>!
              </p>
              <p className="lead text-muted mb-0">Gaurko ⭐ ⭐ ⭐ ⭐ ⭐ gomendioak</p>
            </Col>
          </Row>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col lg={3} md={6} key={product.id}>
                <Card className="h-100 shadow-lg border-0 hover-lift product-card bg-white">
                  <div className="position-relative">
                    <Card.Img variant="top" src={product.image} className="product-img" />
                    
                    {/* --- CORRECCIÓN APLICADA: CORAZÓN VISIBLE --- */}
                    <Button 
                      variant="light" 
                      className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center border-0"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsHeartFill className="text-danger" size={18} />
                    </Button>
                    {/* ------------------------------------------- */}

                  </div>
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="h6 fw-bold mb-2 text-truncate">{product.name}</Card.Title>
                    <div className="d-flex align-items-center justify-content-center mb-3 lead">
                      <div className="stars me-2">
                        <BsStarFill className="text-warning" /><BsStarFill className="text-warning" /><BsStarFill className="text-warning" /><BsStarFill className="text-warning" /><BsStarFill className="text-warning" />
                      </div>
                      <small className="text-muted">(127)</small>
                    </div>
                    <div className="price-section mb-3">
                      <h5 className="mb-1 fw-bold text-rosa">{product.price}</h5>
                    </div>
                    <Button className="btn-rosa w-100 py-2">
                      Gehitu saskira <BsCartPlus className="ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button 
              size="lg" 
              className="btn-rosa px-5 py-3" 
              onClick={() => navigate("/comercios")}
            >
              Denda guztiak ikusi <BsShop className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
