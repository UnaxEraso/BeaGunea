import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsShop, BsCheckCircleFill, BsCloudUpload, BsArrowRight, BsGeoAlt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../home/home.css"; // Importamos los mismos estilos para que se vea igual (btn-rosa, etc)

const RegisterShop = () => {
  const navigate = useNavigate();

  // Estado para guardar los datos del formulario
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    category: "Elikagaiak",
    address: "",
    image: "/images/placeholder-shop.jpg", // Imagen por defecto si no suben una
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopData({ ...shopData, [name]: value });
  };

  // Simulación de subida de imagen (en un caso real, aquí iría la lógica de backend)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setShopData({ ...shopData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a enviar al backend (Laravel):", shopData);
    // Aquí harías tu petición POST con axios
    // axios.post('/api/shops', shopData)...
    alert("Denda ondo sortu da! (Tienda creada correctamente)");
    navigate("/dashboard"); // Redirigir al panel para añadir productos
  };

  return (
    <section className="register-section py-5 bg-light" style={{ minHeight: "100vh" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Eman izena zure dendari</h2>
          <p className="lead text-muted">Bete formularioa eta ikusi nola geratuko den zure txartela.</p>
        </div>

        <Row className="g-5 align-items-start">
          
          {/* COLUMNA IZQUIERDA: EL FORMULARIO */}
          <Col lg={7}>
            <Card className="shadow-lg border-0 p-4">
              <Card.Body>
                <h4 className="mb-4 fw-bold text-rosa">Dendaren Informazioa</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Dendaren Izena</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Adibidez: Okindegia Maite" 
                          name="name"
                          value={shopData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Kategoria</Form.Label>
                        <Form.Select 
                          name="category" 
                          value={shopData.category}
                          onChange={handleChange}
                        >
                          <option>Elikagaiak</option>
                          <option>Arropa</option>
                          <option>Elektronika</option>
                          <option>Bitxikeriak</option>
                          <option>Zerbitzuak</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Helbidea</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Kale Nagusia 12, Donostia"
                          name="address"
                          value={shopData.address}
                          onChange={handleChange} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Deskribapena (Laburra)</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={3} 
                          placeholder="Azaldu zure negozioa esaldi pare batean..." 
                          name="description"
                          value={shopData.description}
                          onChange={handleChange}
                          maxLength={100}
                        />
                        <Form.Text className="text-muted">
                          {shopData.description.length}/100 karaktere
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={12} className="mb-4">
                      <Form.Group>
                        <Form.Label>Dendaren Argazkia</Form.Label>
                        <div className="d-flex align-items-center">
                          <Form.Control 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                          <BsCloudUpload size={25} className="ms-3 text-muted" />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid">
                    <Button type="submit" size="lg" className="btn-rosa py-3">
                      Denda Sortu eta Produktuak Gehitu <BsArrowRight className="ms-2"/>
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* COLUMNA DERECHA: VISTA PREVIA (LA PLANTILLA) */}
          <Col lg={5} className="d-none d-lg-block sticky-top" style={{ top: "20px" }}>
            <h5 className="text-muted mb-3 text-center">Aurrebista (Vista Previa)</h5>
            
            {/* Esta es la MISMA estructura de Card que usas en el Home */}
            <Card className="h-100 shadow-lg border-0 hover-lift service-card text-center bg-white">
              <div className="position-relative">
                {/* Imagen de cabecera simulada con la imagen subida */}
                <div 
                  style={{ 
                    height: "200px", 
                    backgroundImage: `url(${shopData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem"
                  }} 
                  className="w-100"
                />
                {/* Icono de categoría flotante */}
                <div className="position-absolute top-100 start-50 translate-middle">
                   <div className="bg-white rounded-circle p-3 shadow-sm border border-2 border-white">
                     <BsShop size={30} className="text-rosa" />
                   </div>
                </div>
              </div>

              <Card.Body className="pt-5 px-4 pb-4">
                <div className="mt-3">
                  <span className="badge bg-light text-dark mb-2 border">{shopData.category}</span>
                  <Card.Title className="h3 mb-2 fw-bold text-dark">
                    {shopData.name || "Dendaren Izena"}
                  </Card.Title>
                  
                  {shopData.address && (
                    <p className="text-muted small mb-3">
                      <BsGeoAlt className="me-1" /> {shopData.address}
                    </p>
                  )}

                  <Card.Text className="text-muted mb-4">
                    {shopData.description || "Hemen agertuko da zure dendaren deskribapena. Idatzi ezkerreko formularioan emaitza ikusteko."}
                  </Card.Text>
                  
                  <Button variant="outline-rosa" className="w-100 rounded-pill">
                    Denda Bisitatu
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <div className="text-center mt-4 text-muted small">
              <BsCheckCircleFill className="text-success me-1"/> 
              Horrela ikusiko dute bezeroek
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegisterShop;
