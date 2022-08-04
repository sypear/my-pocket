import React from "react";

import AssetItem from "./AssetItem/AssetItem";

import "./AssetItems.css";

const AssetItems = (props) => {
    if (props.assets.length === 0) {
        return (
            <div className="items">
                <span className="fw-light fs-normal" style={{display: "block", textAlign: "center"}}>입력된 데이터가 없어요 🙅</span>
            </div>
        );
    }

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="items">
            {
                props.assets.map(asset => (
                    <AssetItem
                        key={asset.id}
                        id={asset.id}
                        date={asset.date}
                        title={asset.title}
                        amount={asset.amount}
                        amountType={asset.amount_type}
                        onRemoveAssetData={removeAssetDataHandler}
                    />
                ))
            }
        </div>
    );
};

export default AssetItems;