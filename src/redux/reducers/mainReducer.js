const initialState = {
  favorites: {},
  data: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_favorite": {
      const id = action.payload;

      return {
        ...state,
        favorites: {
          ...state.favorites,
          [id]: !state.favorites[id],
        },
      };
    }
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

export default mainReducer;
