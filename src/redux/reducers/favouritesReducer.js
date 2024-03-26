import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
