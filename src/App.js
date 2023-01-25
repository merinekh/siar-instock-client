import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Inventory from "./pages/Inventory";
import AddInventory from "./components/AddInventory/AddInventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      {<AddInventory />}
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route path={AppRoute.ADDINVENTORY} element={<AddInventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
