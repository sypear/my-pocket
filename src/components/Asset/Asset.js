import React from "react";

import AssetStatus from "./AssetStatus/AssetStatus";
import AssetItems from "./AssetItems/AssetItems";

import "./Asset.css";
import AssetChart from "./AssetChart/AssetChart";

const Asset = (props) => {
    return (
        <div className="asset">
            <AssetStatus assets={props.assets} />
            <AssetItems assets={props.assets} />
            <AssetChart assets={props.assets} />
        </div>
    );
};

export default Asset;