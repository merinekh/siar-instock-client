import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import sorticon from "../../assets/icons/sort-24px.svg";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteModalInventoryItem from "../../components/DeleteModalInventoryItem/DeleteModalInventoryItem";
export default function Inventory() {
  const [allInventory, setAllInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    async function getAllInventory() {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/inventories"
        );
        setAllInventory(data);
        // console.log(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getAllInventory();
  }, []);

  const handleDeleteButton = (inventory) => () => setSelectedItem(inventory);

  const handleModalCloseClick = () => setSelectedItem({});
  const handleModalCancelClick = () => setSelectedItem({});
  const handleModalDeleteClick = () => {
    axios
      .delete(`http://localhost:8080/api/inventories/${selectedItem.id}`)
      .then((response) => {
        const itemId = allInventory.filter(
          (item) => item.id !== selectedItem.id
        );
        setSelectedItem({});
        setAllInventory(itemId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const applyTag = (status) => {
    if (status === "Out of Stock") {
      return "inv__item-status--out";
    } else {
      return "inv__item-status--in";
    }
  };

  if (!allInventory) {
    return <h4>Page is loading...</h4>;
  }

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

      {allInventory.map((item) => (
        <div key={item.id} className="inv__inventory">
          <div className="inv__inventory--flex">
            <div className="inv__inventory--details">
              <Link to={`/inventory/${item.id}`}>
                <div className="inv__inventory--details-link">
                  <h4 className="inv__subheading">INVENTORY ITEM</h4>
                  <div className="inv__item">
                    <h3 className="inv__item-name">{item.item_name}</h3>
                    <img src={chevron} alt="chevron" />
                  </div>
                </div>
              </Link>
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
                <p className="inv__item-text">{item.warehouse_name}</p>
              </div>
            </div>
          </div>
          <div className="inv__inventory--flex">
            <img
              className="inv__inventory--options"
              src={deleteicon}
              alt="delete"
              onClick={handleDeleteButton(item)}
            />
            <img
              className="inv__inventory--options"
              src={editicon}
              alt="edit"
            />
          </div>
        </div>
      ))}
      {selectedItem.id && (
        <DeleteModalInventoryItem
          inventory={selectedItem}
          handleModalCloseClick={handleModalCloseClick}
          handleModalCancelClick={handleModalCancelClick}
          handleModalDeleteClick={handleModalDeleteClick}
        />
      )}
    </section>
  );
}
