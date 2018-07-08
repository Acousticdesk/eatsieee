import { REQUEST_MEALS, RECEIVE_MEALS, REQUEST_REMOVE_MEAL, RECEIVE_REMOVE_MEAL } from '../meals/actions';
import { REQUEST_NEW_MEAL, RECEIVE_NEW_MEAL } from '../newMeal/actions';
import { WINDOW_SIZE_CHANGE, TOGGLE_MOBILE_SIDE_MENU, INPUT_FOCUS } from '../ui/actions';

/*
  {
    isLoading: bool
  }
*/

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MEALS:
    case REQUEST_NEW_MEAL:
    case REQUEST_REMOVE_MEAL:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_MEALS:
    case RECEIVE_NEW_MEAL:
    case RECEIVE_REMOVE_MEAL:
      return {
        ...state,
        isLoading: false
      };
    case WINDOW_SIZE_CHANGE:
      return {
        ...state,
        windowSize: action.size
      };
    case TOGGLE_MOBILE_SIDE_MENU:
      return {
        ...state,
        showMobileSideMenu: action.payload !== undefined ? action.payload : !state.showMobileSideMenu
      };
    case INPUT_FOCUS:
      return {
        ...state,
        inputFocused: action.field
      };
    default:
      return state;
  }
};

export default reducer;
