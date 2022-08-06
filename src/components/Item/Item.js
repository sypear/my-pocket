import React, { useState } from "react";
import { addComma } from "../../utils/numberUtils.js";
import DateLabel from "../DateLabel/DateLabel";
import "./Item.css";

const Item = (props) => {
    const [isItemClick, setIsItemClick] = useState(false);
    const [itemClickCount, setItemClickCount] = useState(0);

    const itemStyle = "item expense-item " + props.amountType;
    let fontStyle = "fs-emphasis fc-green";
    let sign = "+";

    if (props.amountType === "expense") {
        fontStyle = "fs-emphasis fc-red";
        sign = "-";
    }

    const itemClickHandler = () => {
        if (itemClickCount % 2 === 0) {
            setIsItemClick(true);
        } else {
            setIsItemClick(false);
        }

        setItemClickCount(prevClickCount => prevClickCount + 1);
    }

    const deleteButtonClickHandler = (event) => {
        event.stopPropagation(); // 이벤트 버블링 막기

        props.onDeleteItem(props.id);
    }

    return (
        <div className={itemStyleByAmountType} onClick={itemClickHandler}>
            <div>
                <DateLabel date={props.date} />

                <div className="item__title">
                    <div
                        className="item__delete-button fs-tiny btn-navy"
                        style={{display: isItemClick === true ? "flex" : "none"}}
                        onClick={deleteButtonClickHandler}>
                    </div>
                    <h3 className="fs-normal fw-regular">
                        {itemTitle}
                    </h3>
                </div>
            </div>
            <div>
                <strong className={fontStyleByAmountType}>
                    {itemAmount}
                </strong>
            </div>
        </div>
    );
};

export default Item;