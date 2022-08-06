import React from "react";
import Chart from "../Chart/Chart";
import "./PocketChart.css";

const PocketChart = (props) => {
    const monthlyExpenseData = [
        { label: '1', amount: 0 },
        { label: '3', amount: 0 },
        { label: '4', amount: 0 },
        { label: '5', amount: 0 },
        { label: '6', amount: 0 },
        { label: '7', amount: 0 },
        { label: '8', amount: 0 },
        { label: '9', amount: 0 },
        { label: '10', amount: 0 },
        { label: '11', amount: 0 },
        { label: '12', amount: 0 }
    ];

    props.filteredExpenses.forEach(expense => {
        const month = expense.date.getMonth();

        monthlyExpenseData[month].amount += +expense.amount;
    });

    return (
        <div className="pocket__chart">
            <h2 className="fs-normal">월 별 지출 차트</h2>
            <Chart
                chartDatas={monthlyExpenseData}
                filterBaseYear={props.filterBaseYear}
            />
        </div>
    );
};

export default PocketChart;