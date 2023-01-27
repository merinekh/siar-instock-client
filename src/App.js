import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import "./styles/style.scss";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/AddInventory";
import AddWarehouseForm from "./components/AddWarehouseForm/AddWarehouseForm";
import EditWarehouseForm from "./components/EditWarehouseForm/EditWarehouseForm";

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
          <Route path={AppRoute.ADDINVENTORY} element={<AddInventory />} />

          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route
            path={AppRoute.INVENTORYITEM}
            element={<InventoryItemDetails />}
          />
          <Route path={AppRoute.EDITINVENTORY} element={<EditInventory />} />

          <Route
            path={AppRoute.ADD_WAREHOUSEFORM}
            element={<AddWarehouseForm />}
          />
          <Route
            path={AppRoute.EDIT_WAREHOUSEFORM}
            element={<EditWarehouseForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
