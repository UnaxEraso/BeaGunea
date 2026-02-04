import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';

// Importamos el nuevo "Dispatcher" en lugar de tiendas sueltas
import ComercioDispatcher from './components/ComercioDispatcher.js'; 
// (Ajusta la ruta si lo guardaste en otro sitio)

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<Comercios />} />
          
          {/* 
            Aquí está la magia:
            Cualquier ruta /comercio/X cargará el Dispatcher.
            El Dispatcher leerá la X y mostrará la tienda correcta.
          */}
          <Route path="/comercio/:id" element={<ComercioDispatcher />} />

          <Route path="*" element={<div className="text-center mt-5">404 - Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
