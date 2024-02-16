import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Program from './features/program/program'; 
import Peliculas from './components/peliculas/peliculas'; 
import Series from './components/series/series'; // Importa el componente Series

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Series />} /> {/* Agrega la ruta para las series */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer className="App-footer" />
      </div>
    </Router>
  );
}

export default App;