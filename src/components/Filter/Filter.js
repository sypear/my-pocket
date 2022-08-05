import React from "react";
import "./Filter.css";

const Filter = (props) => {
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    
    return (
        <select
            className="fw-light filter"
            id="filter"
            name="filter"
            value={props.filteredYear}
            onChange={filterChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
    );
};

export default Filter;