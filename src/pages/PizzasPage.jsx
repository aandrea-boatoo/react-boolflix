import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Card from "../components/Card.jsx";

const apiUrl = import.meta.env.VITE_API_URL;

function MainComponent() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState([]); //[valore, funzione per modificare]

  useEffect(() => {
    //console.log("E' stato eseguito use effect");
    getData(search);

    //return () => console.log("cleanup");
  }, [search]);

  // PER IL FILTRO NON è NECESSARIO useEffect perchè quando il componente viene
  // rieseguito all'aggiornamento della variabile search viene ricreata anche la const filteredMenu
  // sulla quale cicleremo nell'array infatti filteredMenu è una variabile che si basa su due altre
  // variabili di stato -- menu e search -- quindi non va impostata come variabile di stato
  // e non è necessario useEffect per calcolarla
  //const filteredMenu = filterItems(menu, search);

  //chiamata axios
  function getData(search) {
    let options = null;
    if (search) {
      options = {
        params: { search },
      };
    }
    axios
      .get(apiUrl + "/pizzas", options)
      .then((res) => {
        console.log(res.data);
        setMenu(res.data.data);
        //setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  function deleteItem(id) {
    axios
      .delete(apiUrl + "/pizzas/" + id)
      .then((res) => {
        console.log(res.data);
        getData(search);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <section className="container-fluid">
      <h1>Lista delle pizze</h1>
      <div className="row gy-4">
        <div className="col-12 py-4"></div>
        <div className="col-12 py-4">
          <Link to="/pizzas/create" className="btn btn-success">
            Aggiungi nuova pizza
          </Link>
        </div>
        <div className="col-12 py-4">
          <label htmlFor="search" className="form-label">
            Cerca
          </label>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            className="form-control"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row gy-4">
        {menu.length > 0
          ? menu.map(
              (pizza) =>
                pizza.avaiable && (
                  <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                    <Card
                      //item={pizza}
                      image={pizza.image}
                      title={pizza.name}
                      description={pizza.ingredients.join(", ")}
                      badge={pizza.price + " €"}
                      id={pizza.id}
                      onDelete={() => deleteItem(pizza.id)}
                    />
                  </div>
                )
            )
          : "Non ci sono pizze"}
      </div>
    </section>
  );
}
export default MainComponent;
