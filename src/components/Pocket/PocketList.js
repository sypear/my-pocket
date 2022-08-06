import React from "react";
import Filter from "../Filter/Filter";
import PocketItems from "./PocketItems";
import "./PocketList.css";

const PocketList = (props) => {
    const filterChangeHandler = (selectedYear) => {
        props.onChangeFilter(selectedYear);
    };

    const deleteItemHandler = (selectedItemId) => {
        props.onDeleteItem(selectedItemId);
    };

    return (
        <div className="pocket__list">
            <div className="pocket__list-header">
                <h2 className="fs-normal">연간 내역</h2>
                <Filter onChangeFilter={filterChangeHandler} filterBaseYear={props.filterBaseYear} />
            </div>
            <PocketItems filteredItems={props.filteredItems} onDeleteItem={deleteItemHandler} />
        </div>
    );
};

export default PocketList;