import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { AppRoute, ENDPOINT_INVENTORY, ENDPOINT_WAREHOUSES } from "../../const";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

function AddInventory() {
  const navigate = useNavigate();
  const [stockStatus, setStockStatus] = useState("inStock");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [warehouses, setWarehouses] = useState([]);
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT_WAREHOUSES)
      .then((response) => setWarehouses(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(ENDPOINT_INVENTORY)
      .then((response) => setInventories(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1280);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleCancelButtonClick = () => {
    navigate(AppRoute.INVENTORY);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(ENDPOINT_INVENTORY, {
        item_name: event.target.item_name.value,
        description: event.target.description.value,
        category: event.target.category.value,
        status: event.target.status.value,
        quantity: event.target.quantity.value,
        warehouse: event.target.warehouse_name.value,
      })
      .then(() => {
        navigate(AppRoute.INVENTORY);
      })
      .catch((error) => console.log(error));

    if (
      !event.target.item_name.value ||
      !event.target.description.value ||
      !event.target.category.value ||
      !event.target.status.value ||
      !event.target.quantity.value ||
      !event.target.warehouse_name.value
    ) {
      alert("Please fill out all fields");
      return;
    }
  };
  return (
    <>
      <form className="AddInventory-form" onSubmit={handleSubmit}>
        <div className="AddInventory-form__header-div">
          <h1 className="AddInventory-form__header">
            <img
              className="AddInventory-form__backarrow"
              src={BackArrow}
              alt="back arrow icon"
            />
            Add New Inventory Item
          </h1>
        </div>
        <div className="AddInventory-box">
          <div className="AddInventory-form__top-box">
            <h2 className="AddInventory-form__sub-titles">Item Details</h2>
            <label className="AddInventory-form__label-titles">Item Name</label>
            <br />
            <input
              className="AddInventory-form__item-name-input"
              type="text"
              name="item_name"
              placeholder="Item Name"
              required
            ></input>
            <br />
            <label className="AddInventory-form__label-titles">
              Description
            </label>
            <br />
            <input
              className="AddInventory-form__description-input"
              type="textarea"
              name="description"
              placeholder="Please enter a brief description"
              required
            ></input>
            <br />
            <label className="AddInventory-form__label-titles">Category</label>
            <br />
            <select
              className="AddInventory-form__category-dropdown"
              name="category"
            >
              <option
                value="category-inventory"
                name="category-inventory"
                required
              >
                Please Select
              </option>
              {inventories.map((inventory) => (
                <option key={inventory.id} value={inventory.category}>
                  {inventory.category}
                </option>
              ))}
            </select>
            <br />
          </div>

          <div className="AddInventory-form__bottom-box">
            <h2 className="AddInventory-form__sub-titles">Item Availability</h2>
            <label className="AddInventory-form__label-titles">Status</label>
            <br />
            <label className="AddInventory-form__instock">
              <input
                className="AddInventory-form__instock-button"
                type="radio"
                name="status"
                value="in stock"
                checked={stockStatus === "in stock"}
                onChange={(e) => setStockStatus(e.target.value)}
              ></input>
              In Stock
            </label>
            <label className="AddInventory-form__stock">
              <input
                className="AddInventory__stock-button"
                type="radio"
                name="status"
                value="out of stock"
                checked={stockStatus === "out of stock"}
                onChange={(e) => setStockStatus(e.target.value)}
              ></input>
              Out Of Stock
            </label>
            <br />
            {((stockStatus === "in stock" && !isDesktop) ||
              (stockStatus === "out of stock" && !isDesktop)) && (
              <>
                <label className="AddInventory-form__label-titles">
                  Quantity
                </label>
                <br />
                <input
                  className="AddInventory-form__quantity-input"
                  name="quantity"
                  type="text"
                  required
                ></input>
              </>
            )}
            <br />
            <label className="AddInventory-form__label-titles">Warehouse</label>
            <br />
            <select
              className="AddInventory-form__warehouse-dropdown"
              name="warehouse_name"
            >
              <option value="warehouse-name" name="warehouse-name" required>
                Please Select
              </option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.warehouse_name}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </div>
          <div className="AddInventory-form__button-box">
            <button
              className="AddInventory-form__cancel-button"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button className="AddInventory-form__submit-button" type="submit">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddInventory;
