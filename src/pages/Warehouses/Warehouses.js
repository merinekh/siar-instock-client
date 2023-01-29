import { useEffect, useState } from "react";
import WarehousesTable from "../../components/WarehousesTable/WarehousesTable";
import axios from "axios";
import { ENDPOINT_WAREHOUSES } from "../../const";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Warehouses() {
const [warehouses, setWarehouses] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(ENDPOINT_WAREHOUSES);
      setWarehouses(data);
    } catch (error) {
      console.log("Warehouse Page:", error);
    }
  };

  const handleDeleteButton = (warehouse) => () => setSelectedWarehouse(warehouse);

  const handleModalCloseClick = () => setSelectedWarehouse({});
  const handleModalCancelClick = () => setSelectedWarehouse({});
  const handleModalDeleteClick = () => {
    axios.delete(`${ENDPOINT_WAREHOUSES}/${selectedWarehouse.id}`)
      .then(() => {
        const newWarehouses = warehouses.filter((item) => item.id !== selectedWarehouse.id);
        setSelectedWarehouse({});
        setWarehouses(newWarehouses);
      });
  };

  useEffect(() => {
    !warehouses && getWarehouses();
  }, [warehouses]);

  if (!warehouses) {
    return <h4>Page is loading...</h4>;
  }

  return (
    <main className="warehouses container">
      <WarehousesTable warehouses={warehouses} handleDeleteButton={handleDeleteButton} />

      {selectedWarehouse.id && 
        <DeleteModal 
          warehouse={selectedWarehouse}
          handleModalCloseClick={handleModalCloseClick}
          handleModalCancelClick={handleModalCancelClick}
          handleModalDeleteClick={handleModalDeleteClick}
        />}
    </main>
  )
}

export default Warehouses