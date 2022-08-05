import React from "react";
import Item from "../Item/Item";
import "./PocketItemList.css";

const PocketItemList = (props) => {
    if (props.filteredItems.length === 0) {
        return (
            <div className="pocket__item-list">
                <span className="fw-light fs-normal" style={{display: "block", textAlign: "center"}}>
                    입력된 데이터가 없어요 🙅
                </span>
            </div>
        );
    }

    const copyFilteredItems = [...props.filteredItems];
    const sortedFilteredItems = copyFilteredItems.sort((a, b) => {
        // 날짜가 최근일수록 상단에 위치하도록 정렬
        // 만약 날짜가 같다면 id 값이 작은 순으로(최근에 입력한 순으로) 상단에 위치하도록 정렬
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
            return b.id - a.id;
        }

        return new Date(b.date) - new Date(a.date);
    });

    const deleteItemHandler = (selectedItemId) => {
        props.onDeleteItem(selectedItemId);
    };

    return (
        <div className="pocket__item-list">
            {
                sortedFilteredItems.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                        amountType={item.amount_type}
                        onDeleteItem={deleteItemHandler}
                    />
                ))
            }
        </div>
    );
};

export default PocketItemList;