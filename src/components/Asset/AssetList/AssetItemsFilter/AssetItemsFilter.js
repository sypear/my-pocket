import React from "react";

import "./AssetItemsFilter.css";

const AssetItemsFilter = (props) => {
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="filter">
            <h2 className="fs-normal">연간 내역</h2>

            <select
                className="fw-light"
                id="filter"
                name="filter"
                value={props.filteredYear}
                onChange={filterChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
};

export default AssetItemsFilter;