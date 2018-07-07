export const REQUEST_MEALS = 'REQUEST_MEALS';
export const RECEIVE_MEALS = 'RECEIVE_MEALS';
export const REQUEST_REMOVE_MEAL = 'REQUEST_REMOVE_MEAL';
export const RECEIVE_REMOVE_MEAL = 'RECEIVE_REMOVE_MEAL';

/*
  return fetch('https://jsonplaceholder.typicode.com/meals?userId=1')
  .then((response) => response.json());
*/

export const requestMeals = () => ({
  type: REQUEST_MEALS
});

export const receiveMeals = (meals) => ({
  type: RECEIVE_MEALS,
  meals
});

const fetchMeals = () => (dispatch) => {
  dispatch(requestMeals());

  return fetch('http://localhost:3000/meals')
    .then((response) => response.json())
    .then((meals) => {
      dispatch(receiveMeals(meals))
    });
};

const shouldFetchMeals = (state) => {
  return !state.meals || !state.meals.length;
};

export const requestRemoveMeal = (time) => ({
  type: REQUEST_REMOVE_MEAL,
  time
});

export const receiveRemoveMeal = (time) => ({
  type: RECEIVE_REMOVE_MEAL,
  time
});

export const removeMeal = (time) => (dispatch) => {
  dispatch(requestRemoveMeal(time));

  return fetch(`http://localhost:3000/meals?time=${time}`, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then((json) => dispatch(receiveRemoveMeal(json.time)));
};

export const fetchMealsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchMeals(getState())) {
    dispatch(fetchMeals());
  } else {
    Promise.resolve();
  }
};
