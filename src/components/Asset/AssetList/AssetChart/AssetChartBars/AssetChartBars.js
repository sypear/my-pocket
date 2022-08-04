import React from "react";

import AssetChartBar from "./AssetChartBar/AssetChartBar";

import "./AssetChartBars.css";

const AssetChartBars = (props) => {
    const expensesValues = props.expenses.map(expense => expense.value);
    const maxValue = Math.max(...expensesValues);

    return (
        <div className="chart-bars">
            {
                props.expenses.map((expense) => (
                    <AssetChartBar
                        key={expense.label}
                        label={expense.label}
                        value={expense.value}
                        maxValue={maxValue}
                    />
                ))
            }
        </div>
    );
};

export default AssetChartBars;