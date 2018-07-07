import { RECEIVE_MEALS, RECEIVE_REMOVE_MEAL } from './actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MEALS:
      return action.meals;
    case RECEIVE_REMOVE_MEAL:
      return state.filter((m) => m.time !== action.time);
    default:
      return state;
  }
};

export default reducer;
