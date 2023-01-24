import { BrowserRouter, Routes, Route } from "react-router-dom";
import WareHouseDetails from "./components/WareHouseDetails/WareHouseDetails";
import Inventory from "./pages/Inventory";
import "./App.css";
import Warehouse from "./pages/Warehouse/Warehouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/warehouse_list" element={<WareHouseDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
