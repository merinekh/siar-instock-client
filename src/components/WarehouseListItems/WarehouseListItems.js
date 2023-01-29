import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

const WarehouseListItems = ({ warehouses, handleDeleteButton }) => {
  const mappedList = warehouses.map((element) => {
    return (
      <div className="warehouse" key={element.id}>
        <div className="warehouse-container">
          <div className="warehouse-container__left">
            <div className="warehouse-container__name">
              <h4 className="warehouse-container__name__title warehouse-container__title">
                WAREHOUSE
              </h4>
              <div className="warehouse-container__name__chevron">
                <Link
                  to={`/warehouse/${element.id}`}
                  classname="warehouse-container__name__link"
                >
                  <p className="warehouse-container__name__details warehouse-container__para ">
                    {element.warehouse_name}
                  </p>
                  <img
                    src={chevron}
                    className="warehouse-container__name__chevron__img"
                    alt="chevron"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="warehouse-container__address">
              <h4 className="warehouse-container__address__title warehouse-container__title">
                ADDRESS
              </h4>
              <div className="warehouse-container__address__box">
                <p className="warehouse-container__address__details warehouse-container__para">
                  {element.address}, {element.city}, {element.country}
                </p>
              </div>
            </div>
          </div>
          <div className="warehouse-container__right">
            <div className="warehouse-container__contact">
              <h4 className="warehouse-container__contact__title warehouse-container__title">
                CONTACT NAME
              </h4>
              <p className="warehouse-container__contact__details warehouse-container__para">
                {element.contact_name}
              </p>
            </div>
            <div className="warehouse-container__info">
              <h4 className="warehouse-container__info__title warehouse-container__title">
                CONTACT INFORMATION
              </h4>
              <p className="warehouse-container__info__number warehouse-container__para">
                {element.contact_phone}
              </p>
              <p className="warehouse-container__info__email warehouse-container__para">
                {element.contact_email}
              </p>
            </div>
          </div>
        </div>
        <div className="warehouse__icons">
          <img
            className="warehouse__icons__delete"
            src={deleteIcon}
            alt="delete"
            onClick={handleDeleteButton(element)}
          ></img>
          <img
            className="warehouse__icons__edit"
            src={editIcon}
            alt="edit"
          ></img>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="warehouse-tablet">
        <div className="warehouse-tablet__block warehouse-tablet__block--warehouse">
          <h4 className="warehouse-container__title ">WAREHOUSE</h4>
          <img src={sort} className="warehouse-tablet__img" alt="sort"></img>
        </div>

        <div className="warehouse-tablet__block warehouse-tablet__block--address">
          <h4 className="warehouse-container__title">ADDRESS</h4>
          <img src={sort} className="warehouse-tablet__img" alt="sort"></img>
        </div>

        <div className="warehouse-tablet__block warehouse-tablet__block--contact">
          <h4 className="warehouse-container__title ">CONTACT NAME</h4>
          <img src={sort} className="warehouse-tablet__img" alt="sort"></img>
        </div>

        <div className="warehouse-tablet__block warehouse-tablet__block--info">
          <h4 className="warehouse-container__title">CONTACT INFORMATION</h4>
          <img src={sort} className="warehouse-tablet__img" alt="sort"></img>
        </div>

        <div className="warehouse-tablet__block warehouse-tablet__block--action">
          <h4 className="warehouse-container__title">ACTION</h4>
          <img src={sort} className="warehouse-tablet__img" alt="sort"></img>
        </div>
      </div>
      {mappedList}
    </>
  );
};
export default WarehouseListItems;
