import axios from "axios";
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router";
import { AppRoute, ENDPOINT_WAREHOUSES } from "../../const";

function WarehouseForm({ warehouseID }) {
  const [warehouse, setWarehouse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (warehouseID) {
      axios.get(`${ENDPOINT_WAREHOUSES}/${warehouseID}`)
        .then(({data}) => setWarehouse(data))
        .catch((error) => console.log(error));
    }
  }, [warehouseID]);

  const handleCancelButtonClick = () => {
    warehouseID
      ? navigate(generatePath(AppRoute.WAREHOUSE_INVENTORY, { id: warehouseID }))
      : navigate(AppRoute.WAREHOUSE);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (warehouseID) {
      // Update warehouse
      axios.put(`${ENDPOINT_WAREHOUSES}/${warehouseID}`, {
        warehouse_name: evt.target.warehouse_name.value,
        address: evt.target.address.value,
        city: evt.target.city.value,
        country: evt.target.country.value,
        contact_name: evt.target.contact_name.value,
        contact_position: evt.target.contact_position.value,
        contact_phone: evt.target.contact_phone.value,
        contact_email: evt.target.contact_email.value,
      
    })
      .then(() => navigate(generatePath(AppRoute.WAREHOUSE_INVENTORY, {id: warehouseID})))
      .catch((error) => console.log(error));    

      return;
    }

    // Add warehouse
    axios
    .post(ENDPOINT_WAREHOUSES, {
        warehouse_name: evt.target.warehouse_name.value,
        address: evt.target.address.value,
        city: evt.target.city.value,
        country: evt.target.country.value,
        contact_name: evt.target.contact_name.value,
        contact_position: evt.target.contact_position.value,
        contact_phone: evt.target.contact_phone.value,
        contact_email: evt.target.contact_email.value,
      
    })
      .then(() => {
        navigate(AppRoute.WAREHOUSE)
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="warehouse-form" onSubmit={handleFormSubmit}>
      <input type="hidden" name="id" value={warehouse?.id} />

      <div className="warehouse-form__fieldset">
        <h3 className="warehouse-form__legend">Warehouse Details</h3>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="name">Warehouse Name</label>
          <input className="warehouse-form__field" 
            id="name"
            name="warehouse_name"
            type="text"
            placeholder="Warehouse Name"
            autoComplete="off"
            defaultValue={warehouse?.warehouse_name}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="address">Street Address</label>
          <input className="warehouse-form__field" 
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
            autoComplete="off"
            defaultValue={warehouse?.address}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="city">City</label>
          <input className="warehouse-form__field" 
            id="city"
            name="city"
            type="text"
            placeholder="City"
            autoComplete="off"
            defaultValue={warehouse?.city}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="country">Country</label>
          <input className="warehouse-form__field" 
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            autoComplete="off"
            defaultValue={warehouse?.country}
            required
          />
        </div>
      </div>

      <div className="warehouse-form__fieldset">
        <h3 className="warehouse-form__legend">Contact Details</h3>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="contact-name">Contact Name</label>
          <input className="warehouse-form__field" 
            id="contact-name"
            name="contact_name"
            type="text"
            placeholder="Contact Name"
            autoComplete="off"
            defaultValue={warehouse?.contact_name}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="contact-position">Position</label>
          <input className="warehouse-form__field" 
            id="contact-position"
            name="contact_position"
            type="text"
            placeholder="Position"
            autoComplete="off"
            defaultValue={warehouse?.contact_position}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="contact-phone">Phone Number</label>
          <input className="warehouse-form__field" 
            id="contact-phone"
            name="contact_phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="off"
            defaultValue={warehouse?.contact_phone}
            required
          />
        </div>

        <div className="warehouse-form__element">
          <label className="warehouse-form__label" htmlFor="contact-email">Email</label>
          <input className="warehouse-form__field" 
            id="contact-email"
            name="contact_email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            defaultValue={warehouse?.contact_email}
            required
          />
        </div>
      </div>

      <div className="warehouse-form__buttons">
        <button className="warehouse-form__button" 
          type="reset"
          onClick={handleCancelButtonClick}
        >
          Cancel
        </button>

        <button className="warehouse-form__button" type="submit">
          {warehouseID
            ? 'Save'
            : '+ Add Warehouse'}
        </button>
      </div>
    </form>
  )
}

export default WarehouseForm
