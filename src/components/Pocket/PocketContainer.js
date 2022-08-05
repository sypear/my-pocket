import React from "react";
import Pocket from "./Pocket";
import "./PocketContainer.css";

const PocketContainer = (props) => {
    let filteredAssets = [];

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onDeleteAssetData(selectedAssetDataId);
    };

    const getFilteredAssetsDataHandler = (filteredData) => {
        filteredAssets = filteredData;
	};

    return (
        <div className="asset">
            <Pocket assets={props.assets} latestAssetId={props.latestAssetId} onRemoveAssetData={removeAssetDataHandler} onGetFilteredAssetsData={getFilteredAssetsDataHandler} assetsYear={props.assetsYear} isAddAsset={props.isAddAsset} />
        </div>
    );
};

export default PocketContainer;