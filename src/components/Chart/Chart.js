import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const amountOfChartDatas = props.chartDatas.map(data => data.amount);
    const maximumAmountOfChartDatas = Math.max(...amountOfChartDatas);

    return (
        <div className="chart">
            {
                props.chartDatas.map((expense) => (
                    <ChartBar
                        key={expense.month}
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