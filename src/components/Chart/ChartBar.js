import React, { useState } from "react";
import { addComma } from "../../utils/numberUtils.js";
import "./ChartBar.css";

const ChartBar = (props) => {
    const [isShowAmount, setIsShowAmount] = useState(false);
    const fillBarStyle = props.amount === props.maxAmount ? "5px" : "";
    const expenseYear = props.year;
    const expenseMonth = props.month;
    const expenseAmount = addComma(props.amount.toString());
    console.log(props.amount);

    let fillHeight = "0%";

    if (props.maxAmount > 0) {
        fillHeight = Math.round((props.amount / props.maxAmount) * 100) + "%";
    }

    const showAmountHandler = () => {
        setIsShowAmount(true);
    }
    
    const hideAmountHandler = () => {
        setIsShowAmount(false);
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{height: fillHeight, borderRadius: barStyle}}
                    onMouseOver={showValueHandler}
                    onMouseOut={hideValueHandler}>
                        {
                            <div
                                className="chart-bar__expense fs-tiny fw-bold"
                                aria-label={`${expenseYear}년 ${expenseMonth}월 지출 금액: ${expenseAmount}원`}>
                                {expenseAmount}
                            </div>
                        }
                </div>
            </div>
            <strong className="fs-tiny fw-light">
                {expenseMonth + "월"}
            </strong>
        </div>
    );
};

export default ChartBar;