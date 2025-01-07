import { useState } from "react";

import Summary from "./Summary";
import WatchedMoviesList from "./WatchedMoviesList";

export default function WatchedBox({ watched }) {
    const [isOpen, setIsOpen] = useState(true);




    return(
        <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
          <>
            <Summary watched={watched} />
            <WatchedMoviesList watched={watched} />

            
          </>
        )}
      </div>
    )
}