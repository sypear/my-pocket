import React from "react";

import AssetList from "./AssetList/AssetList";

import "./Asset.css";

const Asset = (props) => {
    let filteredAssets = [];

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onDeleteAssetData(selectedAssetDataId);
    };

    const getFilteredAssetsDataHandler = (filteredData) => {
        filteredAssets = filteredData;
	};

    return (
        <div className="asset">
            <AssetList assets={props.assets} latestAssetId={props.latestAssetId} onRemoveAssetData={removeAssetDataHandler} onGetFilteredAssetsData={getFilteredAssetsDataHandler} assetsYear={props.assetsYear} />
        </div>
    );
};

export default Asset;