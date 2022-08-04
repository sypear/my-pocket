import React, { useEffect, useState } from "react";

import "./AssetStatus.css";

const AssetStatus = (props) => {
    const [totalAssets, setTotalAssets] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        if (props.assets.length > 0) {
            setTotalAssets(calculateTotalHandler().assets);
            setTotalIncome(calculateTotalHandler().income);
            setTotalExpense(calculateTotalHandler().expense);
        }
    }, [props.assets]);

    const calculateTotalHandler = () => {
        // 자산, 수입, 지출 합계 계산
        let total = {
            assets: 0,
            income: 0,
            expense: 0
        };

        props.assets.map(item => {
            if (item.amount_type === "income") {
                total.assets += +item.amount;
                total.income += +item.amount;
            } else {
                total.assets -= +item.amount;
                total.expense += +item.amount;
            }
        });

        return total;
    };

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