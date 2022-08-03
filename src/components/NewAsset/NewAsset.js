import React, { useState } from "react";

import NewAssetForm from "./NewAssetForm/NewAssetForm";

import "./NewAsset.css";

const NewAsset = () => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-asset" style={{textAlign: !isEditing ? 'center' : 'left', cursor: !isEditing ? 'pointer' : 'auto'}}>
            {
                !isEditing &&
                <div className="fs-normal fw-bold new-asset__create-btn" onClick={startEditingHandler}>
                    내역 추가하기
                </div>
            }
            {
                isEditing &&
                <div className="new-asset__create">
                    <h1 className="fs-normal">내역 추가</h1>
                    <NewAssetForm onCancle={stopEditingHandler} />
                </div>
            }
        </div>
    );
};

export default NewAsset;