import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const amountOfChartDatas = props.chartDatas.map(data => data.amount);
    const maximumAmountOfChartDatas = Math.max(...amountOfChartDatas);

    return (
        <div className="chart" aria-label={props.filterBaseYear + "년의 월 별 지출 차트"}>
            {
                props.chartDatas.map((expense) => (
                    <ChartBar
                        key={expense.label}
                        year={props.filterBaseYear}
                        label={expense.label}
                        amount={expense.amount}
                        maximumAmount={maximumAmountOfChartDatas}
                    />
                ))
            }
        </div>
    );
};

export default Chart;