import React from "react";
import Chart from "../Chart/Chart";
import "./PocketChart.css";

const PocketChart = (props) => {
    const monthExpenseData = [
        { month: '1', amount: 0 },
        { month: '2', amount: 0 },
        { month: '3', amount: 0 },
        { month: '4', amount: 0 },
        { month: '5', amount: 0 },
        { month: '6', amount: 0 },
        { month: '7', amount: 0 },
        { month: '8', amount: 0 },
        { month: '9', amount: 0 },
        { month: '10', amount: 0 },
        { month: '11', amount: 0 },
        { month: '12', amount: 0 }
    ];

    props.filteredExpenses.forEach(expense => {
        const month = expense.date.getMonth();

        monthExpenseData[month].amount += +expense.amount;
    });

    return (
        <div className="pocket__chart">
            <h2 className="fs-normal">월 별 지출 차트</h2>
            <Chart
                expenses={monthExpenseData}
                filterBaseYear={props.filterBaseYear}
            />
        </div>
    );
};

export default PocketChart;