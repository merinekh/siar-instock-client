// import { Link } from "react-router-dom";
import WarehouseListItems from "../WarehouseListItems/WarehouseListItems";

const WarehouseList = ({ warehouses, handleDeleteButton }) => {
  return (
    <section className="section">
      <div className="warehouses">
        <div className="warehouses__overlay">
          <div className="warehouses__wrapper">
            <div className="warehouses__title">
              <h1>Warehouses</h1>
            </div>
            <form className="warehouses__form">
              <label>
                <input
                  type="text"
                  placeholder="Search.."
                  className="warehouses__input"
                ></input>
              </label>
              <label>
                <input
                  type="button"
                  value="+Add New Warehouse"
                  className="warehouses__button"
                />
              </label>
            </form>
          </div>
          <WarehouseListItems
            warehouses={warehouses}
            handleDeleteButton={handleDeleteButton}
          />
        </div>
      </div>
    </section>
  );
};
export default WarehouseList;
