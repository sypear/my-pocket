import React, { useState } from "react";

import NewItemForm from "./NewItemForm";

import "./NewItemContainer.css";
import NewItem from "./NewItem";

const NewItemContainer = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = (event) => {
        event.stopPropagation();

        setIsEditing(true);
    };

    const stopEditingHandler = (event) => {
        event.stopPropagation();

        setIsEditing(false);
    };

    const addItemHandler = (enteredData) => {
        const enteredItem = {
            ...enteredData,
            id: props.nextItemId
        };
        props.onAddItem(enteredItem);

        setIsEditing(false);
    };

    return (
        <div className="new-item-container" style={{textAlign: !isEditing ? 'center' : 'left', cursor: !isEditing ? 'pointer' : 'auto'}} onClick={startEditingHandler}>
            <NewItem isEditing={isEditing} onAddItem={addItemHandler} onCancelAddItem={stopEditingHandler} />
        </div>
    );
};

export default NewItemContainer;