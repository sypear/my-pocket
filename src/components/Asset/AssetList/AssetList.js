import React, { useState } from "react";

import AssetItemsFilter from "./AssetItemsFilter/AssetItemsFilter";
import AssetItems from "./AssetItems/AssetItems";

import "./AssetList.css";

const AssetList = (props) => {
    const [filteredYear, setfilteredYear] = useState("2020");
    let filteredAssets = [];

    if (props.assets.length > 0) {
        filteredAssets = props.assets.filter(asset => asset.date.getFullYear().toString() === filteredYear);
    }

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    };

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="list">
            <AssetItemsFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear} />
            <AssetItems assets={filteredAssets} onRemoveAssetData={removeAssetDataHandler} />
        </div>
    );
};

export default AssetList;