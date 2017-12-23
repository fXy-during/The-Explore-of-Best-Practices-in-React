import React from "react";
import { connect } from "react-redux";

const A = ({ count_A, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>{count_A}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};

function mapState(state) {
  return {
    count_A: state
  };
}

function mapDispatch(dispatch) {
  return {
    onIncrement: () => {
      dispatch(() => {
        type: "COUNT_A_INCREMENT";
      });
    },
    onDecrement: () => {
      dispatch(() => {
        type: "COUNT_A_DECREMENT";
      });
    }
  };
}

export default connect(mapState, mapDispatch)(A);
