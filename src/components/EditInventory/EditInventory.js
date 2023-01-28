import { useEffect, useState } from "react";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

export default function EditInventory() {
  const [stockStatus, setStockStatus] = useState("in stock");
  const [quantity, setQuantity] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const BASE_URL = "localhost:8080/";
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1280);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form.item.value;
    const description = form.description.value;
    const category = form.category.value;
    const InStock = form.InStock.value;
    const OutOfStock = form.OutOfStock.value;
    const quantity = form.quantity.value;
    const warehouse = form.warehouse.value;

    if (
      !item ||
      !description ||
      !category ||
      !InStock ||
      !OutOfStock ||
      !quantity ||
      !warehouse
    ) {
      alert("Please fill out all fields");
      return;
    }

    //==================Update Inventory PUT request========================
    const [post, setPost] = React.useState(null);

    useEffect(() => {
      axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
      });
    }, []);

    axios
      .put(`${baseURL}/1`, {
        form,
        item,
        description,
        category,
        InStock,
        OutOfStock,
        quantity,
        warhouse,
      })
      .then((response) => {
        setPost(response.data);
      });
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
            Edit Inventory Item
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
              name="item"
              placeholder="Television"
              required
            ></input>
            <br />
            <label className="AddInventory-form__label-titles">
              Description
            </label>
            <br />
            <textarea
              className="AddInventory-form__description-input"
              name="description"
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
              required
            ></textarea>
            <br />
            <label className="AddInventory-form__label-titles">Category</label>
            <br />
            <select className="AddInventory-form__category-dropdown">
              <option value="category" name="category" required>
                Electronics
              </option>
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
                name="Stock"
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
                name="Stock"
                value="out of stock"
                checked={stockStatus === "out of stock"}
                onChange={(e) => setStockStatus(e.target.value)}
              ></input>
              Out Of Stock
            </label>
            <br />
            {((stockStatus === "in stock" && isDesktop) ||
              (stockStatus === "out of stock" && !isDesktop)) && (
              <>
                <label className="AddInventory-form__label-titles">
                  Quantity
                </label>
                <br />
                <input
                  className="AddInventory-form__quantity-input"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                ></input>
              </>
            )}
            <br />
            <label className="AddInventory-form__label-titles">Warehouse</label>
            <br />
            <select className="AddInventory-form__warehouse-dropdown">
              <option value="warehouse" name="warehouse" required>
                Manhattan
              </option>
            </select>
          </div>
        </div>
        <div className="AddInventory-form__button-box">
          <button className="AddInventory-form__cancel-button">Cancel</button>
          <button className="AddInventory-form__submit-button" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </>
  );
}
