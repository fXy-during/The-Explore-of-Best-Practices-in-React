import React from "react";
import { connect } from "react-redux";
import { choseFilter } from "./action";

const Link = ({ tap, active, handleChoseFilter, children }) => {
  const activeStyle = {
    color: "#66ccff"
  };
  if (active) {
    return (
      <a style={activeStyle} href="javascript: void(0)">
        {children}
      </a>
    );
  } else {
    return (
      <a
        href="javascript: void(0)"
        onClick={(ev) => handleChoseFilter()}
      >
        {children}
      </a>
    );
  }
};

function mapState(state, ownProps) {
  return { active: state.filter === ownProps.tap };
}
function mapDispatch(dispatch, ownProps) {
  return {
    handleChoseFilter: () => {
      dispatch(choseFilter(ownProps.tap));
    }
  };
}
export default connect(mapState, mapDispatch)(Link);
