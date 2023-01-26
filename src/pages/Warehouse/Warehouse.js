import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
// import { AppRoute } from "../../const";
import EditAddWarehouseform from "../../components/EditAddWarehouseForm/EditAddWarehouseForm";
function Warehouse() {
  return (
    <>
      
      <EditAddWarehouseform />
      <WarehouseList />
    </>
  );
}

export default Warehouse;
