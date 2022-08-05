import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const expensesAmount = props.expenses.map(expense => expense.amount);
    const maxAmount = Math.max(...expensesAmount);

    return (
        <div className="chart">
            {
                props.expenses.map((expense) => (
                    <ChartBar
                        key={expense.month}
                        year={props.filterBaseYear}
                        month={expense.month}
                        amount={expense.amount}
                        maxAmount={maxAmount}
                    />
                ))
            }
        </div>
    );
};

export default Chart;