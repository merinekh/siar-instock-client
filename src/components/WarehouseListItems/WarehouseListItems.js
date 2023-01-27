import "./WarehouseListItems.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
const WarehouseListItems = ({ warehouses }) => {
  const mappedList = warehouses.map((element) => {
    return (
      <>
        <div className="warehouse">
          <div key={element.id} className="warehouse-container">
            {/* warehouse name */}
            <div className="warehouse-container__left">
              <div className="warehouse-container__name">
                <h4 className="warehouse-container__name__title">WAREHOUSE</h4>
                <div className="warehouse-container__name__chevron">
                  <p className="warehouse-container__name__details">
                    {element.warehouse_name}
                  </p>
                  <img
                    src={chevron}
                    className="warehouse-container__name__chevron__img"
                    alt="chevron"
                  ></img>
                </div>
              </div>

              {/* address */}
              <div className="warehouse-container__address">
                <h4 className="warehouse-container__address__title">ADDRESS</h4>
                <div className="warehouse-container__address__box">
                  <p className="warehouse-container__address__details">
                    {element.address}, {element.city}, {element.country}
                  </p>
                </div>
              </div>
            </div>
            {/* contact name */}
            <div className="warehouse-container__right">
              <div className="warehouse-container__contact">
                <h4 className="warehouse-container__contact__title">
                  CONTACT NAME
                </h4>
                <p className="warehouse-container__contact__details">
                  {element.contact_name}
                </p>
              </div>

              {/* contact information */}
              <div className="warehouse-container__info">
                <h4 className="warehouse-container__info__title">
                  CONTACT INFORMATION
                </h4>
                <p className="warehouse-container__info__number">
                  {element.contact_phone}
                </p>
                <p className="warehouse-container__info__email">
                  {element.contact_email}
                </p>
              </div>
            </div>
          </div>
          {/* icons */}
          <div className="warehouse__icons">
            <img
              className="warehouse__icons__delete"
              src={deleteIcon}
              alt="delete"
            ></img>
            <img
              className="warehouse__icons__edit"
              src={editIcon}
              alt="edit"
            ></img>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="warehouse__tablet-container">
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle">WAREHOUSE</h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle">ADDRESS</h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle">CONTACT NAME</h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle">CONTACT INFORMATION</h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle">ACTION</h4>
          <img src={sort} alt="sort"></img>
        </div>
      </div>
      {mappedList}
    </>
  );
};
export default WarehouseListItems;
