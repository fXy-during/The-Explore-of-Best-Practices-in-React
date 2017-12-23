

const reducer = (state = 50, action) => {
    switch (action.type) {
      case "COUNT_C_INCREMENT": {
          return state + 1;
      }
      case "COUNT_C_DECREMENT": {
          return state - 1; 
      }
      default: {
          return state
      }
    }
}
export default reducer;