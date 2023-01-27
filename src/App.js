import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import "./styles/style.scss";
import Warehouse from "./pages/Warehouse/Warehouse";
import AddWarehouseForm from "./components/AddWarehouseForm/AddWarehouseForm";
import EditWarehouseForm from "./components/EditWarehouseForm/EditWarehouseForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />

          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route
            path={AppRoute.ADDWAREHOUSEFORM}
            element={<AddWarehouseForm />}
          />
          <Route
            path={AppRoute.EDITWAREHOUSEFORM}
            element={<EditWarehouseForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
