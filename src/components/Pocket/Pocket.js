import React, { useEffect, useState } from "react";
import PocketStatus from "./PocketStatus";
import PocketFilter from "./PocketFilter";
import PocketItemList from "./PocketItemList";
import PocketChart from "./PocketChart";
import "./Pocket.css";

const Pocket = (props) => {
    const initialFilterBaseYear = new Date().getFullYear().toString();
    const [filterBaseYear, setFilterBaseYear] = useState(initialFilterBaseYear);
    let filteredItems = [];
    let filteredExpenses = [];

    useEffect(() => {
        if (props.isAddItem) {
            let lastedItemId = Math.max(...props.items.map(item => item.id));
            let lastedItem = props.items.filter(item => item.id === lastedItemId);
            let lastedFilterBaseYear = lastedItem[0].date.getFullYear().toString();
            setFilterBaseYear(lastedFilterBaseYear);
        }
    }, [props.items]);

    if (props.items.length > 0) {
        filteredItems = props.items.filter(item => item.date.getFullYear().toString() === filterBaseYear);
        filteredExpenses = filteredItems.filter(item => item.amount_type === "expense");
    }

    const filterChangeHandler = (selectedYear) => {
        setFilterBaseYear(selectedYear);
    };

    const deleteItemHandler = (selectedItemId) => {
        props.onDeleteItem(selectedItemId);
    };

    return (
        <div className="pocket">
            <PocketStatus filteredItems={filteredItems} filterBaseYear={filterBaseYear} />
            <PocketFilter onChangeFilter={filterChangeHandler} filterBaseYear={filterBaseYear} />
            <PocketItemList filteredItems={filteredItems} onDeleteItem={deleteItemHandler} />
            <PocketChart filteredExpenses={filteredExpenses} filterBaseYear={filterBaseYear} />
        </div>
    );
};

export default Pocket;