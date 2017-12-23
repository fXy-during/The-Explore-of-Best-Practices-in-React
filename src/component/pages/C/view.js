import React from "react";
import { connect } from "react-redux";

const C = ({ count_C, onIncrement, onDecrement }) => {
  console.log("count_C", count_C);
  return (
    <div>
    <p>{count_C}</p>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
    </div>
  );
};
// <span>123</span>
// <span>{count_C}</span>

function mapState(state) {
  return {
    count_C: state.count_C || 0,
  };
}

function mapDispatch(dispatch) {
  return {
    onIncrement: () => {
      dispatch({
        type: "COUNT_C_INCREMENT",
      });
    },
    onDecrement: () => {
      dispatch({
        type: "COUNT_C_DECREMENT",
      });
    }
  };
}

export default connect(mapState, mapDispatch)(C);
