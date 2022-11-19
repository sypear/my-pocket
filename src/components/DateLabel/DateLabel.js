import React from "react";

const DateLabel = (props) => {
  const year = props.date.getFullYear();
  const month = ("00" + (props.date.getMonth() + 1)).slice(-2);
  const day = ("00" + props.date.getDate()).slice(-2);

  return (
    <span className="fs-small fw-light">
      {year}-{month}-{day}
    </span>
  );
};

export default DateLabel;
