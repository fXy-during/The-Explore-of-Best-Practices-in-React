import React from "react";
import { connect } from "react-redux";

const B = ({ count_B, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>{count_B}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};

function mapState(state) {
  return {
    count_B: state
  };
}

function mapDispatch(dispatch) {
  return {
    onIncrement: () => {
      dispatch(() => {
        type: "COUNT_B_INCREMENT";
      });
    },
    onDecrement: () => {
      dispatch(() => {
        type: "COUNT_B_DECREMENT";
      });
    }
  };
}

export default connect(mapState, mapDispatch)(B);
