import React from "react";
import "../AddInventory/AddInventory.scss";

function AddInventory() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="AddInventory-box">
      <form className="AddInventory-form">
        <h1 className="AddInventory-form__header">Add New Inventory Item</h1>
        <hr />
        <div className="AddInventory-form__top-box">
          <h2 className="AddInventory-form__sub-titles">Item Details</h2>
          <label className="AddInventory-form__label-titles">Item Name</label>
          <br />
          <input
            className="AddInventory-form__item-name-input"
            type="text"
            name="item-name"
            placeholder="Item Name"
            required
          ></input>
          <br />
          <label className="AddInventory-form__label-titles">Description</label>
          <br />
          <input
            className="AddInventory-form__description-input"
            type="textarea"
            name="description"
            placeholder="Description"
            required
          ></input>
          <br />
          <label className="AddInventory-form__label-titles">Category</label>
          <br />
          <select className="AddInventory-form__category-dropdown">
            <option value="category">Please Select</option>
          </select>
          <br />
        </div>
        <hr />
        <div className="AddInventory-form__bottom-box">
          <h2 className="AddInventory-form__sub-titles">Item Availability</h2>
          <label className="AddInventory-form__label-titles">Status</label>
          <br />
          <label className="AddInventory-form__instock">
            <input type="radio" name="InStock"></input>In Stock
          </label>
          <label className="AddInventory-form__instock">
            <input
              className="AddInventory-form__instock"
              type="radio"
              name="InStock"
            ></input>
            Out Of Stock
          </label>
          <br />
          <label className="AddInventory-form__label-titles">Quantity</label>
          <br />
          <input
            className="AddInventory-form__quantity-input"
            type="text"
            name="quantity"
            required
          ></input>
          <br />
          <label className="AddInventory-form__label-titles">Warehouse</label>
          <br />
          <select className="AddInventory-form__warehouse-dropdown">
            <option value="category">Please Select</option>
          </select>
        </div>
        <div className="AddInventory-form__button-box">
          <button className="AddInventory-form__cancel-button">Cancel</button>
          <button className="AddInventory-form__submit-button" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddInventory;
