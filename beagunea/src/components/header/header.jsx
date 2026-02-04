import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
// ✅ CAMBIO CLAVE: Usamos react-router-dom porque es lo que tienes en index.js
import { Link } from "react-router-dom"; 
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Key, BoxArrowRight, FilePersonFill } from "react-bootstrap-icons";

import "./header.css";
import BeaGuneaLogo from '../img/BeaGunea.png';

const Header = () => {
  return (
    <header className="header-section shadow-sm">
      <div className="topbar d-flex justify-content-between align-items-center px-4 py-2 position-relative">
        <div className="topbar-left">
          {/* ✅ Usamos 'to' en lugar de 'href' */}
          <Link to="/">
            <img src={BeaGuneaLogo} alt="Logo" height="70" />
          </Link>
        </div>

        <div className="topbar-center position-absolute start-50 translate-middle-x">
          <h1 className="header-title m-0 text-white fw-bold">BeaGunea</h1>
        </div>

        <div className="topbar-right">
          <Dropdown align="end">
            <Dropdown.Toggle className="header-btn user-dropdown-toggle border-0">
              <FaUser size={16} />
              <span className="d-none d-sm-inline ms-2">Mi Cuenta</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="user-dropdown-menu">
              <Dropdown.Item as={Link} to="/carrito">
                <FaShoppingCart className="me-2" /> Carrito
              </Dropdown.Item>
              <Dropdown.Divider className="border-secondary" />
              <Dropdown.Item as={Link} to="/login">
                <Key className="me-2" /> Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/erregistroa">
                <FilePersonFill className="me-2" /> Registro
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Navbar expand="lg" className="navbar-custom border-top border-dark-subtle py-1">
        <Container fluid>
          <Navbar.Toggle aria-controls="main-nav" className="bg-light" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto gap-lg-4 text-center">
              {/* ✅ Cambiamos 'href' por 'to' en todos los enlaces */}
              <Nav.Link as={Link} to="/" className="nav-link-custom text-uppercase">
                Inicio
              </Nav.Link>
              
              <Nav.Link as={Link} to="/comercios" className="nav-link-custom text-uppercase">
                Komertzioak
              </Nav.Link>
              
              <Nav.Link as={Link} to="/contacto" className="nav-link-custom text-uppercase">
                Kontaktua
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;