const initialState = {
  counter: 0,
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "ADD": {
      return {
        ...state,
        counter: state.counter + action.val
      };
    }
    case "SUB": {
      return {
        ...state,
        counter: state.counter - action.val
      };
    }
    case "STORE": {
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
    }
    case "DELETE": {
      const updateArray = state.result.filter(
        rsls => rsls.id !== action.resultELId
      );
      return {
        ...state,
        result: updateArray
      };
    }
  }
  return state;
};

export default reducer;
