import React from "react";

import AssetItemsFilter from "./AssetItemsFilter/AssetItemsFilter";

import "./AssetList.css";
import AssetItems from "./AssetItems/AssetItems";

const AssetList = (props) => {
    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="list">
            <AssetItemsFilter assets={props.assets} />
            <AssetItems assets={props.assets} onRemoveAssetData={removeAssetDataHandler} />
        </div>
    );
};

export default AssetList;