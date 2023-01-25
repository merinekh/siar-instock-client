import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import "./styles/style.scss";
import Warehouse from "./pages/Warehouse/Warehouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
