import List from "./List";
import Search from "./Search";
import { getStories } from "./services";
import useSemiPersistentState from "./useSemiPersistentState";
import { useState, useEffect, useCallback } from "react";
import Pagination from "./Pagination";

function Home({ handleClick }) {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "react");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setActualPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getStories(searchTerm, actualPage).then((result) => {
      setStories(result.results);

      setTotalPages(result.totalPages);

      setIsLoading(false);
    });
  }, [searchTerm, actualPage]);

  const changeSearchTerm = useCallback(
    (term) => {
      setSearchTerm(term);

      setActualPage(0);

      // setStoriesLoaded(false)
    }
  );

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
      <Search searchTerm={searchTerm} setSearchTerm={changeSearchTerm} />
      <List list={stories} />
      <Pagination totalPages={totalPages} actualPage={actualPage} setActualPage={setActualPage}/>
    </>
  );
}

export default Home;
