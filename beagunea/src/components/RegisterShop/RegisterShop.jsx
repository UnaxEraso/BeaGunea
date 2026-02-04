import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Modal, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// ICONOS
import {
  BsShop, BsCheckCircleFill, BsCloudUpload, BsArrowRight, BsGeoAlt, 
  BsPlusCircle
} from "react-icons/bs";
import {
  FaStar, FaStarHalfAlt, FaRegStar, FaClock, FaMapMarkerAlt, FaPhone, FaTrash
} from "react-icons/fa";

// ESTILOS (Asegúrate de que este archivo tiene el CSS que me has pasado)
import "../Tiendas/comercioDetalle.css"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- COMPONENTE AUXILIAR PARA ESTRELLAS ---
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

const RegisterShop = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = Formulario, 2 = Vista Previa

  // DATOS DE LA TIENDA
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    category: "Burdindegia", // Valor por defecto ejemplo
    address: "",
    phone: "+34 943 00 00 00", // Campo nuevo simulado
    hours: "09:00 - 20:00",    // Campo nuevo simulado
    image: "/images/placeholder-shop.jpg",
  });

  // DATOS DE PRODUCTOS (Array dinámico)
  const [products, setProducts] = useState([]);

  // MODAL STATES
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: null,
    preview: "/images/placeholder-product.jpg"
  });

  // --- HANDLERS ---
  const handleChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
  };

  const handleShopImage = (e) => {
    if (e.target.files[0]) {
      setShopData({ ...shopData, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const goToPreview = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setStep(2);
  };

  // HANDLERS PRODUCTOS
  const handleProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleProductImage = (e) => {
    if (e.target.files[0]) {
      setNewProduct({ 
        ...newProduct, 
        image: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0]) 
      });
    }
  };

  const saveProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const productToAdd = {
      id: Date.now(),
      nombre: newProduct.name,
      descripcion: "Produktu berria zure katalogoan.", // Descripción por defecto
      precio: parseFloat(newProduct.price),
      imagen: newProduct.preview,
      valoracion: 5.0, // Valoración inicial por defecto
    };
    setProducts([productToAdd, ...products]); // Añadimos al principio
    setShowModal(false);
    setNewProduct({ name: "", price: "", image: null, preview: "/images/placeholder-product.jpg" });
  };

  const handleFinish = () => {
    alert("Denda gordeta! (Simulación)");
    navigate("/comercios");
  };

  // --- RENDER ---
  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}>
      
      {/* ================= PASO 1: FORMULARIO DE REGISTRO ================= */}
      {step === 1 && (
        <Container className="py-5 pt-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Eman izena zure dendari</h2>
            <p className="lead text-muted">Bete datuak zure erakusleiho digitala sortzeko.</p>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-lg border-0 p-4">
                <Card.Body>
                  <Form onSubmit={goToPreview}>
                    <Row>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Dendaren Izena</Form.Label>
                          <Form.Control required type="text" name="name" value={shopData.name} onChange={handleChange} placeholder="Adib: Gros Tresneria" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Kategoria</Form.Label>
                          <Form.Select name="category" value={shopData.category} onChange={handleChange}>
                            <option>Burdindegia</option>
                            <option>Elikagaiak</option>
                            <option>Arropa</option>
                            <option>Elektronika</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Helbidea</Form.Label>
                          <Form.Control type="text" name="address" value={shopData.address} onChange={handleChange} placeholder="Kale Nagusia 12" />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Deskribapena</Form.Label>
                          <Form.Control as="textarea" rows={3} name="description" value={shopData.description} onChange={handleChange} placeholder="Azaldu zure negozioa..." />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-4">
                        <Form.Group>
                          <Form.Label>Banner Irudia</Form.Label>
                          <Form.Control type="file" onChange={handleShopImage} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-grid">
                      <Button type="submit" size="lg" className="btn-rosa py-3" style={{backgroundColor: "#d69f3a", border: "none"}}>
                        Jarraitu eta Produktuak Gehitu <BsArrowRight className="ms-2"/>
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}

      {/* ================= PASO 2: VISTA PREVIA (ESTILO COMERCIO DETALLE) ================= */}
      {step === 2 && (
        <>
          {/* BANNER PRINCIPAL */}
          <div
            className="comercio-banner"
            style={{ backgroundImage: `url(${shopData.image})` }}
          >
            <div className="banner-overlay">
              <Container>
                <div className="banner-content">
                  <Badge bg="secondary" className="mb-3 tipo-badge">
                    {shopData.category}
                  </Badge>
                  <h1 className="comercio-nombre">{shopData.name}</h1>
                  <p className="comercio-subtitulo">{shopData.description}</p>
                </div>
              </Container>
            </div>
          </div>

          <Container className="py-5">
            {/* SECCIÓN INFO */}
            <Row className="mb-5">
              <Col lg={8}>
                <div className="info-section h-100">
                  <h2 className="section-title">Guri Buruz</h2>
                  <p className="biografia-text">
                    {shopData.description || "Hemen agertuko da zure dendaren biografia luzea..."}
                    <br /><br />
                    Ongi etorri {shopData.name}-ra. Kalitatezko produktuak eta hurbileko tratua eskaintzen ditugu gure bezeroentzat.
                  </p>
                </div>
              </Col>

              <Col lg={4}>
                <Card className="info-card shadow-sm">
                  <Card.Body>
                    <div className="info-item">
                      <FaClock className="info-icon" />
                      <div>
                        <h6>Ordutegia</h6>
                        <p className="mb-0">{shopData.hours}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <div>
                        <h6>Helbidea</h6>
                        <p className="mb-0">{shopData.address || "Helbidea zehaztu gabe"}</p>
                      </div>
                    </div>
                    <div className="info-item mb-0">
                      <FaPhone className="info-icon" />
                      <div>
                        <h6>Telefonoa</h6>
                        <p className="mb-0">{shopData.phone}</p>
                      </div>
                    </div>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-3 py-2 fw-bold" onClick={handleFinish}>
                    <BsCheckCircleFill className="me-2"/> Argitaratu Denda
                  </Button>
                </Card>
              </Col>
            </Row>

            {/* SECCIÓN PRODUCTOS (SWIPER) */}
            <div className="productos-section">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="section-title mb-0">Gure Produktuak</h2>
                <Badge bg="dark" className="fs-6">{products.length} produktu</Badge>
              </div>

              <div className="productos-swiper-wrapper">
                <div className="productos-prev"></div>
                <div className="productos-next"></div>

                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  navigation={{ prevEl: ".productos-prev", nextEl: ".productos-next" }}
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
                  {/* SLIDE 1: BOTÓN DE AÑADIR (SIEMPRE VISIBLE AL PRINCIPIO) */}
                  <SwiperSlide>
                    <div 
                      className="producto-card h-100 shadow-sm mx-1 d-flex flex-column align-items-center justify-content-center bg-light"
                      style={{ border: "2px dashed #d69f3a", cursor: "pointer", minHeight: "380px" }}
                      onClick={() => setShowModal(true)}
                    >
                      <div className="bg-white rounded-circle p-4 shadow-sm mb-3">
                        <BsPlusCircle size={40} style={{ color: "#d69f3a" }} />
                      </div>
                      <h5 style={{ color: "#d69f3a", fontWeight: "bold" }}>Gehitu Produktua</h5>
                    </div>
                  </SwiperSlide>

                  {/* SLIDES DINÁMICOS: LOS PRODUCTOS AÑADIDOS */}
                  {products.map((producto) => (
                    <SwiperSlide key={producto.id}>
                      <Card className="producto-card h-100 shadow-sm mx-1">
                        <div className="producto-imagen-wrapper">
                          <Card.Img variant="top" src={producto.imagen} className="producto-imagen" />
                          <div className="rating-badge">
                            <FaStar className="rating-star" />
                            <span>{producto.valoracion}</span>
                          </div>
                        </div>

                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="producto-nombre">{producto.nombre}</Card.Title>
                          <Card.Text className="producto-descripcion">{producto.descripcion}</Card.Text>
                          <div className="mt-auto">
                            <RenderStars rating={producto.valoracion} />
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <span className="producto-precio">{producto.precio.toFixed(2)}€</span>
                              <Button variant="outline-danger" size="sm">
                                <FaTrash />
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
                <small className="text-muted">Hau aurrebista bat da. Sakatu "Argitaratu Denda" amaitzeko.</small>
            </div>
          </Container>
        </>
      )}

      {/* MODAL PARA AÑADIR PRODUCTO */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Produktu Berria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Izena</Form.Label>
              <Form.Control type="text" name="name" value={newProduct.name} onChange={handleProductChange} placeholder="Adib: Taladroa" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prezioa (€)</Form.Label>
              <Form.Control type="number" name="price" value={newProduct.price} onChange={handleProductChange} placeholder="0.00" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Irudia</Form.Label>
              <Form.Control type="file" onChange={handleProductImage} />
            </Form.Group>
            {newProduct.preview && (
              <img src={newProduct.preview} alt="Preview" className="img-fluid rounded mt-2" style={{maxHeight: "150px"}} />
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Utzi</Button>
          <Button style={{backgroundColor: "#d69f3a", border: "none"}} onClick={saveProduct}>Gorde</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default RegisterShop;
