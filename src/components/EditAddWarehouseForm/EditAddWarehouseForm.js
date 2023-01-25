import React from "react";
import ".EditAddWarehouseForm.scss";
function EditAddWarehouseForm() {
  return (
    <>
      <div className="warehouseform">
        <div className="warehouseform-header">
          <img src="" alt="" className="warehouseform-header__icon" />
          <h1 className="warehouseform-header__text">Edit Warehouse</h1>
        </div>

        <div className="warehouseform-main">
          <div className="warehouseform-main-warehouse">
            <h2 className="warehouseform-main-warehouse__title">
              Warehouse Details
            </h2>

            <div className="warehouseform-main-warehouse-inputs">
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">
                  Warehouse Name
                </p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">
                  Street Address
                </p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">City</p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">
                  Country
                </p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                />
              </div>
            </div>
          </div>

          <div className="warehouseform-main-contact">
            <h2 className="warehouseform-main-contact__title">
              Contact Details
            </h2>

            <div className="warehouseform-main-contact-inputs">
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">
                  Warehouse Name
                </p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">
                  Street Address
                </p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">City</p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">Country</p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditAddWarehouseForm;
