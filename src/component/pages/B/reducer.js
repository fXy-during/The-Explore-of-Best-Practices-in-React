

const reducer = (state = 40, action) => {
    switch (action.type) {
      case "COUNT_B_INCREMENT": {
          return state + 1;
      }
      case "COUNT_B_DECREMENT": {
          return state - 1; 
      }
      default: {
          return state
      }
    }
}
export default reducer;