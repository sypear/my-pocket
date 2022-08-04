import React from "react";

import "./AssetChart.css";
import AssetChartBars from "./AssetChartBars/AssetChartBars";

const AssetChart = (props) => {
    const monthExpenseData = [
        { label: '1월', value: 0 },
        { label: '2월', value: 0 },
        { label: '3월', value: 0 },
        { label: '4월', value: 0 },
        { label: '5월', value: 0 },
        { label: '6월', value: 0 },
        { label: '7월', value: 0 },
        { label: '8월', value: 0 },
        { label: '9월', value: 0 },
        { label: '10월', value: 0 },
        { label: '11월', value: 0 },
        { label: '12월', value: 0 }
    ];

    props.assets.forEach(asset => {
        const month = asset.date.getMonth();

        monthExpenseData[month].value += +asset.amount;
    });

    return (
        <div className="chart">
            <h2 className="fs-normal">월 별 지출 차트</h2>
            <AssetChartBars expenses={monthExpenseData} />
        </div>
    );
};

export default AssetChart;