const initialState = {
  favorites: {},
};

const setFavoriteReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default setFavoriteReducer;
