import "./Inventory.scss";
import sorticon from "../../assets/icons/sort-24px.svg";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function Inventory() {
  const dummyDetails = [
    {
      id: 11,
      warehouse: "Washington",
      item_name: "Monitor",
      description: "This is a generic description for the selected item.",
      category: "Electronics",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 12,
      warehouse: "Manhattan",
      item_name: "Backpack",
      description: "This is a another generic description for the other item.",
      category: "Gear",
      status: "In Stock",
      quantity: 100,
    },
  ];

  //   const dummyWarehouse = {
  //     id: 1,
  //     warehouse_name: "Manhattan",
  //     address: "503 Broadway",
  //     city: "New York",
  //     country: "USA",
  //     contact_name: "Parmin Aujla",
  //     contact_position: "Warehouse Manager",
  //     contact_phone: "+1 (646) 123-1234",
  //     contact_email: "paujla@instock.com",
  //   };

  const applyTag = (status) => {
    if (status === "Out of Stock") {
      return "inv__item-status--out";
    } else {
      return "inv__item-status--in";
    }
  };

  return (
    <section className="inv">
      <div className="inv__container">
        <h1 className="inv__container-header">Inventory</h1>
        <form className="inv__container-form">
          <input
            className="inv__container-search"
            type="text"
            placeholder="Search..."
          />
          <button className="inv__container-add">+ Add New Item</button>
        </form>
      </div>
      <div className="inv__header">
        <div className="inv__header--flex">
          <h4 className="inv__header--title">INVENTORY ITEM</h4>
          <img className="inv__sort" src={sorticon} alt="sort" />
        </div>
        <div className="inv__header--flex">
          <h4 className="inv__header--title">CATEGORY</h4>
          <img className="inv__sort" src={sorticon} alt="sort" />
        </div>
        <div className="inv__header--flex">
          <h4 className="inv__header--title">STATUS</h4>
          <img className="inv__sort" src={sorticon} alt="sort" />
        </div>
        <div className="inv__header--flex">
          <h4 className="inv__header--title">QUANTITY</h4>
          <img className="inv__sort" src={sorticon} alt="sort" />
        </div>
        <div className="inv__header--flex">
          <h4 className="inv__header--title">WAREHOUSE</h4>
          <img className="inv__sort" src={sorticon} alt="sort" />
        </div>
        <div className="inv__header--flex">
          <h4 className="inv__header--title">ACTIONS</h4>
        </div>
      </div>

      {dummyDetails.map((item) => (
        <div className="inv__inventory">
          <div className="inv__inventory--flex">
            <div className="inv__inventory--details">
              <div>
                <h4 className="inv__subheading">INVENTORY ITEM</h4>
                <div className="inv__item">
                  <h3 className="inv__item-name">{item.item_name}</h3>
                  <img src={chevron} alt="chevron" />
                </div>
              </div>
              <div>
                <h4 className="inv__subheading">CATEGORY</h4>
                <p className="inv__item-text">{item.category}</p>
              </div>
            </div>
            <div className="inv__inventory--details">
              <div>
                <h4 className="inv__subheading">STATUS</h4>
                <h4 className={applyTag(item.status)}>
                  {item.status.toUpperCase()}
                </h4>
              </div>
              <div>
                <h4 className="inv__subheading">QTY</h4>
                <p className="inv__item-text">{item.quantity}</p>
              </div>
              <div>
                <h4 className="inv__subheading">WAREHOUSE</h4>
                <p className="inv__item-text">{item.warehouse}</p>
              </div>
            </div>
          </div>
          <div className="inv__inventory--flex">
            <img
              className="inv__inventory--options"
              src={deleteicon}
              alt="delete"
            />
            <img
              className="inv__inventory--options"
              src={editicon}
              alt="edit"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
