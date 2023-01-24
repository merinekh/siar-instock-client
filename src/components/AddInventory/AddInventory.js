import React from "react";

function AddInventory() {
  return (
    <form className="AddInventory-form">
      <div className="AddInventory-form__top-box">
        <h1>Add New Inventory Item</h1>
        <hr className="form-divider" />
        <label className="AddInventory-form__input-label">Item Name</label>
        <input
          className="AddInventory-form__input"
          type="text"
          name="item-name"
          placeholder="Item Name"
          required
        ></input>
      </div>
    </form>
  );
}

export default AddInventory;
