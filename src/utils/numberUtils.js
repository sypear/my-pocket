export const enteredOnlyNumber = (val) => {
  return val.replace(/[^0-9]/g, "");
};

export const addComma = (num) => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const deleteComma = (str) => {
  return str.replace(/,/g, "");
};
