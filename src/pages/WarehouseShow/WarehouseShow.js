import { generatePath, useParams } from "react-router";
import { Link } from "react-router-dom";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import arrowBack from "../../assets/icons/arrow_back-24px.svg"
import { AppRoute } from "../../const";

function WarehouseShow() {
  const params = useParams();
  const warehouseID = params.id;

  return (
    <div className="warehouse-show">
      {warehouseID
        ? 
        <h1 className="warehouse-show__title">
          <Link className="warehouse-show__link" 
            to={generatePath(AppRoute.WAREHOUSE_INVENTORY, { id: warehouseID })}
          >
            <img className="warehouse-show__icon"
              src={arrowBack}
              width={24}
              height={24}
              alt="To warehouse inventory"
            />
          </Link>
          Edit Warehouse
        </h1>
        : 
        <h1 className="warehouse-show__title">
          <Link className="warehouse-show__link" to={AppRoute.WAREHOUSE}>
            <img className="warehouse-show__icon"
              src={arrowBack}
              width={24}
              height={24}
              alt="Back to warehouses"
            />
          </Link>
          Add New Warehouse
        </h1>
      }

      <WarehouseForm warehouseID={warehouseID} />
    </div>
  );
}

export default WarehouseShow;
