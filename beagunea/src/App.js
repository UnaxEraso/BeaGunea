import React, { useEffect } from 'react';
// IMPORTANTE: Usamos HashRouter para evitar errores en GitHub Pages
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importación de componentes
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';
import ComercioDispatcher from './components/ComercioDispatcher.js'; 
import Kontaktua from './components/Contacto/kontaktua.jsx';
import RegisterShop from './components/RegisterShop/RegisterShop'; 

// Componente para hacer scroll hacia arriba al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Componente con el contenido principal y las rutas
function AppContent() {
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
          
          {/* Ruta de Registro de Tienda */}
          <Route path="/register-shop" element={<RegisterShop />} />
          
          {/* Ruta 404 para páginas no encontradas */}
          <Route path="*" element={<div className="text-center mt-5">404 - Ez da orria aurkitu</div>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

// Componente Principal APP
function App() {
  // HashRouter maneja las rutas con # (ej: /#/comercios)
  // Esto es necesario para que GitHub Pages no devuelva error 404 al recargar.
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
