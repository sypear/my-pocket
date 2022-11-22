import React, { useState, useEffect, useMemo } from "react";
import PocketStatus from "./PocketStatus";
import PocketChart from "./PocketChart";
import PocketList from "./PocketList";
import "./PocketContainer.css";
import { useCallback } from "react";

export const FilterContext = React.createContext();

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

  const onChangeFilter = useCallback((selectedYear) => {
    setFilterBaseYear(selectedYear);
  }, []);

  const memoizedFilter = useMemo(() => {
    return { onChangeFilter, filteredItems, filterBaseYear, filteredExpenses };
  }, [filteredItems, filterBaseYear]);

  return (
    <div className="pocket__container">
      <FilterContext.Provider value={memoizedFilter}>
        <PocketStatus />
        <PocketList />
        <PocketChart />
      </FilterContext.Provider>
    </div>
  );
};

export default PocketContainer;
