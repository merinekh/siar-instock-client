// import { Link } from "react-router-dom";
import WarehouseListItems from "../WarehouseListItems/WarehouseListItems";

const WarehouseList = ({warehouses, handleDeleteButton}) => {
 
  return (
    <section className="overlay">
      <div className="warehouses">
        <div className="warehouses__tablet">
          <h1 className="warehouses__title">Warehouses</h1>

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
        <WarehouseListItems warehouses={warehouses} handleDeleteButton={handleDeleteButton}/>
      </div>
    </section>
  );
};
export default WarehouseList;
