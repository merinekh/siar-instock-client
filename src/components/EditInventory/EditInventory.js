import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  AppRoute,
  BASE_URL,
  ENDPOINT_INVENTORY,
  ENDPOINT_WAREHOUSES,
} from "../../const";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

export default function EditInventory() {
  const navigate = useNavigate();
  const [stockStatus, setStockStatus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategorie] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [inventories, setInventories] = useState([]);
  const params = useParams();
  let inventoryID = params.id;
  useEffect(() => {
    if (inventoryID) {
      axios
        .get(`${ENDPOINT_INVENTORY}/${inventoryID}`)
        .then(({ data }) => {
          setInventories(data);
          setQuantity(data.quantity);
          setStockStatus(data.status);
          setWarehouse(data.warehouse_name);
          setCategorie(data.category);
        })
        .catch((error) => console.log(error));
    }
  }, [inventoryID]);
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
        const list = response.data.map((item) => item.category);
        const category_list = new Set(list);
        setCategories(Array.from(category_list));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCancelButtonClick = () => {
    navigate(AppRoute.INVENTORY);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

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

    axios
      .put(`${BASE_URL}/api/inventories/${inventories.id}`, {
        item_name: event.target.item_name.value,
        description: event.target.description.value,
        category: event.target.category.value,
        status: event.target.status.value,
        quantity: event.target.quantity.value,
        warehouse_id: inventories.warehouse_id,
      })
      .then(() => {
        navigate(`/inventory/${inventories.id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form
        className="EditInventory-form warehouse-show container"
        onSubmit={handleSubmit}
      >
        <div className="EditInventory-form__header-div">
          <h1 className="EditInventory-form__header">
            <Link to="/">
              <img
                className="EditInventory-form__backarrow"
                src={BackArrow}
                alt="back arrow icon"
              />
            </Link>
            Edit Inventory Item
          </h1>
        </div>
        <div className="EditInventory-box">
          <div className="EditInventory-form__top-box">
            <h2 className="EditInventory-form__sub-titles">Item Details</h2>
            <label className="EditInventory-form__label-titles">
              Item Name
            </label>
            <br />
            <input
              className="EditInventory-form__item-name-input"
              type="text"
              name="item_name"
              defaultValue={inventories?.item_name}
              required
            ></input>
            <br />
            <label className="EditInventory-form__label-titles">
              Description
            </label>
            <br />
            <textarea
              className="EditInventory-form__description-input"
              type="textarea"
              name="description"
              defaultValue={inventories?.description}
              required
            ></textarea>
            <br />
            <label className="EditInventory-form__label-titles">Category</label>
            <br />
            <select
              className="EditInventory-form__category-dropdown"
              name="category"
            >
              <option defaultValue={inventories?.category} required>
                {inventories.category}
              </option>
              {categories.map((category, idx) => (
                <option key={idx} defaultValue={inventories?.category}>
                  {category}
                </option>
              ))}
            </select>
            <br />
          </div>

          <div className="EditInventory-form__bottom-box">
            <h2 className="EditInventory-form__sub-titles">
              Item Availability
            </h2>
            <label className="EditInventory-form__label-titles">Status</label>
            <br />
            <label className="EditInventory-form__instock">
              <input
                className="EditInventory-form__instock-button"
                type="radio"
                name="status"
                value="In Stock"
                checked={stockStatus === "In Stock"}
                onChange={(e) => {
                  setStockStatus(e.target.value);
                  setQuantity(inventories.quantity);
                  setWarehouse(inventories.warehouse_name);
                }}
              ></input>
              In Stock
            </label>
            <label className="EditInventory-form__stock">
              <input
                className="EditInventory__stock-button"
                type="radio"
                name="status"
                value="Out of Stock"
                checked={stockStatus === "Out of Stock"}
                onChange={(e) => {
                  setStockStatus(e.target.value);
                  setQuantity(0);

                  setWarehouse(inventories.warehouse_name);
                }}
              ></input>
              Out Of Stock
            </label>
            <br />
            {inventories.status === "In Stock" && (
              <>
                <label className="EditInventory-form__label-titles">
                  Quantity
                </label>
                <br />
                <input
                  className="EditInventory-form__quantity-input"
                  name="quantity"
                  type="number"
                  defaultValue={quantity}
                  onChange={(e) => {
                    setStockStatus(e.target.value);
                    setQuantity(e.target.value);

                    setWarehouse(inventories.warehouse_name);
                  }}
                  required
                ></input>
              </>
            )}
            <br />
            <label className="EditInventory-form__label-titles">
              Warehouse
            </label>
            <br />
            <select
              className="EditInventory-form__warehouse-dropdown"
              name="warehouse_name"
            >
              <option defaultValue={warehouse} name="warehouse" required>
                {warehouse}
              </option>
              {warehouses.map((warehouse) => (
                <option
                  key={warehouse.id}
                  defaultValue={warehouse?.warehouse_name}
                >
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </div>
          <div className="EditInventory-form__button-box">
            <button
              className="EditInventory-form__cancel-button"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button className="EditInventory-form__submit-button" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
