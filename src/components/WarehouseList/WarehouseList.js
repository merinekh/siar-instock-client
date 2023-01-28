import { Link } from "react-router-dom";
import WareHouseDetails from "../WareHouseDetails/WarehouseDetails";
import WarehouseListItems from "../WarehouseListItems/WarehouseListItems";
import "./WarehouseList.scss";
const WarehouseList = ({ warehouses }) => {
  return (
    <Link to="/">
      <section className="warehouses">
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
                value="+Add A New Warehouse"
                className="warehouses__button"
              ></input>
            </label>
          </form>
        </div>
        <WareHouseDetails />
        <WarehouseListItems warehouses={warehouses} />
      </section>
    </Link>
  );
};
export default WarehouseList;
