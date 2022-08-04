import React from "react";

import AssetStatus from "./AssetStatus/AssetStatus";
import AssetList from "./AssetList/AssetList";

import "./Asset.css";
import AssetChart from "./AssetChart/AssetChart";

const Asset = (props) => {
    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onDeleteAssetData(selectedAssetDataId);
    };

    return (
        <div className="asset">
            <AssetStatus assets={props.assets} />
            <AssetList assets={props.assets} onRemoveAssetData={removeAssetDataHandler} />
            <AssetChart assets={props.assets} />
        </div>
    );
};

export default Asset;