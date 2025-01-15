import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const GlobalContext = createContext();
const initialData = { type: "", message: "" };
const GlobalProvider = ({ children }) => {
  const [alertData, setAlertData] = useState(initialData);
  const [ingredientList, setIngredientList] = useState([]);
  useEffect(() => {
    //console.log("E' stato eseguito use effect");
    getIngredients();
    //return () => console.log("cleanup");
  }, []);
  //console.log("E' stato eseguito use effect");

  function getIngredients() {
    axios
      .get(apiUrl + "/ingredients")
      .then((res) => {
        //console.log(res.data);
        setIngredientList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  return (
    <GlobalContext.Provider value={{ alertData, setAlertData, ingredientList }}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
