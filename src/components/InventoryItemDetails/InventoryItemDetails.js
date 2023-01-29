import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import editicon from "../../assets/icons/edit-24px.svg";
import arrowback from "../../assets/icons/arrow_back-24px.svg";

export default function InventoryItemDetails() {
  const [inventoryItem, setInventoryItem] = useState({});
  const params = useParams();
  let inventoryId = params.id;

  useEffect(() => {
    async function getInventoryItem() {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/inventories/${inventoryId}`
        );
        // console.log(data);
        setInventoryItem(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getInventoryItem();
  }, [inventoryId]);

  const applyTag = (status) => {
    if (status === "Out of Stock") {
      return "invitem__item-status--out";
    } else {
      return "invitem__item-status--in";
    }
  };

  if (!inventoryItem) {
    return <div>Loading item...</div>;
  }

  return (
    <section className="invitem-overlay">
      <section className="invitem">
        <div className="invitem__container">
          <div>
            <Link to={"/inventory"}>
              <img src={arrowback} alt="back" />
            </Link>
            <h1 className="invitem__container-header">
              {inventoryItem.item_name}
            </h1>
          </div>
          <Link to={`/inventory/editinventory/${inventoryItem.id}`}>
            <div className="invitem__container-form">
              <div className="invitem__container-back--mobile">
                <img
                  className="invitem__container-back--mobilepic"
                  src={editicon}
                  alt="back"
                />
              </div>
              <div className="invitem__container-back--tablet">
                <img
                  className="invitem__container-back--tabletpic"
                  src={editicon}
                  alt="back"
                />{" "}
                Edit
              </div>
            </div>
          </Link>
        </div>

        <div className="invitem__inventory">
          <div className="invitem__inventory--flex">
            <div className="invitem__inventory--details">
              <div>
                <h4 className="invitem__subheading">ITEM DESCRIPTION:</h4>
                <div className="invitem__item">
                  <p className="invitem__item-name">
                    {inventoryItem.description}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="invitem__subheading">CATEGORY:</h4>
                <p className="invitem__item-text">{inventoryItem.category}</p>
              </div>
            </div>
            <div className="invitem__inventory--details2">
              <div className="invitem__inventory--mobile">
                <h4 className="invitem__subheading">STATUS:</h4>
                <h4 className={applyTag(inventoryItem.status)}>
                  {inventoryItem.status}
                </h4>
              </div>
              <div className="invitem__inventory--mobile">
                <h4 className="invitem__subheading">QTY:</h4>
                <p className="invitem__item-text">{inventoryItem.quantity}</p>
              </div>
              <div>
                <h4 className="invitem__subheading">WAREHOUSE:</h4>
                <p className="invitem__item-text">
                  {inventoryItem.warehouse_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
