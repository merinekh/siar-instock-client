import React from "react";

function AddInventory() {
  return (
    <form className="AddInventory-form">
      <div className="AddInventory-form__top-box">
        <h1>Add New Inventory Item</h1>
        <hr className="form-divider" />
        <h2>Item Details</h2>
        <label className="AddInventory-form__label">Item Name</label>
        <br />
        <input
          className="AddInventory-form__item-name-input"
          type="text"
          name="item-name"
          placeholder="Item Name"
          required
        ></input>
        <br />
        <label className="AddInventory-form__label">Description</label>
        <br />
        <input
          className="AddInventory-form__description-input"
          type="textarea"
          name="description"
          placeholder="Description"
          required
        ></input>
        <br />
        <label className="AddInventory-form__label">Category</label>
        <br />
        <select
          placeholder="Please Select"
          className="AddInventory-form__category-dropdown"
        >
          <option value="category">category</option>
        </select>
        <br />
        <hr />
        <h2>Item Availability</h2>
        <label className="AddInventory-form__label">Status</label>
        <br />
        <label className="intock">
          <input type="radio" name="InStock"></input>In Stock
        </label>
        <label className="intock">
          <input type="radio" name="InStock"></input>Out Of Stock
        </label>
        <br />
        <label className="AddInventory-form__label">Quantity</label>
        <br />
        <input
          className="AddInventory-form__quantity-input"
          type="text"
          name="quantity"
          required
        ></input>
        <br />
        <select
          placeholder="Please Select"
          className="AddInventory-form__warehouse-dropdown"
        >
          <option value="category">warehouse</option>
        </select>
      </div>
      <div className="AddInventory-form__bottom-box">
        <button>Cancel</button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default AddInventory;
