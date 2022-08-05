import React from "react";
import Item from "../Item/Item";
import "./PocketItemList.css";

const PocketItemList = (props) => {
    if (props.assets.length === 0) {
        return (
            <div className="pocket__item-list">
                <span className="fw-light fs-normal" style={{display: "block", textAlign: "center"}}>입력된 데이터가 없어요 🙅</span>
            </div>
        );
    }

    const copyAsstes = [...props.assets];
    const assetsSortedByDate = copyAsstes.sort((a, b) => {
        // 날짜가 최근일수록 상단에 위치하도록 정렬
        // 만약 날짜가 같다면 id 값이 작은 순으로(최근에 입력한 순으로) 상단에 위치하도록 정렬
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
            return b.id - a.id;
        }

        return new Date(b.date) - new Date(a.date);
    });

    const removeAssetDataHandler = (selectedAssetDataId) => {
        props.onRemoveAssetData(selectedAssetDataId);
    };

    return (
        <div className="pocket__item-list">
            {
                assetsSortedByDate.map(asset => (
                    <Item
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

export default PocketItemList;