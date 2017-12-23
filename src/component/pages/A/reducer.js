

const reducer = (state = 30, action) => {
    switch (action.type) {
      case "COUNT_A_INCREMENT": {
          return state + 1;
      }
      case "COUNT_A_DECREMENT": {
          return state - 1; 
      }
      default: {
          return state
      }
    }
}
export default reducer;