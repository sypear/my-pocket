import React, { useEffect, useState } from "react";

import AssetStatus from "./AssetStatus/AssetStatus";
import AssetItemsFilter from "./AssetItemsFilter/AssetItemsFilter";
import AssetItems from "./AssetItems/AssetItems";
import AssetChart from "./AssetChart/AssetChart";

import "./AssetList.css";

const AssetList = (props) => {
    let year = new Date().getFullYear().toString();

    const [filteredYear, setfilteredYear] = useState(year);
    let filteredAssets = [];
    let filteredExpenses = [];

    useEffect(() => {
        if (props.isAddAsset) {
            let lastedAssetId = Math.max(...props.assets.map(asset => asset.id));
            let lastedAsset = props.assets.filter(asset => asset.id === lastedAssetId);
            year = lastedAsset[0].date.getFullYear().toString();
            setfilteredYear(year);
        }
    }, [props.assets]);

    if (props.assets.length > 0) {
        filteredAssets = props.assets.filter(asset => asset.date.getFullYear().toString() === filteredYear);
        filteredExpenses = filteredAssets.filter(asset => asset.amount_type === "expense");

        props.onGetFilteredAssetsData(filteredAssets);
    }

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    };

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="list">
            <AssetStatus assets={filteredAssets} filteredYear={filteredYear} />
            <div className="year-items">
                <AssetItemsFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear} assetsYear={props.assetsYear} />
                <AssetItems assets={filteredAssets} onRemoveAssetData={removeAssetDataHandler} />
            </div>
            <AssetChart assets={filteredExpenses} />
        </div>
    );
};

export default AssetList;