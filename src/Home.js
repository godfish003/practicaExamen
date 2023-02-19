import List from "./List";
import Search from "./Search";
import { getStories } from "./services";
import useSemiPersistentState from "./useSemiPersistentState";
import { useState, useEffect } from "react";

function Home({ handleClick }) {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "react");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setActualPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getStories(searchTerm).then((result) => {
      setStories(result.results);

      setTotalPages(result.totalPages);

      setIsLoading(false);
    });
  }, [searchTerm]);

  return (
    <>
      <h1>Home</h1>
      <hr />
      <button value="2" onClick={handleClick}>
        Favorites
      </button>
      <br />
      <button value="3" onClick={handleClick}>
        PruebaView
      </button>
      <br />
      <hr />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List list={stories} />
    </>
  );
}

export default Home;
