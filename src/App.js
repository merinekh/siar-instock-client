import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Inventory from "./pages/Inventory";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AddInventory />
      <Routes>
        <Route path={AppRoute.HOME} element={<Layout />}>
          <Route path={AppRoute.WAREHOUSE} element={<Warehouse />} />
          <Route path={AppRoute.INVENTORY} element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
