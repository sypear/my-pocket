import React, { useCallback, useContext, useState } from "react";
import { ItemDispatchContext } from "../../App.js";
import {
  enteredOnlyNumber,
  addComma,
  deleteComma,
} from "../../utils/numberUtils.js";
import { StopEditContext } from "./NewItemContainer.js";
import "./NewItemForm.css";

const NewItemForm = () => {
  const [{ onAdd }, { nextItemId }] = useContext(ItemDispatchContext);
  const { stopEditingHandler } = useContext(StopEditContext);

  const TITLE_SIZE = 35;

  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredAmountType, setEnteredAmountType] = useState("income");

  const [isTitleSizeOver, setIsTitleSizeOver] = useState(false);
  const [isEnteredWrongAmount, setIsEnteredWrongAmount] = useState(false);

  const getDate = useCallback(() => {
    return new Date().toISOString().substring(0, 10);
  }, []);

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    let isSizeOver = event.target.value.length > TITLE_SIZE ? true : false;
    setIsTitleSizeOver(isSizeOver);

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    let isNotNumber = /^[^1-9][^0-9]{0,11}$/g.test(event.target.value)
      ? true
      : false;
    setIsEnteredWrongAmount(isNotNumber);
    if (isNotNumber) return;

    let amount = addComma(enteredOnlyNumber(event.target.value));
    setEnteredAmount(amount);
  };

  const amountTypeChangeHandler = (event) => {
    setEnteredAmountType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    const enteredData = {
      id: nextItemId,
      date: new Date(enteredDate),
      title: enteredTitle,
      amount: deleteComma(enteredAmount),
      amountType: enteredAmountType,
    };

    onAdd(enteredData); // 부모 컴포넌트로 enteredData 전달

    // 입력창 초기화
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredAmountType("income");

    stopEditingHandler();
  };

  return (
    <form className="new-item__form" onSubmit={submitHandler}>
      <div className="new-item__form-info">
        <h2 className="fs-normal fw-regular">날짜</h2>
        <input
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
          min="2020-01-01"
          max={getDate()}
          required
        />
      </div>

      <div className="new-item__form-info">
        <div className="new-item__form-info--title">
          <h2 className="fs-normal fw-regular">제목</h2>
          <span
            className="fs-tiny ft-alert"
            style={{ display: isTitleSizeOver ? "inline-block" : "none" }}
          >
            {TITLE_SIZE}자까지만 입력할 수 있어요.
          </span>
        </div>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
          placeholder="사용 내역을 입력해주세요."
          maxLength={TITLE_SIZE}
          required
        />
      </div>

      <div className="new-item__form-info">
        <div className="new-item__form-info--title">
          <h2 className="fs-normal fw-regular">금액</h2>
          <span
            className="fs-tiny ft-alert"
            style={{ display: isEnteredWrongAmount ? "inline-block" : "none" }}
          >
            10억 미만의 정수만 입력할 수 있어요.
          </span>
        </div>

        <input
          type="text"
          value={enteredAmount}
          onChange={amountChangeHandler}
          placeholder="금액을 입력해주세요."
          maxLength="11"
          required
        />

        <div className="amount__type">
          <div className="amount__income">
            <input
              type="radio"
              id="income"
              name="amount-type"
              value="income"
              onChange={amountTypeChangeHandler}
              checked={enteredAmountType === "income" || ""}
              required
            />
            <label htmlFor="income" className="fs-small">
              수입
            </label>
          </div>
          <div className="amount__expense">
            <input
              type="radio"
              id="expense"
              name="amount-type"
              value="expense"
              onChange={amountTypeChangeHandler}
              checked={enteredAmountType === "expense" || ""}
              required
            />
            <label htmlFor="expense" className="fs-small">
              지출
            </label>
          </div>
        </div>
      </div>

      <div className="new-item__form-actions">
        <button type="submit" className="btn-purple">
          등록
        </button>
        <button
          type="button"
          className="btn-white"
          onClick={stopEditingHandler}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default NewItemForm;
