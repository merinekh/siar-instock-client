
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
function EditAddWarehouseForm({ page }) {
  let submitButton = "Save";
  if (page === "Add") {
    submitButton = "+ Add Warehouse";
  }
  const preventDef = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="warehouseform">
        <div className="warehouseform-header">
          <a href="/" className="warehouseform-header-link">
            <img
              src={arrowBack}
              alt="arrow_back"
              className="warehouseform-header__icon"
            />
          </a>
          <h1 className="warehouseform-header__text">{page} Warehouse</h1>
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
                  placeholder="Warehouse Name"
                  required
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">
                  Street Address
                </p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">City</p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                  placeholder="City"
                  required
                />
              </div>
              <div className="warehouseform-main-warehouse-input">
                <p className="warehouseform-main-warehouse__subtitle">
                  Country
                </p>
                <input
                  type="text"
                  className="warehouseform-main-warehouse__input"
                  placeholder="Country"
                  required
                />
              </div>
              <hr className="warehouseform-main-warehouse__line" />
            </div>
          </div>

          <div className="warehouseform-main-contact">
            <h2 className="warehouseform-main-contact__title">
              Contact Details
            </h2>

            <div className="warehouseform-main-contact-inputs">
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">
                  Contact Name
                </p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                  placeholder="Contact Name"
                  required
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">Position</p>
                <input
                  type="text"
                  className="warehouseform-main-contact__input"
                  placeholder="Position"
                  required
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">
                  Phone Number
                </p>
                <input
                  type="tel"
                  className="warehouseform-main-contact__input"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="warehouseform-main-contact-input">
                <p className="warehouseform-main-contact__subtitle">Email</p>
                <input
                  type="email"
                  className="warehouseform-main-contact__input"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="warehouseform-buttons">
          <button className="warehouseform-buttons__cancel">Cancel</button>
          <button
            type="submit"
            className="warehouseform-buttons__save"
            onSubmit={preventDef}
          >
            {submitButton}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditAddWarehouseForm;