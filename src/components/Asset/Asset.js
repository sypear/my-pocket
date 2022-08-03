import React from "react";

import AssetStatus from "./AssetStatus/AssetStatus";
import AssetItems from "./AssetItems/AssetItems";

import "./Asset.css";
import AssetChart from "./AssetChart/AssetChart";

const Asset = () => {
    return (
        <div className="asset">
            <AssetStatus />
            <AssetItems />
            <AssetChart />
        </div>
    );
};

export default Asset;