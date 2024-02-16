import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

function CategoryLink({ to, background, title }) {
  return (
    <div className="category">
      <Link to={to} className="box" style={{ backgroundImage: `url(${background})` }}>
        <h2>{title}</h2> {}
      </Link>
      <div className="description">{title}</div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="container">
        <CategoryLink to="/peliculas" background="https://static.vecteezy.com/system/resources/previews/010/922/079/non_2x/film-reel-icon-on-white-background-film-strip-sign-film-reel-movie-symbol-flat-style-vector.jpg" title="Películas" />
        <CategoryLink to="/series" background="https://static.vecteezy.com/system/resources/previews/010/922/079/non_2x/film-reel-icon-on-white-background-film-strip-sign-film-reel-movie-symbol-flat-style-vector.jpg" title="Series" />
      </div>
    </div>
  );
}

export default Home;
