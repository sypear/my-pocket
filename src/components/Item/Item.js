import React, { useCallback, useContext, useState } from "react";
import { ItemDispatchContext } from "../../App.js";
import { addComma } from "../../utils/numberUtils.js";
import DateLabel from "../DateLabel/DateLabel";
import "./Item.css";

const Item = (props) => {
  const [{ onRemove }] = useContext(ItemDispatchContext);

  const [isItemClick, setIsItemClick] = useState(false);
  const [itemClickCount, setItemClickCount] = useState(0);

  const itemStyleByAmountType = "item " + props.amountType;
  let fontStyleByAmountType = "fs-emphasis fc-green";

  const itemTitle = props.title;
  let itemAmount = "+" + addComma(props.amount.toString());

  if (props.amountType === "expense") {
    fontStyleByAmountType = fontStyleByAmountType.replace("green", "red");
    itemAmount = itemAmount.replace("+", "-");
  }

  const itemClickHandler = useCallback(() => {
    if (itemClickCount % 2 === 0) {
      setIsItemClick(true);
    } else {
      setIsItemClick(false);
    }

    setItemClickCount((prevClickCount) => prevClickCount + 1);
  }, [itemClickCount]);

  const handleRemove = (event) => {
    event.stopPropagation(); // 이벤트 버블링 막기

    onRemove(props.id);
  };

  return (
    <div className={itemStyleByAmountType} onClick={itemClickHandler}>
      <div>
        <DateLabel date={props.date} />

        <div className="item__title">
          <button
            className="item__delete-button fs-tiny btn-navy"
            style={{ display: isItemClick === true ? "flex" : "none" }}
            onClick={handleRemove}
          >
            <span className="sr-only">아이템 삭제</span>
          </button>
          <h3 className="fs-normal fw-regular">{itemTitle}</h3>
        </div>
      </div>
      <div>
        <strong className={fontStyleByAmountType}>{itemAmount}</strong>
      </div>
    </div>
  );
};

export default Item;
