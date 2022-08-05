import React, { useEffect, useState } from "react";
import PocketStatus from "./PocketStatus";
import PocketFilter from "./PocketFilter";
import PocketItemList from "./PocketItemList";
import PocketChart from "./PocketChart";
import "./Pocket.css";

const Pocket = (props) => {
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
            <PocketStatus assets={filteredAssets} filteredYear={filteredYear} />
            <PocketFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear} assetsYear={props.assetsYear} />
            <PocketItemList assets={filteredAssets} onRemoveAssetData={removeAssetDataHandler} />
            <PocketChart assets={filteredExpenses} filteredYear={filteredYear} />
        </div>
    );
};

export default Pocket;