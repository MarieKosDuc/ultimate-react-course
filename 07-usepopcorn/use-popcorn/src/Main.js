import { useState } from "react";

import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox/WatchedBox";

export default function Main({ movies, tempWatchedData }) {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <main className="main">
      <ListBox moviesList={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}
