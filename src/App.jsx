import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import image from "./assets/react.svg";

import { GlobalProvider } from "./contexts/GlobalContext";

import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import PizzasPage from "./pages/PizzasPage";
import AddPizzaPage from "./pages/AddPizzaPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PizzaPage from "./pages/PizzaPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  //const [ingredientList, setIngredientList] = useState([]);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/pizzas">
              <Route index Component={PizzasPage}></Route>
              <Route path=":id" Component={PizzaPage}></Route>
              <Route path="create" Component={AddPizzaPage}></Route>
              <Route path="ricette" element={<Navigate to="/pizzas" />} />
            </Route>
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
