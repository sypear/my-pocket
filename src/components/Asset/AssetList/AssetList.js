import React, { useState } from "react";

import AssetItemsFilter from "./AssetItemsFilter/AssetItemsFilter";

import "./AssetList.css";
import AssetItems from "./AssetItems/AssetItems";

const AssetList = (props) => {
    const [filteredYear, setfilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="list">
            <AssetItemsFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear} />
            <AssetItems assets={props.assets} onRemoveAssetData={removeAssetDataHandler} />
        </div>
    );
};

export default AssetList;