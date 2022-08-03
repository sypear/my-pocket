import React from "react";

import "../UI/Font.css";
import "../UI/Button.css";
import "./NewHistory.css";
import "./History.css";

const History = () => {
    return (
        <>
            <div className="new-history">
                {/* <span className="fs-normal fw-bold">내역 추가하기</span> */}
                <div className="new-history__create">
                    <h1 className="fs-normal">내역 추가</h1>
                    <form>
                        <div className="new-history__controls">
                            <div className="new-history__control">
                                <h2 className="fs-normal fw-regular">날짜</h2>
                                <input type="date" />
                            </div>
                            <div className="new-history__control">
                                <h2 className="fs-normal fw-regular">제목</h2>
                                <input type="text" placeholder="사용 내역을 입력해주세요." />
                            </div>
                            <div className="new-history__control">
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
                            <div className="new-history__actions">
                                <button type="submit" className="btn-purple">등록</button>
                                <button type="button" className="btn-white">취소</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="history">
                <div className="title">
                    <h1 className="fs-normal fw-light">22년 자산 현황</h1>
                    <strong className="fs-title">250,000원</strong>
                </div>

                <div className="detail">
                    <div className="detail-desc">
                        <span className="fs-normal fw-light">수입</span>
                        <strong className="fs-emphasis fc-green">300,000원</strong>
                    </div>
                    <div className="detail-desc">
                        <span className="fs-normal fw-light">지출</span>
                        <strong className="fs-emphasis fc-red">50,000원</strong>
                    </div>
                </div>

                <div className="list">
                    <div className="list-filter">
                        <h2 className="fs-normal">연간 내역</h2>

                        <select className="fw-light" id="filter" name="filter">
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                    <div className="list-item">
                        <div>
                            <span className="fs-small fw-light">22-08-03</span>
                            <div className="list-item__title">
                                <div className="fs-tiny btn-navy list-item__delete">X</div>
                                <h3 className="fs-normal fw-regular">노티드 우유 생크림 도넛 3개 구매</h3>
                            </div>
                        </div>
                        <strong className="fs-emphasis fc-red">-10,500</strong>
                    </div>
                    <div className="list-item income">
                        <div>
                            <span className="fs-small fw-light">22-08-01</span>
                            <div className="list-item__title">
                                <div className="fs-tiny btn-navy list-item__delete">X</div>
                                <h3 className="fs-normal fw-regular">안 입는 옷 중고거래</h3>
                            </div>
                        </div>
                        <strong className="fs-emphasis fc-green">+50,000</strong>
                    </div>
                    <div className="list-item income">
                        <div>
                            <span className="fs-small fw-light">22-07-23</span>
                            <div className="list-item__title">
                                <div className="fs-tiny btn-navy list-item__delete">X</div>
                                <h3 className="fs-normal fw-regular">로또 4등 당첨🎉</h3>
                            </div>
                        </div>
                        <strong className="fs-emphasis fc-green">+50,000</strong>
                    </div>
                    <div className="list-item">
                        <div>
                            <span className="fs-small fw-light">22-07-19</span>
                            <div className="list-item__title">
                                <div className="fs-tiny btn-navy list-item__delete">X</div>
                                <h3 className="fs-normal fw-regular">친구 생일선물 구매</h3>
                            </div>
                        </div>
                        <strong className="fs-emphasis fc-red">-48,000</strong>
                    </div>
                </div>

                <div className="chart">
                    <h2 className="fs-normal">월 별 지출 차트</h2>
                    <div className="chart-bar">
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill">
                                    <div className="chart-bar__expense fs-tiny">15,000</div>
                                </div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                1월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                2월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                3월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                4월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                5월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                6월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                7월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                8월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                9월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                10월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                11월
                            </strong>
                        </div>
                        <div className="chart-bar__item">
                            <div className="chart-bar__inner">
                                <div className="chart-bar__fill"></div>
                            </div>
                            <strong className="fs-tiny fw-light">
                                12월
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;