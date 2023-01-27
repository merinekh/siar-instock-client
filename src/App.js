import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import "./styles/style.scss";
import Warehouse from "./pages/Warehouse/Warehouse";
import EditAddWarehouseForm from "./components/EditAddWarehouseForm/EditAddWarehouseForm";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route
            path={AppRoute.WAREHOUSEINVENTORY}
            element={<WarehouseInventoryList />}
          />
          <Route
            path={AppRoute.EDIT_WAREHOUSE}
            element={<EditAddWarehouseForm />}
          />
          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route
            path={AppRoute.INVENTORYITEM}
            element={<InventoryItemDetails />}
          />
          <Route path={AppRoute.EDITINVENTORY} element={<EditInventory />} />

          <Route
            path={AppRoute.ADDWAREHOUSEFORM}
            element={<EditAddWarehouseForm page="Add" />}
          />
          <Route
            path={AppRoute.EDITWAREHOUSEFORM}
            element={<EditAddWarehouseForm page="Edit" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
