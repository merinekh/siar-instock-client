import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../WarehouseDetails/WarehouseDetails.scss";
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
  const address = `${warehouseDetails.address} , ${warehouseDetails.city} ,
            ${warehouseDetails.country}`;
  const contact_name = `${warehouseDetails.contact_name}`;
  const contact_position = `${warehouseDetails.contact_position}`;
  const contact_phone = `${warehouseDetails.contact_phone}`;
  const contact_email = `${warehouseDetails.contact_email}`;
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__contact-address">
        <h4 className="warehouse-details__contact-address-title">
          WAREHOUSE ADRESS:
        </h4>
        <p className="warehouse-details__contact-address-address">{address}</p>
      </div>
      <div className="warehouse-details__contact-name">
        <h4 className="warehouse-details__contact-name-title">CONTACT NAME</h4>
        <p className="warehouse-details__contact-name-name">{contact_name}</p>
        <p className="warehouse-details__contact-name-position">
          {contact_position}
        </p>
      </div>
      <div className="warehouse-details__contact-information">
        <h4 className="warehouse-details__contact-information-title">
          CONTACT INFORMATION:
        </h4>
        <p className="warehouse-details__contact-information-phone">
          {contact_phone}
        </p>
        <p className="warehouse-details__contact-information-email">
          {contact_email}
        </p>
      </div>
    </div>
  );
}

export default WarehouseDetails;
