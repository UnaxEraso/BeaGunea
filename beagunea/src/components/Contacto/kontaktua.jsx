import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
// import Header from "../header/header"; 
import "./kontaktua.css";

function Kontaktua() {
  const [formData, setFormData] = useState({
    izena: "",
    emaila: "",
    gaia: "",
    mezua: "",
  });

  const [bidalia, setBidalia] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inprimakiaren datuak:", formData);
    setBidalia(true);
    setTimeout(() => setBidalia(false), 5000);
    setFormData({ izena: "", emaila: "", gaia: "", mezua: "" });
  };

  return (
    <>
      {/* 1. Header-arekin itsatsita (ez dago mt-5). 
          2. Barruan padding handia (py-5 + pt-5 Container-ean) testua jaisteko.
          3. Kolorea gris iluna mantendu dut. */}
      <div 
        className="kontaktua-banner text-white text-center w-100 mb-5 pt-5" 
        style={{backgroundColor: "#343a40"}} 
      >
        <Container className="py-5 pt-lg-5"> {/* Padding extra goian */}
          <div className="mt-5"> {/* Beste tarte bat ziurtatzeko */}
            <h1 className="display-4 fw-bold">Jarri Gurekin Harremanetan</h1>
            <p className="lead text-light">Zalantzarik baduzu? Hemen gaude laguntzeko.</p>
          </div>
        </Container>
      </div>

      <Container className="mb-5">
        <Row>
          {/* Informazio Zutabea */}
          <Col lg={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4 text-dark">Informazioa</h3>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-secondary bg-opacity-10 text-dark rounded-circle p-3 me-3">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Helbidea</h5>
                    <p className="text-muted mb-0">
                      Zubiri-Manteo Ikastetxea<br />
                      Nafarroa Hiribidea, z/g<br />
                      20013 Donostia, Gipuzkoa
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-secondary bg-opacity-10 text-dark rounded-circle p-3 me-3">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Telefonoa</h5>
                    <p className="text-muted mb-0">+34 943 00 00 00</p>
                    <small className="text-muted">Astelehenetik Ostiralera: 09:00 - 17:00</small>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="icon-box bg-secondary bg-opacity-10 text-dark rounded-circle p-3 me-3">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Emaila</h5>
                    <p className="text-muted mb-0">info@bonajatetxea.eus</p>
                    <p className="text-muted">laguntza@bonajatetxea.eus</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario Zutabea */}
          <Col lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4 text-dark">Bidali zure kontsulta</h3>
                
                {bidalia && (
                  <Alert variant="success" onClose={() => setBidalia(false)} dismissible>
                    Eskerrik asko! Zure mezua ondo jaso dugu. Laster erantzungo dizugu.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formIzena">
                        <Form.Label>Izena</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Zure izena" 
                          name="izena"
                          value={formData.izena}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmaila">
                        <Form.Label>Emaila</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="adibidea@email.com" 
                          name="emaila"
                          value={formData.emaila}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGaia">
                    <Form.Label>Gaia</Form.Label>
                    <Form.Select 
                      name="gaia" 
                      value={formData.gaia} 
                      onChange={handleChange}
                    >
                      <option value="">Aukeratu gai bat...</option>
                      <option value="duda">Zalantza orokorra</option>
                      <option value="pedidos">Eskaerak</option>
                      <option value="sugerencia">Iradokizunak</option>
                      <option value="otro">Bestelakoak</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMezua">
                    <Form.Label>Mezua</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Idatzi hemen zure kontsulta..." 
                      name="mezua"
                      value={formData.mezua}
                      onChange={handleChange}
                      required 
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="dark" type="submit" size="lg">
                      <FaPaperPlane className="me-2" /> Bidali Mezua
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Mapa ezabatu dugu hemen */}
    </>
  );
}

export default Kontaktua;
