import { useState } from "react";

import MovieList from "./MovieList";

export default function ListBox({ moviesList }) {
  const [movies, setMovies] = useState(moviesList);

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}
