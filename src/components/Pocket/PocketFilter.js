import React from "react";
import Filter from "../Filter/Filter";
import "./PocketFilter.css";

const PocketFilter = (props) => {
    const filterChangeHandler = (selectedYear) => {
        props.onChangeFilter(selectedYear);
    }

    return (
        <div className="pocket__filter">
            <h2 className="fs-normal">연간 내역</h2>
            <Filter filteredYear={props.filteredYear} onChangeFilter={filterChangeHandler} />
        </div>
    );
};

export default PocketFilter;