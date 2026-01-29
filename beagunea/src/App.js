import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer'; // ✅ Import OK
import Home from './components/home/home';

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column"> {/* ✅ Layout vertical */}
      <Header />
     <Home />
      <Footer />
    </div>
  );
}

export default App;
