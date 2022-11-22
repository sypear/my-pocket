import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import "./NewItemContainer.css";

const NewItemContainer = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    event.stopPropagation();

    setIsEditing(false);
  };

  const addItemHandler = (enteredData) => {
    const enteredItem = {
      ...enteredData,
      id: props.nextItemId,
    };
    props.onAddItem(enteredItem);

    setIsEditing(false);
  };

  return (
    <div
      className="new-item__container"
      style={{ cursor: !isEditing ? "pointer" : "auto" }}
    >
      {!isEditing && (
        <button
          className="fs-normal fw-bold add-new-item-button"
          onClick={startEditingHandler}
        >
          내역 추가하기
        </button>
      )}
      {isEditing && (
        <NewItem
          onAddItem={addItemHandler}
          onCancelAddItem={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewItemContainer;
