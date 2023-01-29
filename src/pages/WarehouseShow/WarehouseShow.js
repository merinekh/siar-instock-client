import { generatePath, useParams } from "react-router";
import { Link } from "react-router-dom";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import { AppRoute } from "../../const";
import BackArrowIcon from "../../components/Icons/BackArrowIcon";

function WarehouseShow() {
  const params = useParams();
  const warehouseID = params.id;

  return (
    <main className="warehouse-show container">
      {warehouseID
        ?
        <h1 className="warehouse-show__title">
          <Link className="warehouse-show__link" 
            to={generatePath(AppRoute.WAREHOUSE_INVENTORY, { id: warehouseID })}
          >
          <BackArrowIcon/>
          </Link>
          Edit Warehouse
        </h1>
        : 
        <h1 className="warehouse-show__title">
          <Link className="warehouse-show__link" to={AppRoute.WAREHOUSE}>
          <BackArrowIcon/>
          </Link>
          Add New Warehouse
        </h1>
      }

      <WarehouseForm warehouseID={warehouseID} />
    </main>
  );
}

export default WarehouseShow;



