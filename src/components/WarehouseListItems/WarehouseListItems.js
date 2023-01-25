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
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
    // {
    //   warehouse: "Manhattan",
    //   address: "503 Broadway, New York, USA",
    //   name: "Parmin Aujla",
    //   phone_number: "+1 (629) 555-0129",
    //   email: "paujla@instock.com",
    // },
  ];

  const mappedList = list.map((element) => {
    return (
      <>
        <div className="warehouse">
          <div className="warehouse__wrapper">
            <div className="warehouse__container">
              <h4 className="warehouse__subtitle">WAREHOUSE</h4>
              <p className="warehouse__location">{`${element.warehouse} >`}</p>
            </div>
            <div className="warehouse__container warehouse__container--address">
              <h4 className="warehouse__subtitle">ADDRESS</h4>
                <p className="warehouse__container__address__details">
                  {element.address}
                </p>
            </div>
          </div>
          <div className="warehouse__wrapper">
            <div className="warehouse__container">
              <h4 className="warehouse__subtitle">CONTACT NAME</h4>
              <p> {element.name}</p>
            </div>
            <div className="warehouse__container">
              <div className="warehouse__contact">
                <h4 className="warehouse__subtitle">CONTACT INFORMATION</h4>
                <p>{element.phone_number}</p>
                <p>{element.email}</p>
              </div>
            </div>
          </div>
          <div className="warehouse__icons__tablet">
            <img
              className="warehouse__icons__tablet--delete"
              src={deleteIcon}
              alt="delete"
            ></img>
            <img className="warehouse__icons__tablet--edit" src={editIcon} alt="edit"></img>
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

  return (
    <>
      <div className="warehouse__tablet">
        <h4 className="warehouse__tablet__subtitle">WAREHOUSE</h4>
        <h4 className="warehouse__tablet__subtitle">ADDRESS</h4>
        <h4 className="warehouse__tablet__subtitle">CONTACT NAME</h4>
        <h4 className="warehouse__tablet__subtitle">CONTACT INFORMATION</h4>
        <h4 className="warehouse__tablet__subtitle">ACTION</h4>
      </div>
      {mappedList}
    </>
  );
};
export default WarehouseListItems;
