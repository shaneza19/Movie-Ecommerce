import React, { useState, useEffect } from "react";

const API_KEY = "208d5cfa860798cbb6bd24099d048388";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function PopularMovieList({ addToCart }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .then(console.log(movies));
  }, []);

  const img_URL = `https://image.tmdb.org/t/p/w500`;
  //<img src= `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}.jpg`></img>

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <React.Fragment>
            <li key={movie.id} onClick={() => addToCart(movie)}>
              {movie.title}
            </li>
            <img
              src={img_URL + movie.backdrop_path}
              onClick={() => addToCart(movie)}
            />
            <br />
            <textarea rows={4} cols={120} spellCheck="false">
              {movie.overview}
            </textarea>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovieList;
