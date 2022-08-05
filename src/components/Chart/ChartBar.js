import React, { useState } from "react";
import { addComma } from "../../utils/numberUtils.js";
import "./ChartBar.css";

const ChartBar = (props) => {
    const [isShowValue, setIsShowValue] = useState(false);
    const barStyle = props.value === props.maxValue ? "5px" : "";
    const expenseYear = props.filteredYear;
    const expenseMonth = props.label;
    const expenseAmount = addComma(props.value.toString());

    let fillHeight = "0%";

    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    const showValueHandler = () => {
        setIsShowValue(true);
    }
    
    const hideValueHandler = () => {
        setIsShowValue(false);
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
                {expenseMonth}
            </strong>
        </div>
    );
};

export default ChartBar;