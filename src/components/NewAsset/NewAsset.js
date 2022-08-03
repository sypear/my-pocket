import React from "react";

import NewAssetForm from "./NewAssetForm/NewAssetForm";

import "./NewAsset.css";

const NewAsset = () => {
    return (
        <div className="new-asset">
            {/* <span className="fs-normal fw-bold">내역 추가하기</span> */}
            <div className="new-asset__create">
                <h1 className="fs-normal">내역 추가</h1>
                <NewAssetForm />
            </div>
        </div>
    );
};

export default NewAsset;