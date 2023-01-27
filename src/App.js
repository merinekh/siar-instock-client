import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import Warehouse from "./pages/Warehouse/Warehouse";
import AddInventory from "./components/AddInventory/AddInventory";
import AddWarehouseForm from "./components/AddWarehouseForm/AddWarehouseForm";
import EditWarehouseForm from "./components/EditWarehouseForm/EditWarehouseForm";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventory from "./components/EditInventory/EditInventory";
import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />} >
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route path={AppRoute.WAREHOUSE_INVENTORY}element={<WarehouseInventoryList />}/>
          <Route path={AppRoute.ADD_WAREHOUSE_FORM} element={<AddWarehouseForm />}/>
          <Route path={AppRoute.EDIT_WAREHOUSE_FORM} element={<EditWarehouseForm />}/>

          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route path={AppRoute.ADD_INVENTORY} element={<AddInventory/>}/>
          <Route path={AppRoute.INVENTORY_ITEM} element={<InventoryItemDetails />}/>
          <Route path={AppRoute.EDIT_INVENTORY} element={<EditInventory />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
