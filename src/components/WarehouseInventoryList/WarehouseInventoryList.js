import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import sorticon from "../../assets/icons/sort-24px.svg";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function WarehouseInventoryList() {
  const [warehouseInventory, setWarehouseInventory] = useState([]);
  const params = useParams();
  let warehouseId = params.id;

  useEffect(() => {
    async function getWarehouseInventory() {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/warehouses/${warehouseId}/inventories`
        );
        // console.log(data);
        setWarehouseInventory(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getWarehouseInventory();
  }, [warehouseId]);

  const applyTag = (status) => {
    if (status === "Out of Stock") {
      return "wil__item-status--out";
    } else {
      return "wil__item-status--in";
    }
  };

  if (!warehouseInventory) {
    return <div>Loading items...</div>;
  }

  return (
    <section className="wil-overlay">
      <section className="wil">
        <div className="wil__header">
          <div className="wil__header--flex">
            <h4 className="wil__header--title">INVENTORY ITEM</h4>
            <img className="wil__sort" src={sorticon} alt="sort" />
          </div>
          <div className="wil__header--flex">
            <h4 className="wil__header--title">CATEGORY</h4>
            <img className="wil__sort" src={sorticon} alt="sort" />
          </div>
          <div className="wil__header--flex">
            <h4 className="wil__header--title">STATUS</h4>
            <img className="wil__sort" src={sorticon} alt="sort" />
          </div>
          <div className="wil__header--flex">
            <h4 className="wil__header--title">QUANTITY</h4>
            <img className="wil__sort" src={sorticon} alt="sort" />
          </div>
          <div className="wil__header--flex">
            <h4 className="wil__header--title">ACTIONS</h4>
          </div>
        </div>

        {warehouseInventory.map((item) => (
          <div key={item.id} className="wil__inventory">
            <div className="wil__inventory--flex wiltab1">
              <div className="wil__inventory--details wiltab2">
                <Link to={`/inventory/${item.id}`}>
                  <div>
                    <h4 className="wil__subheading">INVENTORY ITEM</h4>
                    <div className="wil__item">
                      <h3 className="wil__item-name">{item.item_name}</h3>
                      <img src={chevron} alt="chevron" />
                    </div>
                  </div>
                </Link>
                <div>
                  <h4 className="wil__subheading">CATEGORY</h4>
                  <p className="wil__item-text">{item.category}</p>
                </div>
              </div>
              <div className="wil__inventory--details wiltab3">
                <div>
                  <h4 className="wil__subheading">STATUS</h4>
                  <h4 className={applyTag(item.status)}>{item.status}</h4>
                </div>
                <div>
                  <h4 className="wil__subheading">QTY</h4>
                  <p className="wil__item-text">{item.quantity}</p>
                </div>
              </div>
            </div>
            <div className="wil__inventory--flex">
              <Link to="">
                <img
                  className="wil__inventory--options"
                  src={deleteicon}
                  alt="delete"
                />
              </Link>
              <Link to={`/inventory/editinventory/${item.id}`}>
                <img
                  className="wil__inventory--options"
                  src={editicon}
                  alt="edit"
                />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
