import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Key, BoxArrowRight, FilePersonFill } from "react-bootstrap-icons";

import "./header.css";
import BeaGuneaLogo from '../img/BeaGunea.png';

const Header = () => {
  return (
    <header className="header-section shadow-sm">
      {/* --- TOPBAR: LOGO, TÍTULO Y USUARIO --- */}
      <div className="topbar d-flex justify-content-between align-items-center px-4 py-2 position-relative">
        
        {/* Logo (Izquierda) */}
        <div className="topbar-left">
          <img src={BeaGuneaLogo} alt="Logo" height="70" />
        </div>

        {/* Título Central */}
        <div className="topbar-center position-absolute start-50 translate-middle-x">
          <h1 className="header-title m-0 text-white fw-bold">BeaGunea</h1>
        </div>

        {/* Acciones de Usuario (Derecha) */}
        <div className="topbar-right">
          <Dropdown align="end">
            <Dropdown.Toggle className="header-btn user-dropdown-toggle">
              <FaUser size={16} />
              <span className="d-none d-sm-inline ms-2">Mi Cuenta</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="user-dropdown-menu">
              <Dropdown.Item href="#">
                <FaShoppingCart className="me-2" /> Carrito
              </Dropdown.Item>
              <Dropdown.Divider className="border-secondary" />
              <Dropdown.Item href="#">
                <Key className="me-2" /> Login
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <FilePersonFill className="me-2" /> Registro
              </Dropdown.Item>
              <Dropdown.Divider className="border-secondary" />
              <Dropdown.Item className="text-danger">
                <BoxArrowRight className="me-2" /> Cerrar Sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* --- NAVBAR: NAVEGACIÓN --- */}
      <Navbar expand="lg" className="navbar-custom border-top border-dark-subtle py-1">
        <Container fluid>
          <Navbar.Toggle aria-controls="main-nav" className="bg-light" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto gap-lg-4">
              <Nav.Link href="#" className="nav-link-custom text-uppercase">Inicio</Nav.Link>
              <Nav.Link href="#" className="nav-link-custom text-uppercase">Comercios</Nav.Link>
              <Nav.Link href="#" className="nav-link-custom text-uppercase">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;