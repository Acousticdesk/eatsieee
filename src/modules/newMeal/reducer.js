import { CHANGE_NEW_MEAL } from './actions';

const setMealValue = (value, stateValue) => value ? value : stateValue;

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_NEW_MEAL:
      return {
        ...state,
        dishes: setMealValue(action.dishes, state.dishes),
        time: setMealValue(action.time, state.time)
      };
    default:
      return state;
  }
};