import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsCheckCircleFill, BsStarFill, BsTruck, BsShop, BsGift, BsChatDots } from "react-icons/bs";
import "./home.css";

const Home = () => {
  return (
    <main>
      {/* 1. HERO CARRUSEL CON FOTOS */}
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,129,129,0.7), rgba(255,129,129,0.5)), 
                       url('/images/hero1.jpg')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     height: '70vh'
                   }} />
              <div className="carousel-caption d-none d-md-block start-0 end-0">
                <Container>
                  <h1 className="display-3 fw-bold mb-4 text-white drop-shadow">BeaGunea</h1>
                  <p className="lead fs-3 mb-4 text-white drop-shadow">Tokiko dendak zure hatz artean</p>
                  <Button size="lg" className="btn-rosa px-5 py-3 fs-5 me-3">
                    Dendak ikusi <BsShop className="ms-2" />
                  </Button>
                </Container>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,129,129,0.7), rgba(255,129,129,0.5)), 
                       url('/images/hero2.jpg')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     height: '70vh'
                   }} />
              <div className="carousel-caption d-none d-md-block start-0 end-0">
                <Container>
                  <h1 className="display-3 fw-bold mb-4 text-white drop-shadow">Bidalketa Azkarra</h1>
                  <p className="lead fs-3 mb-4 text-white drop-shadow">Euskaditik Euskadira, 24h barruan</p>
                  <Button size="lg" className="btn-rosa px-5 py-3 fs-5">
                    Hasi erostea <BsTruck className="ms-2" />
                  </Button>
                </Container>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Aurrekora</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Hurrengora</span>
          </button>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="services py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Gure Zerbitzuak</h2>
              <p className="lead text-muted">BeaGunea-k euskal dendak batzen ditu zure eskura.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-lift">
                <Card.Body className="text-center p-5">
                  <div className="service-icon mb-4">
                    <BsTruck size={64} className="text-primary" />
                  </div>
                  <Card.Title className="h4 mb-3">Express Bidalketa</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Euskadi osoan 24 orduzko bidalketa. Zure ategora ekartzen dugu.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-lift">
                <Card.Body className="text-center p-5">
                  <div className="service-icon mb-4">
                    <BsShop size={64} className="text-success" />
                  </div>
                  <Card.Title className="h4 mb-3">Tokiko Dendak</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Km0 produktuen aukera zabala. Gure komunitateko saltzaileak.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-lift">
                <Card.Body className="text-center p-5">
                  <div className="service-icon mb-4">
                    <BsGift size={64} className="text-warning" />
                  </div>
                  <Card.Title className="h4 mb-3">Berezkoak</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Eskaintza esklusiboak eta deskontuak gure bezeroentzat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. TESTIMONIOS */}
      <section className="testimonials py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Bezeroak</h2>
              <p className="lead text-muted">Milaka euskal bezero asebetuak</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <div className="testimonial-card shadow-sm p-4 rounded-4 h-100">
                <div className="stars mb-3">
                  <BsStarFill className="text-warning" /><BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" /><BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="text-muted mb-4">"Oso gomendagarria! Bidalketa azkar eta dendak zoragarriak."</p>
                <div className="d-flex align-items-center">
                  <img src="/images/avatars/ane.jpg" alt="Ane" className="avatar rounded-circle me-3" />
                  <div>
                    <h6 className="mb-0">Ane Bilbao</h6>
                    <small className="text-muted">Bezero leiala</small>
                  </div>
                </div>
              </div>
            </Col>
            {/* Repite para Mikel y Maite */}
          </Row>
        </Container>
      </section>

      {/* 4. CTA */}
      <section className="cta-section py-5">
        <Container className="text-center">
          <h2 className="display-4 fw-bold mb-4 text-white">Has zaitez orain!</h2>
          <p className="lead mb-4 fs-4 text-white-50">Tokiko dendetan erosi eta komunitatea babestu.</p>
          <Button size="lg" className="btn-rosa px-5 py-3 fs-5">
            Erregistratu doan <BsCheckCircleFill className="ms-2" />
          </Button>
        </Container>
      </section>
    </main>
  );
};

export default Home;
