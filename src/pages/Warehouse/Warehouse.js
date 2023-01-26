import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
// import { AppRoute } from "../../const";
import EditAddWarehouseform from "../../components/EditAddWarehouseForm/EditAddWarehouseForm";
function Warehouse() {
  return (
    <>
      <WarehouseList />

      <EditAddWarehouseform page="Edit" />
      <EditAddWarehouseform page="Add" />
    </>
  );
}

export default Warehouse;
