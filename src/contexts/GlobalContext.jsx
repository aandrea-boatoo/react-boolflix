import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const GlobalContext = createContext();
const initialData = { type: "", message: "" };
const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData(query, endpoint) {
    setLoading(true)
    axios
      .get(apiUrl + "/search" + endpoint, {
        params: {
          api_Key: apiKey,
          query,
        },
      })
      .then((res) => {
        if (endpoint === "movie") {
          setMovies(res.data.results);
        }
        else {
          setSeries(res.data.results)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }
  function search(query) {
    getData(query, "movie");
    getData(query, "tv");
  }
  const data = {
    movies,
    series,
    search,
  }
  return (
    <GlobalContext.Provider value={data} >
      {children}
    </GlobalContext.Provider>
  );
}


function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
