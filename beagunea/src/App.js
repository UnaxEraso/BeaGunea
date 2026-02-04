import React, { useEffect } from 'react';
// CAMBIO 1: Importamos HashRouter en lugar de BrowserRouter
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'; 

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';
import ComercioDispatcher from './components/ComercioDispatcher.js'; 
import Kontaktua from './components/Contacto/kontaktua.jsx';
import RegisterShop from './components/RegisterShop/RegisterShop'; 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/comercio/:id" element={<ComercioDispatcher />} />
          <Route path="/contacto" element={<Kontaktua />} />
          <Route path="/register-shop" element={<RegisterShop />} />
          <Route path="*" element={<div className="text-center mt-5">404 - Ez da orria aurkitu</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // CAMBIO 2: Usamos HashRouter directamente. 
  // No hace falta basename, funciona automático en GitHub Pages.
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
