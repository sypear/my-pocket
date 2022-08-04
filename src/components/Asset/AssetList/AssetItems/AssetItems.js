import React, { useEffect } from "react";
import AssetItem from "./AssetItem/AssetItem";

const AssetItems = (props) => {
    if (props.assets.length === 0) {
        return <h1>데이터가 없습니다.</h1>;
    }

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <>
            {
                props.assets.map(asset => (
                    <AssetItem
                        key={asset.id}
                        id={asset.id}
                        date={asset.date}
                        title={asset.title}
                        amount={asset.amount}
                        amountType={asset.amount_type}
                        onRemoveAssetData={removeAssetDataHandler}
                    />
                ))
            }
        </>
    );
};

export default AssetItems;