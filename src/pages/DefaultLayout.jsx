import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import Alert from "../components/Alert";
import FooterComponent from "../components/FooterComponent";
export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <Alert />
      <main className="container">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
}
