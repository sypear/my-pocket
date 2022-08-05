import React, { useEffect, useState } from "react";
import { addComma } from "../../utils/numberUtils";
import "./PocketStatus.css";

const PocketStatus = (props) => {
    const [totalAssets, setTotalAssets] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const year = props.filteredYear.slice(-2);

    useEffect(() => {
        let total = {assets: 0, income: 0, expense: 0};

        if (props.assets.length > 0) {
            // 자산, 수입, 지출 합계 계산
            props.assets.forEach(item => {
                if (item.amount_type === "income") {
                    total.assets += +item.amount;
                    total.income += +item.amount;
                } else {
                    total.assets -= +item.amount;
                    total.expense += +item.amount;
                }
            });
        }

        setTotalAssets(total.assets);
        setTotalIncome(total.income);
        setTotalExpense(total.expense);
    }, [props.assets]);

    return (
        <>
            <div className="title">
                <h1 className="fs-normal fw-light">{year}년 자산 현황</h1>
                <strong className="fs-title">{addComma(totalAssets.toString())}원</strong>
            </div>

            <div className="detail">
                <div className="detail-desc">
                    <span className="fs-normal fw-light">수입</span>
                    <strong className="fs-emphasis fc-green">{addComma(totalIncome.toString())}원</strong>
                </div>
                <div className="detail-desc">
                    <span className="fs-normal fw-light">지출</span>
                    <strong className="fs-emphasis fc-red">{addComma(totalExpense.toString())}원</strong>
                </div>
            </div>
        </>
    );
};

export default PocketStatus;