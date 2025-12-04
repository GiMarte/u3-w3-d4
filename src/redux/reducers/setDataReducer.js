/* const setDataReducer = (state = [], action) => {
  switch (action.type) {
    case "set_data": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default setDataReducer;
 */

const setDataReducer = (state = [], action) => {
  switch (action.type) {
    case "set_data":
      return action.payload;

    default:
      return state;
  }
};

export default setDataReducer;
