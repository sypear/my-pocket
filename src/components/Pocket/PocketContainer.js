import { React, useState, useEffect } from "react";
import PocketStatus from "./PocketStatus";
import PocketChart from "./PocketChart";
import PocketList from "./PocketList";
import "./PocketContainer.css";

const PocketContainer = (props) => {
  const initialFilterBaseYear = new Date().getFullYear().toString();
  const [filterBaseYear, setFilterBaseYear] = useState(initialFilterBaseYear);
  let filteredItems = [];
  let filteredExpenses = [];

  useEffect(() => {
    if (props.isAddItem) {
      let lastedItemId = Math.max(...props.items.map((item) => item.id));
      let lastedItem = props.items.filter((item) => item.id === lastedItemId);
      let lastedFilterBaseYear = lastedItem[0].date.getFullYear().toString();
      setFilterBaseYear(lastedFilterBaseYear);
    }
  }, [props.items]);

  if (props.items.length > 0) {
    filteredItems = props.items.filter(
      (item) => item.date.getFullYear().toString() === filterBaseYear
    );

    filteredExpenses = filteredItems.filter(
      (item) => item.amountType === "expense"
    );
  }

  const filterChangeHandler = (selectedYear) => {
    setFilterBaseYear(selectedYear);
  };

  const deleteItemHandler = (selectedItemId) => {
    props.onDeleteItem(selectedItemId);
  };

  return (
    <div className="pocket__container">
      <PocketStatus
        filteredItems={filteredItems}
        filterBaseYear={filterBaseYear}
      />
      <PocketList
        onChangeFilter={filterChangeHandler}
        filterBaseYear={filterBaseYear}
        filteredItems={filteredItems}
        onDeleteItem={deleteItemHandler}
      />
      <PocketChart
        filteredExpenses={filteredExpenses}
        filterBaseYear={filterBaseYear}
      />
    </div>
  );
};

export default PocketContainer;
