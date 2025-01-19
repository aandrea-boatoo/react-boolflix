import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import image from "./assets/react.svg";

import { GlobalProvider } from "./contexts/GlobalContext";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";



function App() {
  return (
    <GlobalProvider>
      <HeaderComponent />
      <MainComponent />
    </GlobalProvider>
  );
}

export default App;
