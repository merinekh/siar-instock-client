import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Layout from "./pages/Layout";
import { AppRoute } from "./const";
import Warehouse from "./pages/Warehouse/Warehouse";
import AddInventory from "./components/AddInventory/AddInventory";

import "./styles/style.scss";
import EditAddWarehouseForm from "./components/EditAddWarehouseForm/EditAddWarehouseForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />} >
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route path={AppRoute.ADD_WAREHOUSE_FORM} element={<EditAddWarehouseForm page="Add" />}/>
          <Route path={AppRoute.EDIT_WAREHOUSE_FORM} element={<EditAddWarehouseForm page="Edit" />}/>

          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
          <Route path={AppRoute.ADD_INVENTORY} element={<AddInventory/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
