import React, { useContext } from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import { FilterContext } from "../Pocket/PocketContainer";

const Chart = (props) => {
  const { filterBaseYear } = useContext(FilterContext);

  const amountOfChartDatas = props.chartDatas.map((data) => data.amount);
  const maximumAmountOfChartDatas = Math.max(...amountOfChartDatas);

  return (
    <div className="chart" aria-label={filterBaseYear + "년의 월 별 지출 차트"}>
      {props.chartDatas.map((expense) => (
        <ChartBar
          key={expense.label}
          year={filterBaseYear}
          label={expense.label}
          amount={expense.amount}
          maximumAmount={maximumAmountOfChartDatas}
        />
      ))}
    </div>
  );
};

export default Chart;
