import React from "react";
import Pocket from "./Pocket";
import "./PocketContainer.css";

const PocketContainer = (props) => {
    const deleteItemHandler = (selectedItemId) => {
        props.onDeleteItem(selectedItemId);
    };

    return (
        <div className="pocket-container">
            <Pocket items={props.items} onDeleteItem={deleteItemHandler} isAddItem={props.isAddItem} />
        </div>
    );
};

export default PocketContainer;