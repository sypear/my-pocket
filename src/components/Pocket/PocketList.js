import React from "react";
import Filter from "../Filter/Filter";
import PocketItems from "./PocketItems";
import "./PocketList.css";

const PocketList = () => {
  return (
    <div className="pocket__list">
      <div className="pocket__list-header">
        <h2 className="fs-normal">연간 내역</h2>
        <Filter />
      </div>
      <PocketItems />
    </div>
  );
};

export default PocketList;
