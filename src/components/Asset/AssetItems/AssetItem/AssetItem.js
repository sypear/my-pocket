import React from "react";

import "./AssetItem.css";

const AssetItem = () => {
    return (
        <>
            <div className="item expense-item">
                <div>
                    <span className="fs-small fw-light">22-08-03</span>
                    <div className="item__title">
                        <div className="fs-tiny btn-navy item__delete">X</div>
                        <h3 className="fs-normal fw-regular">노티드 우유 생크림 도넛 3개 구매</h3>
                    </div>
                </div>
                <strong className="fs-emphasis fc-red">-10,500</strong>
            </div>
            <div className="item income-item">
                <div>
                    <span className="fs-small fw-light">22-08-01</span>
                    <div className="item__title">
                        <div className="fs-tiny btn-navy item__delete">X</div>
                        <h3 className="fs-normal fw-regular">안 입는 옷 중고거래</h3>
                    </div>
                </div>
                <strong className="fs-emphasis fc-green">+50,000</strong>
            </div>
            <div className="item income-item">
                <div>
                    <span className="fs-small fw-light">22-07-23</span>
                    <div className="item__title">
                        <div className="fs-tiny btn-navy item__delete">X</div>
                        <h3 className="fs-normal fw-regular">로또 4등 당첨🎉</h3>
                    </div>
                </div>
                <strong className="fs-emphasis fc-green">+50,000</strong>
            </div>
            <div className="item expense-item">
                <div>
                    <span className="fs-small fw-light">22-07-19</span>
                    <div className="item__title">
                        <div className="fs-tiny btn-navy item__delete">X</div>
                        <h3 className="fs-normal fw-regular">친구 생일선물 구매</h3>
                    </div>
                </div>
                <strong className="fs-emphasis fc-red">-48,000</strong>
            </div>
        </>
    );
};

export default AssetItem;