import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';
import ComercioDispatcher from './components/ComercioDispatcher.js'; 
import Kontaktua from './components/Contacto/kontaktua.jsx';

// --- NUEVA IMPORTACIÓN ---
// Ajusta la ruta si guardaste el archivo en otro lugar, por ejemplo: './components/RegisterShop'
import RegisterShop from './components/RegisterShop/RegisterShop'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      
      <Header />
      <main>
        <Routes>
          {/* Ruta Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Rutas de Comercios */}
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/comercio/:id" element={<ComercioDispatcher />} />
          
          {/* Ruta de Contacto */}
          <Route path="/contacto" element={<Kontaktua />} />
          
          {/* --- RUTA NUEVA: REGISTRO DE TIENDAS --- */}
          {/* Esta ruta coincide con el navigate('/register-shop') que pusimos en el Home */}
          <Route path="/register-shop" element={<RegisterShop />} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<div className="text-center mt-5">404 - Ez da orria aurkitu</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
