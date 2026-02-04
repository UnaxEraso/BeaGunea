import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Comercios from './components/Comercios/comercios';
import ComercioDispatcher from './components/ComercioDispatcher.js'; 

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/comercio/:id" element={<ComercioDispatcher />} />
          <Route path="*" element={<div className="text-center mt-5">404 - Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;