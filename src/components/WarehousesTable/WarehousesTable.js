import { generatePath, Link } from "react-router-dom";
import { AppRoute } from "../../const";
import Button from "../Button/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import SortIcon from "../Icons/SortIcon";
import SearchForm from "../SearchForm/SearchForm";
import TextLink from "../TextLink/TextLink";

function WarehousesTable({ warehouses, handleDeleteButton }) {
  return (
    <table className="warehouses-table">
      <caption className="warehouses-table__caption">
        <h1 className="warehouses-table__title">Warehouses</h1>

        <SearchForm />
        
        <Button to={AppRoute.WAREHOUSE_ADD}>+ Add New Warehouse</Button>
      </caption>

      <thead className="warehouses-table__head">
        <tr>
          <th>Warehouse <SortIcon /></th>
          <th>Address <SortIcon /></th>
          <th>Contact name <SortIcon /></th>
          <th>Contact information <SortIcon/></th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody className="warehouses-table__body">
        {warehouses.map((warehouse) => (
          <tr key={warehouse.id}>
            <td title="Warehouse">
              <TextLink to={generatePath(AppRoute.WAREHOUSE_INVENTORY, { id: warehouse.id })}>
                {warehouse.warehouse_name}
              </TextLink>
            </td>
            <td title="Address">{warehouse.address}</td>
            <td title="Contact name">{warehouse.contact_name}</td>
            <td title="Contact information">
              <div>{warehouse.contact_phone}</div>
              <div>{warehouse.contact_email}</div>
            </td>
            <td>
              <button className="warehouses-table__button"
                type="button"
                aria-label="Delete item"
                onClick={handleDeleteButton(warehouse)}
              >
                <DeleteIcon />
              </button>
              <Link 
                className="warehouses-table__button" 
                aria-label="Edit item"
                to={generatePath(AppRoute.WAREHOUSE_EDIT, {id: warehouse.id})}
              >
                <EditIcon />
              </Link>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

export default WarehousesTable;
