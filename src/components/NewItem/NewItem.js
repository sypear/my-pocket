import React from "react";
import NewItemForm from "./NewItemForm";
import "./NewItem.css";

const NewItem = () => {
  return (
    <div className="new-item">
      <h1 className="fs-normal">내역 추가</h1>
      <NewItemForm />
    </div>
  );
};

export default NewItem;
