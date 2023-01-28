import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function WarehouseDetails() {
  const [warehouseDetails, setWarehouseDetails] = useState({});
  const params = useParams();
  const warehouseId = params.id;

  useEffect(() => {
    const getWarehouseDetails = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/warehouses/${warehouseId}`
        );
        setWarehouseDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getWarehouseDetails();
  }, [warehouseId]);
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__address">
        <p className="contact__address">
          WAREHOUSE ADRESS:
          <br />
          {warehouseDetails.address}, {warehouseDetails.city},
          {warehouseDetails.country}
        </p>
      </div>
      <div className="warehouse-details__contact-name">
        <p className="contact__name"></p>
      </div>
      <div className="warehouse-details__contact-information">
        <p className="contact__information"></p>
      </div>
    </div>
  );
}

export default WarehouseDetails;
