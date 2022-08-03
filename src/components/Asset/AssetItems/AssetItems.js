import React from "react";

import AssetItemsFilter from "./AssetItemsFilter/AssetItemsFilter";

import "./AssetItems.css";
import AssetItem from "./AssetItem/AssetItem";

const AssetItems = () => {
    return (
        <div className="items">
            <AssetItemsFilter />
            <AssetItem />
        </div>
    );
};

export default AssetItems;