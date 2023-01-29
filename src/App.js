import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddInventory from "./components/AddInventory/AddInventory";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventory from "./components/EditInventory/EditInventory";
import WarehouseShow from "./pages/WarehouseShow/WarehouseShow";
import Home from "./pages/Home/Home";
import "./styles/style.scss";
// import Warehouse from "./pages/Warehouse/Warehouse";
// import EditAddWarehouseForm from "./components/EditAddWarehouseForm/EditAddWarehouseForm";
// //import AddInventory from "./components/AddInventory/AddInventory";
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route index element={<Home />} />

          <Route path={AppRoute.WAREHOUSE} element={<Warehouses />} />
          <Route
            path={AppRoute.WAREHOUSE_INVENTORY}
            element={<WarehouseInventoryList />}
          />
          <Route path={AppRoute.WAREHOUSE_ADD} element={<WarehouseShow />} />
          <Route path={AppRoute.WAREHOUSE_EDIT} element={<WarehouseShow />} />

          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route path={AppRoute.ADD_INVENTORY} element={<AddInventory />} />
          <Route
            path={AppRoute.INVENTORY_ITEM}
            element={<InventoryItemDetails />}
          />
          <Route path={AppRoute.EDIT_INVENTORY} element={<EditInventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
