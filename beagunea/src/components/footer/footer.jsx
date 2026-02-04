import React from "react";
import "./footer.css"; 
// BsTwitter-en ordez FaXTwitter inportatzen dugu X logoarentzat (react-icons/fa6)
// Edo bestela, testu hutsa "X" jar dezakegu ikono liburutegia zaharra bada.
import { BsWhatsapp, BsInstagram, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6"; // Ziurtatu react-icons eguneratuta duzula
import { Link } from "react-router-dom"; 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main text-white py-5">
      <div className="container">
        <div className="row justify-content-between">
          
          {/* 1. Zutabea: Marka */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">BeaGunea</h3>
            <p className="opacity-75" style={{ maxWidth: "300px", lineHeight: "1.6" }}>
              Euskal Herriko denda txikien plataforma. Garapen komunitarioa eta enpresa txikien digitalizazioa sostengatzen dugu.
            </p>
          </div>

          {/* 2. Zutabea: Estekak (Produktuak kenduta) */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-uppercase fs-6 ls-1">Nabigazioa</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Hasiera</Link></li>
              <li><Link to="/comercios" className="text-white text-decoration-none opacity-75 hover-opacity-100">Komerzioak</Link></li>
              {/* Produktuak kenduta */}
              <li><Link to="/kontaktua" className="text-white text-decoration-none opacity-75 hover-opacity-100">Kontaktua</Link></li>
            </ul>
          </div>

          {/* 3. Zutabea: KONTAKTUA + X Logo */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-uppercase fs-6 ls-1">Kontaktua</h5>
            
            {/* Sare Sozialak */}
            <div className="d-flex gap-3 mb-3 align-items-center">
              <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" className="text-white fs-4 hover-scale">
                <BsWhatsapp />
              </a>
              <a href="https://instagram.com/beagunea" target="_blank" rel="noreferrer" className="text-white fs-4 hover-scale">
                <BsInstagram />
              </a>
              {/* X Logoa */}
              <a href="https://twitter.com/beagunea" target="_blank" rel="noreferrer" className="text-white fs-4 hover-scale">
                <FaXTwitter /> 
              </a>
            </div>

            {/* Emaila */}
            <div className="d-flex align-items-center gap-2">
              <BsEnvelope className="text-primary" />
              <a href="mailto:guneabea@gmail.com" className="text-white text-decoration-none fw-bold">
                guneabea@gmail.com
              </a>
            </div>
          </div>

          {/* 4. Zutabea: Kokapena */}
          <div className="col-6 col-md-3 text-md-end">
             <h5 className="fw-bold mb-3 text-uppercase fs-6 ls-1">Kokapena</h5>
             <div className="d-flex flex-column align-items-md-end gap-1">
                <div className="d-flex align-items-center gap-2">
                  <span>Donostia, Euskal Herria</span>
                  <BsGeoAlt />
                </div>
                <small className="opacity-50">Tokiko ekonomia sustatzen</small>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5 pt-4 border-top border-white border-opacity-10">
          <div className="col-12 text-center">
            <p className="small opacity-50 mb-0">
              © {year} BeaGunea. Eskubide guztiak erreserbatuta.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
