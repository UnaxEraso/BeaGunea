import React from "react";
import { Container, Row, Col, Card, Button, Carousel, Badge } from "react-bootstrap";
import { 
  BsCheckCircleFill, BsStarFill, BsTruck, BsShop, BsGift, BsChatDots, 
  BsArrowRight, BsFire, BsHeartFill, BsCartPlus 
} from "react-icons/bs";
import "./home.css";

const Home = () => {
  const testimonials = [
    {
      name: "Ane Bilbao",
      text: "Oso gomendagarria! Bidalketa azkar eta dendak zoragarriak.",
      avatar: "/images/avatars/ane.jpg",
      stars: 5
    },
    {
      name: "Mikel Gasteiz",
      text: "Km0 produktuekin pozik. Kalitatea eta freskotasuna bermatua!",
      avatar: "/images/avatars/mikel.jpg",
      stars: 5
    },
    {
      name: "Maite Donostia",
      text: "Eskaintza ederrak eta bezero arreta bikaina. Errepikatuko dut!",
      avatar: "/images/avatars/maite.jpg",
      stars: 5
    }
  ];

  const featuredProducts = [
    { id: 1, name: "Ogia artisaua", price: "2.50€", discount: 20, image: "/images/products/pan.jpg" },
    { id: 2, name: "Tomateak organikoak", price: "3.20€", discount: 15, image: "/images/products/tomate.jpg" },
    { id: 3, name: "Gazta Idiazabal", price: "8.90€", image: "/images/products/gazta.jpg" },
    { id: 4, name: "Sidra natural", price: "12.50€", discount: 10, image: "/images/products/sidra.jpg" }
  ];

  return (
    <main>
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,129,129,0.8), rgba(255,129,129,0.4)), url('/images/hero1.jpg')`
                   }} />
              <div className="carousel-caption d-none d-md-block">
                <Container>
                  <Badge bg="dark" className="mb-3 px-3 py-2 fs-6">🛒 Tokiko dendak</Badge>
                  <h1 className="display-3 fw-bold mb-4 text-white drop-shadow">BeaGunea</h1>
                  <p className="lead fs-2 mb-4 text-white drop-shadow">Tokiko dendak zure hatz artean. Euskaditik Euskadira 24h!</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Button size="lg" className="btn-rosa px-5 py-3 fs-5">
                      Dendak ikusi <BsShop className="ms-2" />
                    </Button>
                    <Button variant="outline-light" size="lg" className="px-5 py-3 fs-5">
                      Hasi erostea <BsTruck className="ms-2" />
                    </Button>
                  </div>
                </Container>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,129,129,0.8), rgba(255,129,129,0.4)), url('/images/hero2.jpg')`
                   }} />
              <div className="carousel-caption d-none d-md-block">
                <Container>
                  <h1 className="display-3 fw-bold mb-4 text-white drop-shadow">Bidalketa Azkarra</h1>
                  <p className="lead fs-2 mb-4 text-white drop-shadow">Euskaditik Euskadira, 24h barruan. Zure ategora!</p>
                  <Button size="lg" className="btn-rosa px-5 py-3 fs-5">
                    Hasi erostea <BsTruck className="ms-2" />
                  </Button>
                </Container>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      <section className="services py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <Badge bg="rosa" className="mb-3 px-3 py-2 fs-6">🚚 Gure abantailak</Badge>
              <h2 className="display-5 fw-bold mb-4">Gure Zerbitzuak</h2>
              <p className="lead text-muted">BeaGunea-k euskal dendak batzen ditu zure eskura. Km0 kalitatea!</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-primary mb-4 mx-auto">
                  <BsTruck size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-primary">Express Bidalketa</Card.Title>
                  <Card.Text className="lead mb-4">
                    Euskadi osoan <strong>24h</strong> bidalketa. Zure ategora ekartzen dugu.
                  </Card.Text>
                  <Button className="btn-rosa px-4 py-2">
                    Ikusi gehiago <BsArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-success mb-4 mx-auto">
                  <BsShop size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-success">Tokiko Dendak</Card.Title>
                  <Card.Text className="lead mb-4">
                    <strong>Km0</strong> produktuen aukera zabala. Gure komunitateko saltzaileak.
                  </Card.Text>
                  <Button className="btn-rosa px-4 py-2">
                    Dendak ikusi <BsArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center">
                <div className="card-icon bg-warning mb-4 mx-auto">
                  <BsGift size={48} />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-3 text-warning">Eskaintza Berezkoak</Card.Title>
                  <Card.Text className="lead mb-4">
                    Eskaintza esklusiboak eta <strong>deskontuak</strong> gure bezeroentzat.
                  </Card.Text>
                  <Button className="btn-rosa px-4 py-2">
                    Eskaintzak <BsArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials py-5 bg-gradient">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <Badge bg="dark" className="mb-3 px-3 py-2 fs-6">⭐ Bezeroen iritziak</Badge>
              <h2 className="display-5 fw-bold mb-4 text-white">Bezeroak</h2>
              <p className="lead text-white-50 mb-0">Milaka euskal bezero asebetuak</p>
            </Col>
          </Row>
          <Carousel className="testimonial-carousel mx-auto" style={{ maxWidth: '800px' }} indicators={false}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="testimonial-card shadow-lg mx-auto text-center">
                  <div className="stars mb-4 justify-content-center d-flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <BsStarFill key={i} className="text-warning fs-5 me-1" />
                    ))}
                  </div>
                  <p className="fs-4 fw-medium mb-4 text-muted px-3">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="avatar-lg rounded-circle me-3 shadow-sm"
                    />
                    <div className="text-start">
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <small className="text-primary fw-medium">Bezero leiala</small>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <section className="categories py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <Badge bg="rosa" className="mb-3 px-3 py-2 fs-6">🏪 Kategoriak</Badge>
              <h2 className="display-5 fw-bold mb-4">Kategoriak Popularrak</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {['Frutak & Barazkiak', 'Ogiak & Pastak', 'Gaztak & Haragiak', 'Edariak'].map((cat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="h-100 border-0 shadow-sm hover-scale category-card text-center">
                  <Card.Body className="p-4">
                    <div className="cat-icon mb-3 mx-auto">{getCategoryIcon(index)}</div>
                    <Card.Title className="h5 fw-bold mb-2">{cat}</Card.Title>
                    <Card.Text className="text-muted mb-4">+{50 + index * 10} dendatan</Card.Text>
                    <Button variant="outline-rosa" className="w-100">
                      Ikusi <BsArrowRight className="ms-1" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="featured-products py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <Badge bg="warning" className="mb-3 px-3 py-2 fs-6"><BsFire /> BEREZIKOAK</Badge>
              <h2 className="display-5 fw-bold mb-4">Produktu Gomendatuak</h2>
              <p className="lead text-muted mb-0">Gaurko ⭐ ⭐ ⭐ ⭐ ⭐ gomendioak</p>
            </Col>
          </Row>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col lg={3} md={6} key={product.id}>
                <Card className="h-100 shadow-lg border-0 hover-lift product-card">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="product-img"
                    />
                    {product.discount && (
                      <Badge bg="danger" className="position-absolute top-2 end-2 fs-6 px-2 py-1">
                        -{product.discount}%
                      </Badge>
                    )}
                    <Button variant="outline-light" size="sm" className="position-absolute top-2 start-2 rounded-circle p-2 wishlist-btn">
                      <BsHeartFill />
                    </Button>
                  </div>
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="h6 fw-bold mb-2 text-truncate">{product.name}</Card.Title>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <div className="stars me-2">
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                        <BsStarFill className="text-warning" />
                      </div>
                      <small className="text-muted">(127)</small>
                    </div>
                    <div className="price-section mb-3">
                      <h5 className="mb-1 fw-bold text-rosa">{product.price}</h5>
                      {product.discount && (
                        <small className="text-muted text-decoration-line-through d-block">4.50€</small>
                      )}
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
            <Button size="lg" className="btn-rosa px-5 py-3">
              Dendara guztiak ikusi <BsShop className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="cta-section py-5">
        <Container>
          <div className="text-center">
            <Badge bg="dark" className="mb-4 px-4 py-3 fs-5 d-inline-block"><BsFire /> BEREZIKO AKZIOA</Badge>
            <h2 className="display-3 fw-bold mb-4 text-white">Has zaitez orain!</h2>
            <p className="lead mb-5 fs-3 text-white-50">
              Tokiko dendetan erosi eta komunitatea babestu. Lehenengo 50 erabiltzaileari <strong>5€ deskontua</strong>!
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
              <Button size="lg" className="btn-rosa px-6 py-4 fs-5">
                Erregistratu doan <BsCheckCircleFill className="ms-2" />
              </Button>
              <Button variant="outline-light" size="lg" className="px-6 py-4 fs-5">
                Dendak ikusi <BsShop className="ms-2" />
              </Button>
            </div>
            <div className="stats-row d-flex justify-content-center gap-5 flex-wrap">
              <div className="stat-item text-center">
                <div className="stat-number">500+</div>
                <div className="stat-label">Dendak</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Bezeroak</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number">24h</div>
                <div className="stat-label">Bidalketa</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

const getCategoryIcon = (index) => {
  const icons = ['🥦', '🍞', '🧀', '🥛'];
  return <span className="fs-1">{icons[index]}</span>;
};

export default Home;
