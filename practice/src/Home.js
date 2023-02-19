import List from "./List";
import Search from "./Search";
import { getStories } from "./services";
import useSemiPersistentState from "./useSemiPersistentState";
import { useState, useEffect, useCallback, useRef } from "react";
import Pagination from "./Pagination";

function Home({ handleClick }) {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "react");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setActualPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [version, setVersion] = useState(1);
  const versionRef = useRef(0);

  useEffect(() => {
    versionRef.current = versionRef.current + 1;

    setVersion(v => {return v  +1})

    setIsLoading(true);

    getStories(searchTerm, actualPage).then((result) => {

      if (version === versionRef.current)
      {
      setStories(result.results);

      setTotalPages(result.totalPages);

      setIsLoading(false);
    }
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
      { isLoading ?
      <p>Loading...</p>
      :
      <>
      <List list={stories} />
      <Pagination totalPages={totalPages} actualPage={actualPage} setActualPage={setActualPage}/>
      </>
      }
    </>
  );
}

export default Home;
