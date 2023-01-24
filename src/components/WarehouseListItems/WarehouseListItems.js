import "./WarehouseListItems.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
const WarehouseListItems = () => {
  const list = [
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
  ];

  const mappedList = list.map((element) => {
    return (
      <>
        <div className="warehouse">
          <div className="warehouse__container">
            <div>
              <h4>WAREHOUSE</h4>
              <p className="warehouse__location">{element.warehouse + '>'}</p>
            </div>
            <div>
              <h4>ADDRESS</h4>
              <p>{element.address}</p>
            </div>
          </div>
          <div className="warehouse__container">
            <div>
              <h4>CONTACT NAME</h4>
              <p> {element.name}</p>
            </div>
            <div>
              <h4>CONTACT INFORMATION</h4>
              <p>{element.phone_number}</p>
              <p>{element.email}</p>
            </div>
          </div>
        </div>
        <div className="warehouse__icons">
          <img
            className="warehouse__delete"
            src={deleteIcon}
            alt="delete"
          ></img>
          <img className="warehouse__edit" src={editIcon} alt="edit"></img>
        </div>
      </>
    );
  });

  return <div>{mappedList}</div>;
};
export default WarehouseListItems;
