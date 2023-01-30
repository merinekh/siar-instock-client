import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { AppRoute, ENDPOINT_INVENTORY, ENDPOINT_WAREHOUSES } from "../../const";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

function AddInventory() {
  const navigate = useNavigate();
  const [stockStatus, setStockStatus] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1279);
  const [warehouses, setWarehouses] = useState([]);
  //const [inventories, setInventories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT_WAREHOUSES)
      .then((response) => setWarehouses(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(ENDPOINT_INVENTORY)
      .then((response) => {
        //setInventories(response.data);
        const list = response.data.map((item) => item.category);
        const category_list = new Set(list);
        setCategories(Array.from(category_list));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1279);
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
            <Link to="/">
              <img
                className="AddInventory-form__backarrow"
                src={BackArrow}
                alt="back arrow icon"
              />
            </Link>
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
            <textarea
              className="AddInventory-form__description-input"
              type="textarea"
              name="description"
              placeholder="Please enter a brief description"
              cols="40"
              rows="5"
              required
            ></textarea>
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
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
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
            {((stockStatus === "out of stock" && !isDesktop) ||
              (stockStatus === "" && !isDesktop) ||
              (stockStatus === "in stock" && isDesktop)) && (
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
