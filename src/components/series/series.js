import React, { useState, useEffect } from 'react';
import data from '../../sample.json'; 
import './series.css'; 
import Carga from '../carga/carga';  

function Series() {
  const series = data.entries.filter(item => item.programType === 'series');
  const [currentPage, setCurrentPage] = useState(1);
  const seriesPerPage = 20;
  const indexOfLastSeries = currentPage * seriesPerPage;
  const indexOfFirstSeries = indexOfLastSeries - seriesPerPage;
  const currentSeries = series.slice(indexOfFirstSeries, indexOfLastSeries);
  const totalPages = Math.ceil(series.length / seriesPerPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Carga />; // Usar el componente Carga cuando los datos están cargando
  }

  return (
    <div>
      <div className="series-container">
        {currentSeries.map((serie, index) => (
          <div key={index} className="card">
            <img src={serie.images['Poster Art'].url} alt={serie.title} />
            <h2>{serie.title}</h2>
            <p>Año {serie.releaseYear}</p>
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

export default Series;