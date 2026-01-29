import React from "react";
import "./footer.css"; // CSS propio para Beagunea
import { BsWhatsapp, BsInstagram, BsPhone, BsEnvelope } from "react-icons/bs"; // Twitter quitado

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-rosa text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Kolumna 1: Logo eta azalpena */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">BeaGunea</h5>
            <p className="small opacity-90">
              Euskal Herriko dendak txikien plataforma. Garapen komunitarioa eta enpresa txikien digitalizazioa sostengatzen dugu.
            </p>
            <div className="d-flex gap-2">
              <a href="tel:+34600000000" className="text-white text-decoration-none" aria-label="Telefonoa">
                <BsPhone size={20} />
              </a>
              <a href="mailto:info@beagunea.eus" className="text-white text-decoration-none" aria-label="E-posta">
                <BsEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Kolumna 2: Estekak azkar */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Estekak azkar</h6>
            <ul className="list-unstyled">
              <li><a href="/hasiera" className="text-white text-decoration-none small opacity-90">Hasiera</a></li>
              <li><a href="/komerzioak" className="text-white text-decoration-none small opacity-90">Komerzioak</a></li>
              <li><a href="/produktuak" className="text-white text-decoration-none small opacity-90">Produktuak</a></li>
              <li><a href="/kontaktua" className="text-white text-decoration-none small opacity-90">Kontaktua</a></li>
            </ul>
          </div>

          {/* Kolumna 3: Sare sozialak + EMAIL GRANDE */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Jarraitu gaitzazu</h6>
            <div className="d-flex gap-3 mb-3">
              <a href="https://wa.me/34600000000" className="text-white" aria-label="WhatsApp">
                <BsWhatsapp size={24} />
              </a>
              <a href="https://instagram.com/beagunea" className="text-white" aria-label="Instagram">
                <BsInstagram size={24} />
              </a>
            </div>
            {/* EMAIL GRANDE en lugar de Twitter */}
            <div className="text-center">
              <a href="mailto:info@beagunea.eus" className="text-white text-decoration-none fw-bold small d-block mb-1">
                info@beagunea.eus
              </a>
              <BsEnvelope size={28} className="mx-auto d-block text-white" />
            </div>
          </div>

          {/* Kolumna 4: Slogan */}
          <div className="col-12 col-lg-4 mt-3 mt-lg-0">
            <p className="small opacity-75 mb-0">
              Tokiko ekonomia indartuz. Euskal Herria.
            </p>
          </div>
        </div>

        {/* COPYRIGHT UNA LÍNEA ABAJO */}
        <div className="row mt-4 pt-3 border-top border-white border-opacity-20">
          <div className="col-12 text-center">
            <small className="opacity-75">
              © {year} BeaGunea. Eskubide guztiak erreserbatuta.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
