import React from "react";

import "./AssetChart.css";
import AssetChartBar from "./AssetChartBar/AssetChartBar";

const AssetChart = () => {
    return (
        <div className="chart">
            <h2 className="fs-normal">월 별 지출 차트</h2>
            <AssetChartBar />
        </div>
    );
};

export default AssetChart;