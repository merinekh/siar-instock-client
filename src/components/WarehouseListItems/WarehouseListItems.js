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
          {/* warehouse name */}
          <div className="warehouse-container__left">
            <div className="warehouse-container__name">
              <h4 className="warehouse-container__name__title warehouse-container__title">
                WAREHOUSE
              </h4>
              <div className="warehouse-container__name__chevron">

                <Link to={`/warehouse/${element.id}`}>
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

            {/* <div className="warehouse__empty-1"></div> */}

            {/* address */}
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

          {/* <div className="warehouse__empty-2"></div> */}

          {/* contact name */}
          <div className="warehouse-container__right">
            <div className="warehouse-container__contact">
              <h4 className="warehouse-container__contact__title warehouse-container__title">
                CONTACT NAME
              </h4>
              <p className="warehouse-container__contact__details warehouse-container__para">
                {element.contact_name}
              </p>
            </div>

            {/* <div className="warehouse__empty-3"></div> */}

            {/* contact information */}
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

        {/* <div className="warehouse__empty-4"></div> */}

        {/* icons */}
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
      <div className="warehouse__tablet-container">
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle warehouse-container__title">
            WAREHOUSE
          </h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle warehouse-container__title">
            ADDRESS
          </h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle warehouse-container__title ">
            CONTACT NAME
          </h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle warehouse-container__title">
            CONTACT INFORMATION
          </h4>
          <img src={sort} alt="sort"></img>
        </div>
        <div className="warehouse__tablet-container__indiv">
          <h4 className="warehouse__tablet-container__subtitle warehouse-container__title">
            ACTION
          </h4>
          <img src={sort} alt="sort"></img>
        </div>
      </div>
      {mappedList}
    </>
  );
};
export default WarehouseListItems;
