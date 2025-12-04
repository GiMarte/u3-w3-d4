const initialState = {
  data: {},
};

const setDataReducer = (state = initialState, action) => {
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
