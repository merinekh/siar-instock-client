import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Warehouse_details from "./components/WareHouse_details/Warehouse_details";
import Inventory from "./pages/Inventory";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouse_list" element={<Warehouse_details />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
