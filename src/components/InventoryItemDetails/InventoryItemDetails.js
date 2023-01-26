import "./InventoryItemDetails.scss";
// import sorticon from "../../assets/icons/sort-24px.svg";
// import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
// import chevron from "../../assets/icons/chevron_right-24px.svg";
import arrowback from "../../assets/icons/arrow_back-24px.svg";

export default function InventoryItemDetails() {
  //   const dummyDetails = [
  //     {
  //       id: 11,
  //       warehouse: "Washington",
  //       item_name: "Monitor",
  //       description: "This is a generic description for the selected item.",
  //       category: "Electronics",
  //       status: "Out of Stock",
  //       quantity: 0,
  //     },
  //   ];

  const dummyItem = {
    id: 11,
    warehouse: "Washington",
    item_name: "Monitor",
    description: "This is a generic description for the selected item.",
    category: "Electronics",
    status: "Out of Stock",
    quantity: 0,
  };

  const applyTag = (status) => {
    if (status === "Out of Stock") {
      return "invitem__item-status--out";
    } else {
      return "invitem__item-status--in";
    }
  };

  return (
    <section className="inv">
      <div className="invitem__container">
        <div>
          <img src={arrowback} alt="back" />
          <h1 className="invitem__container-header">{dummyItem.item_name}</h1>
        </div>
        <form className="invitem__container-form">
          <button className="invitem__container-back--mobile">
            <img src={editicon} alt="back" />
          </button>
          <button className="invitem__container-back--tablet">
            <img src={editicon} alt="back" /> Edit
          </button>
        </form>
      </div>

      <div className="invitem__inventory">
        <div className="invitem__inventory--flex">
          <div className="invitem__inventory--details">
            <div>
              <h4 className="invitem__subheading">ITEM DESCRIPTION</h4>
              <div className="invitem__item">
                <p className="invitem__item-name">{dummyItem.description}</p>
              </div>
            </div>
            <div>
              <h4 className="invitem__subheading">CATEGORY</h4>
              <p className="invitem__item-text">{dummyItem.category}</p>
            </div>
          </div>
          <div className="invitem__inventory--details2">
            <div className="invitem__inventory--mobile">
              <h4 className="invitem__subheading">STATUS</h4>
              <h4 className={applyTag(dummyItem.status)}>
                {dummyItem.status.toUpperCase()}
              </h4>
            </div>
            <div className="invitem__inventory--mobile">
              <h4 className="invitem__subheading">QTY</h4>
              <p className="invitem__item-text">{dummyItem.quantity}</p>
            </div>
            <div>
              <h4 className="invitem__subheading">WAREHOUSE</h4>
              <p className="invitem__item-text">{dummyItem.warehouse}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
