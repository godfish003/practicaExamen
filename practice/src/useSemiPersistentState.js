import { useEffect, useState } from "react";

function useSemiPersistentState(key, initialState) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useSemiPersistentState;
