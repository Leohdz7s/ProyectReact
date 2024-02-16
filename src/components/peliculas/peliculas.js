import React, { useState, useEffect } from 'react';
import data from '../../sample.json';
import './peliculas.css';
import Carga from '../carga/carga';

function Peliculas() {
  const peliculas = data.entries.filter(item => item.programType === 'movie');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const moviesPerPage = 20;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  // Función para manejar cambios en la búsqueda
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar la página actual al realizar una nueva búsqueda
  };

  // Filtrar películas según el término de búsqueda
  const filteredMovies = peliculas.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Carga />;
  }

  return (
    <div>
      <div className="top">
        <input type="number" placeholder="Buscar..." className='input-filter' min={1} max={10} list='años' />
        <datalist id='años'>
          <option value='2010' />
          <option value='2011' />
          <option value='2012' />
          <option value='2013' />
          <option value='2014' />
          <option value='2015' />
          <option value='2016' />
          <option value='2017' />
          <option value='2018' />
          <option value='2019' />
          <option value='2020' />
        </datalist>
      </div>
      <div className="peliculas-container">
        {currentMovies.map((pelicula, index) => (
          <div key={index} className="card">
            <img src={pelicula.images['Poster Art'].url} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>Año de lanzamiento: {pelicula.releaseYear}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map(number => (
          <button key={number} onClick={() => setCurrentPage(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
