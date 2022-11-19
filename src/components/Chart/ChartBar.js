import React, { useState } from "react";
import { addComma } from "../../utils/numberUtils.js";
import "./ChartBar.css";

const ChartBar = (props) => {
  const [isShowAmount, setIsShowAmount] = useState(false);
  const fillBarStyle = props.amount === props.maximumAmount ? "5px" : "";
  const year = props.year;
  const month = props.label;
  const amount = addComma(props.amount.toString());
  let fillHeight = "0%";

  if (props.maximumAmount > 0) {
    fillHeight = Math.round((props.amount / props.maximumAmount) * 100) + "%";
  }

  const showAmountHandler = () => {
    setIsShowAmount(true);
  };

  const hideAmountHandler = () => {
    setIsShowAmount(false);
  };

  return (
    <div
      className="chart-bar"
      aria-label={`${year}년 ${month}월 지출 금액: ${amount}원`}
    >
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillHeight, borderRadius: fillBarStyle }}
          onMouseOver={showAmountHandler}
          onMouseOut={hideAmountHandler}
        >
          {isShowAmount && (
            <div className="chart-bar__expense fs-tiny fw-bold">{amount}</div>
          )}
        </div>
      </div>
      <strong className="fs-tiny fw-light">{month}월</strong>
    </div>
  );
};

export default ChartBar;
