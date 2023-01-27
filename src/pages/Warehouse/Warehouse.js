import React, { useEffect, useState } from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import axios from "axios";

function Warehouse() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/warehouses`
        );
        setWarehouses(data);
      } catch (error) {
        console.log("Warehouse Page:", error);
      }
    };
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <h4>Page is loading...</h4>;
  }

  return (
    <>
      <WarehouseList warehouses={warehouses} />
    </>
  );
}

export default Warehouse;
