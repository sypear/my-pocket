import React, { useState } from "react";

import { addComma } from "../../../../../../common/number";

import "./AssetChartBar.css";

const AssetChartBar = (props) => {
    const [isShowValue, setIsShowValue] = useState(false);
    const barStyle = props.value === props.maxValue ? "5px" : "";

    let fillHeight = "0%";

    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    const showValueHandler = () => {
        setIsShowValue(true);
    }
    
    const hideValueHandler = () => {
        setIsShowValue(false);
    }

    return (
        <div className="chart-bar__item">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{height: fillHeight, borderRadius: barStyle}}
                    onMouseOver={showValueHandler}
                    onMouseOut={hideValueHandler}>
                        {
                            isShowValue && 
                            <div className="chart-bar__expense fs-tiny fw-bold">
                                {addComma(props.value.toString())}
                            </div>
                        }
                </div>
            </div>
            <strong className="fs-tiny fw-light">
                {props.label}
            </strong>
        </div>
    );
};

export default AssetChartBar;