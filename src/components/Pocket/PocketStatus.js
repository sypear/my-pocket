import React, { useContext, useEffect, useState } from "react";
import { addComma } from "../../utils/numberUtils";
import { FilterContext } from "./PocketContainer";
import "./PocketStatus.css";

const PocketStatus = (props) => {
  const { filteredItems, filterBaseYear } = useContext(FilterContext);

  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const twoDigitYear = filterBaseYear.slice(-2);

  useEffect(() => {
    let total = { balance: 0, income: 0, expense: 0 };

    if (filteredItems.length > 0) {
      // 자산, 수입, 지출 합계 계산
      filteredItems.forEach((item) => {
        if (item.amountType === "income") {
          total.balance += +item.amount;
          total.income += +item.amount;
        } else {
          total.balance -= +item.amount;
          total.expense += +item.amount;
        }
      });
    }

    setTotalBalance(total.balance);
    setTotalIncome(total.income);
    setTotalExpense(total.expense);
  }, [filteredItems]);

  return (
    <div className="pocket__status">
      <div className="pocket__status-title">
        <h1 className="fs-normal fw-light">{twoDigitYear}년 자산 현황</h1>
        <strong className="fs-title">
          {addComma(totalBalance.toString())}원
        </strong>
      </div>

      <div className="pocket__status-detail">
        <div className="pocket__status-detail--desc">
          <span className="fs-normal fw-light">수입</span>
          <strong className="fs-emphasis fc-green">
            {addComma(totalIncome.toString())}원
          </strong>
        </div>
        <div className="pocket__status-detail--desc">
          <span className="fs-normal fw-light">지출</span>
          <strong className="fs-emphasis fc-red">
            {addComma(totalExpense.toString())}원
          </strong>
        </div>
      </div>
    </div>
  );
};

export default PocketStatus;
