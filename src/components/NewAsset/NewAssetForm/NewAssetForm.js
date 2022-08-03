import React from "react";

import "./NewAssetForm.css";

const NewAssetForm = () => {
    return (
        <form>
            <div className="new-asset__controls">
                <div className="new-asset__control">
                    <h2 className="fs-normal fw-regular">날짜</h2>
                    <input type="date" />
                </div>
                <div className="new-asset__control">
                    <h2 className="fs-normal fw-regular">제목</h2>
                    <input type="text" placeholder="사용 내역을 입력해주세요." />
                </div>
                <div className="new-asset__control">
                    <div className="amount__title">
                        <h2 className="fs-normal fw-regular">금액</h2>
                        <span className="fs-tiny ft-alert">원 단위 숫자를 입력해주세요.</span>
                    </div>
                    <input type="number" placeholder="금액을 입력해주세요." />
                    <div className="amount__type">
                        <div className="amount__income">
                            <input type="radio" id="income" name="amount-type" value="income" />
                            <label htmlFor="income" className="fs-small">수입</label>
                        </div>
                        <div className="amount__expense">
                            <input type="radio" id="expense" name="amount-type" value="expense" />
                            <label htmlFor="expense" className="fs-small">지출</label>
                        </div>
                    </div>
                </div>
                <div className="new-asset__actions">
                    <button type="submit" className="btn-purple">등록</button>
                    <button type="button" className="btn-white">취소</button>
                </div>
            </div>
        </form>
    );
};

export default NewAssetForm;