import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const expensesValues = props.expenses.map(expense => expense.value);
    const maxValue = Math.max(...expensesValues);

    return (
        <div className="chart-bars">
            {
                props.expenses.map((expense) => (
                    <ChartBar
                        key={expense.label}
                        year={expense.filteredYear}
                        label={expense.label}
                        value={expense.value}
                        maxValue={maxValue}
                    />
                ))
            }
        </div>
    );
};

export default Chart;