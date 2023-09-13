import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";

const API_KEY = "208d5cfa860798cbb6bd24099d048388";

function MovieList({ addToCart }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  const [searchQuery, setSearchQuery] = useState("a");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //Query movie from search bar
  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`;

    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [searchQuery]);

  //Image URL and predefined image size = 500
  const img_URL = `https://image.tmdb.org/t/p/w500`;
  //<img src= `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}.jpg`></img>

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h2>Movies from search result: {searchQuery}</h2>
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
            <div />
            <textarea rows={8} cols={120} spellcheck="false">
              {movie.overview}
            </textarea>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
