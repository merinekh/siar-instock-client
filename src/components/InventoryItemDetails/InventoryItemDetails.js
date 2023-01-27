import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryItemDetails.scss";
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
    <section className="inv">
      <div className="invitem__container">
        <div>
          <img src={arrowback} alt="back" />
          <h1 className="invitem__container-header">
            {inventoryItem.item_name}
          </h1>
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
                <p className="invitem__item-name">
                  {inventoryItem.description}
                </p>
              </div>
            </div>
            <div>
              <h4 className="invitem__subheading">CATEGORY</h4>
              <p className="invitem__item-text">{inventoryItem.category}</p>
            </div>
          </div>
          <div className="invitem__inventory--details2">
            <div className="invitem__inventory--mobile">
              <h4 className="invitem__subheading">STATUS</h4>
              <h4 className={applyTag(inventoryItem.status)}>
                {inventoryItem.status}
              </h4>
            </div>
            <div className="invitem__inventory--mobile">
              <h4 className="invitem__subheading">QTY</h4>
              <p className="invitem__item-text">{inventoryItem.quantity}</p>
            </div>
            <div>
              <h4 className="invitem__subheading">WAREHOUSE</h4>
              <p className="invitem__item-text">
                {inventoryItem.warehouse_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
