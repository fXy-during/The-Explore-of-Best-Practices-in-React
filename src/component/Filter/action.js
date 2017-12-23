import * as actionType from "./actionType";
export const choseFilter = filterType => {
  return {
    type: actionType.TODD_CHOSEFILTER,
    filterType
  };
};


