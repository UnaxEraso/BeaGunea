import React from "react";
import "./footer.css"; 
import { BsWhatsapp, BsInstagram, BsPhone, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main text-white">
      <div className="container-fluid px-5">
        <div className="row w-100 mx-0 justify-content-between align-items-start">
          
          {/* Columna 1 */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="fw-bold mb-4">BeaGunea</h3>
            <p className="footer-text-large opacity-90">
              Euskal Herriko denda txikien plataforma. Garapen komunitarioa eta enpresa txikien digitalizazioa sostengatzen dugu.
            </p>
            <div className="d-flex gap-4 mt-4">
              <a href="tel:+34600000000" className="text-white"><BsPhone size={28} /></a>
              <a href="mailto:info@beagunea.eus" className="text-white"><BsEnvelope size={28} /></a>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">Estekak azkar</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="/hasiera" className="text-white text-decoration-none footer-text-large">Hasiera</a></li>
              <li className="mb-3"><a href="/komerzioak" className="text-white text-decoration-none footer-text-large">Komerzioak</a></li>
              <li className="mb-3"><a href="/produktuak" className="text-white text-decoration-none footer-text-large">Produktuak</a></li>
              <li><a href="/kontaktua" className="text-white text-decoration-none footer-text-large">Kontaktua</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-md-center">
            <h5 className="fw-bold mb-4">Jarraitu gaitzazu</h5>
            <div className="d-flex gap-4 justify-content-md-center mb-4">
              <a href="https://wa.me/34600000000" className="text-white"><BsWhatsapp size={32} /></a>
              <a href="https://instagram.com/beagunea" className="text-white"><BsInstagram size={32} /></a>
            </div>
            <a href="mailto:info@beagunea.eus" className="text-white text-decoration-none fw-bold footer-text-large d-block">
              info@beagunea.eus
            </a>
          </div>

          {/* Columna 4 */}
          <div className="col-12 col-md-3 text-md-end">
             <h5 className="fw-bold mb-4">Gure Hiria</h5>
             <p className="footer-text-large opacity-75">Tokiko ekonomia indartuz.<br/>Donostia, Euskal Herria.</p>
          </div>
        </div>

        {/* Línea de Copyright */}
        <div className="row w-100 mx-0 mt-5 pt-4 border-top border-white border-opacity-20">
          <div className="col-12 text-center">
            <p className="footer-text-copyright opacity-75">© {year} BeaGunea. Eskubide guztiak erreserbatuta.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;