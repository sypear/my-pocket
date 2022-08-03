import React from "react";

import "./AssetStatus.css";

const AssetStatus = () => {
    return (
        <>
            <div className="title">
                <h1 className="fs-normal fw-light">22년 자산 현황</h1>
                <strong className="fs-title">250,000원</strong>
            </div>

            <div className="detail">
                <div className="detail-desc">
                    <span className="fs-normal fw-light">수입</span>
                    <strong className="fs-emphasis fc-green">300,000원</strong>
                </div>
                <div className="detail-desc">
                    <span className="fs-normal fw-light">지출</span>
                    <strong className="fs-emphasis fc-red">50,000원</strong>
                </div>
            </div>
        </>
    );
};

export default AssetStatus;