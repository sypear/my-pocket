import React, { useState } from "react";

import "./NewAssetForm.css";

const NewAssetForm = (props) => {
    const TITLE_SIZE = 35;

    const [enteredDate, setEnteredDate] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredAmountType, setEnteredAmountType] = useState("income");

    const [isWrongTitle, setIsWrongTitle] = useState(false);
    const [isWrongAmount, setIsWrongAmount] = useState(false);

    const getDate = () => {
        return new Date().toISOString().substring(0, 10);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const titleChangeHandler = (event) => {
        let isSizeOver = event.target.value.length > TITLE_SIZE ? true : false;
        setIsWrongTitle(isSizeOver);

        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        const regex = /[^0-9]/g;
        let isEnteredNotNumber = regex.test(event.target.value) ? true : false;
        setIsWrongAmount(isEnteredNotNumber);

        if (isEnteredNotNumber === true) {
            return;
        }

        setEnteredAmount(event.target.value);
    };

    const amountTypeChangeHandler = (event) => {
        setEnteredAmountType(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // 페이지 리로드 방지

        const AssetData = {
            date: enteredDate,
            title: enteredTitle,
            amount: enteredAmount,
            amount_type: enteredAmountType
        };

        // 입력창 초기화
        setEnteredDate("");
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredAmountType("income");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-asset__controls">
                <div className="new-asset__control">
                    <h2 className="fs-normal fw-regular">날짜</h2>
                    <input
                        type="date"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        min="2020-01-01"
                        max={getDate()}
                        required />
                </div>

                <div className="new-asset__control">
                    <div className="new-asset__control--title">
                        <h2 className="fs-normal fw-regular">제목</h2>
                        <span
                            className="fs-tiny ft-alert"
                            style={{display: isWrongTitle ? 'inline-block' : 'none'}}
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
                        required />
                </div>

                <div className="new-asset__control">
                    <div className="new-asset__control--title">
                        <h2 className="fs-normal fw-regular">금액</h2>
                        <span
                            className="fs-tiny ft-alert"
                            style={{display: isWrongAmount ? 'inline-block' : 'none'}}
                        >
                        10억 미만의 숫자만 입력할 수 있어요.
                        </span>
                    </div>

                    <input
                        type="text"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        placeholder="금액을 입력해주세요."
                        maxLength="9"
                        required />

                    <div className="amount__type">
                        <div className="amount__income">
                            <input
                                type="radio"
                                id="income"
                                name="amount-type"
                                value="income"
                                onChange={amountTypeChangeHandler}
                                checked={enteredAmountType === "income" || ""}
                                required />
                            <label htmlFor="income" className="fs-small">수입</label>
                        </div>
                        <div className="amount__expense">
                            <input
                                type="radio"
                                id="expense"
                                name="amount-type"
                                value="expense"
                                onChange={amountTypeChangeHandler}
                                checked={enteredAmountType === "expense" || ""}
                                required />
                            <label htmlFor="expense" className="fs-small">지출</label>
                        </div>
                    </div>
                </div>

                <div className="new-asset__actions">
                    <button type="submit" className="btn-purple">등록</button>
                    <button type="button" className="btn-white" onClick={props.onCancle}>취소</button>
                </div>
            </div>
        </form>
    );
};

export default NewAssetForm;