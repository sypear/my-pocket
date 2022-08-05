import React from "react";
import PocketItem from "./PocketItem";
import "./PocketItems.css";

const PocketItems = (props) => {
    if (props.assets.length === 0) {
        return (
            <div className="items">
                <span className="fw-light fs-normal" style={{display: "block", textAlign: "center"}}>입력된 데이터가 없어요 🙅</span>
            </div>
        );
    }

    const copyAsstes = [...props.assets];
    const assetsSortedByDate = copyAsstes.sort((a, b) => {
        // 날짜가 최근일수록 아래로 위치하도록 정렬
        // 만약 날짜가 같다면 id 값이 작은 순으로(최근에 입력한 순으로) 아래로 위치하도록 정렬
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
            return a.id - b.id;
        }

        return new Date(a.date) - new Date(b.date);
    });

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="items">
            {
                assetsSortedByDate.map(asset => (
                    <PocketItem
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
        </div>
    );
};

export default PocketItems;