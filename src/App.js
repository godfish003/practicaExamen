import { useState, useEffect } from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import PruebaView from "./PruebaView";


function App() {

  const [location, setLocation] = useState(1);

  const handleClick = (e) => {
    setLocation(parseInt(e.target.value));
    console.log(e.target.value);
  }

  return (
    <>
      {location === 1 ? (
        <Home handleClick={handleClick} />
      ) : location === 2 ? (
        <Favorites handleClick={handleClick} />
      ) : (
            <PruebaView handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
