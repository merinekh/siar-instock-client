import Button from "../Button/Button";

function DeleteModalInventoryItem({
  inventory,
  handleModalCloseClick,
  handleModalCancelClick,
  handleModalDeleteClick,
}) {
  return (
    <dialog className="delete-modal">
      <div className="delete-modal__inner">
        <button
          className="delete-modal__close"
          type="button"
          aria-label="close-delete-modal"
          onClick={handleModalCloseClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#13182C"
            />
          </svg>
        </button>

        <h2 className="delete-modal__title">
          Delete {inventory?.item_name} inventory item?
        </h2>

        <p className="delete-modal__message">
          Please confirm that you’d like to delete the {inventory?.item_name}{" "}
          from the list of inventory items. You won’t be able to undo this
          action.
        </p>

        <div className="delete-modal__buttons">
          <Button
            className="delete-modal__button"
            type="button"
            onClick={handleModalCancelClick}
          >
            Cancel
          </Button>
          <Button
            className="delete-modal__button delete-modal__button--error"
            type="button"
            onClick={handleModalDeleteClick}
          >
            Delete
          </Button>
        </div>
      </div>
    </dialog>
  );
}

export default DeleteModalInventoryItem;
