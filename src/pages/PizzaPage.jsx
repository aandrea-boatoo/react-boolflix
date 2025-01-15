import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Card from "../components/Card.jsx";
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
const apiUrl = import.meta.env.VITE_API_URL;
export default function PizzaPage() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { setAlertData } = useGlobalContext();
  useEffect(getData, [id]);

  const navigate = useNavigate();
  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   function (error) {
  //     // do what you want to do with the error.
  //     navigate("/errors"); //rotta inesistente
  //     return Promise.reject(error);
  //   }
  // );
  function getData() {
    axios
      .get(apiUrl + "/pizzas/" + id)
      .then((res) => {
        //console.log(res);
        setPizza(res.data.item);
      })
      .catch((error) => {
        console.log(error);
        setAlertData({
          type: "danger",
          message: "La pizza che cerci non esiste",
        });
        navigate("/pizzas");
      })
      .finally(() => {
        console.log("finally");
      });
  }

  return (
    <section>
      <h1>Sono la pizza con id {id}</h1>
      {pizza && (
        <Card
          //item={pizza}
          image={pizza.image}
          title={pizza.name}
          description={pizza.ingredients.join(", ")}
          badge={pizza.price + " €"}
          id={pizza.id}
        />
      )}
    </section>
  );
}
