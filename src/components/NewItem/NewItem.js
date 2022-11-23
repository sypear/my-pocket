import React from "react";
import NewItemForm from "./NewItemForm";
import "./NewItem.css";

const NewItem = (props) => {
  const stopEditingHandler = (event) => {
    props.onCancelAddItem(event);
  };

  return (
    <div className="new-item">
      <h1 className="fs-normal">내역 추가</h1>
      <NewItemForm onCancelAddItem={stopEditingHandler} />
    </div>
  );
};

export default NewItem;
