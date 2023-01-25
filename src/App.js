import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Warehouse_details from "./components/WareHouse_details/Warehouse_details";
import Inventory from "./pages/Inventory";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouse_list" element={<Warehouse_details />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/warehouseinventorylist"
          element={<WarehouseInventoryList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
