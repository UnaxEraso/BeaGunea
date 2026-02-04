import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';
import ComercioDetalle from './components/Comercios/laviña';

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/comercio/:id" element={<ComercioDetalle />} />
          {/* Esta ruta ayuda a ver si hay errores de escritura en la URL */}
          <Route path="*" element={<div className="text-center mt-5">404 - Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
