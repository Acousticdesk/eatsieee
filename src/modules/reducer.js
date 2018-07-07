import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import mealsReducer from './meals/reducer';
import newMealReducer from './newMeal/reducer';


/*
  {
    meals: [],
    ui: {}
  }
*/

export default combineReducers({
  meals: mealsReducer,
  ui: uiReducer,
  newMeal: newMealReducer
});
