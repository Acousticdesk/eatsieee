export const CHANGE_NEW_MEAL = 'CHANGE_NEW_MEAL';
export const REQUEST_NEW_MEAL = 'REQUEST_NEW_MEAL';
export const RECEIVE_NEW_MEAL = 'RECEIVE_NEW_MEAL';

export const changeNewMeal = (value) => ({
  type: CHANGE_NEW_MEAL,
  dishes: value.dishes,
  time: value.time
});

export const requestNewMeal = () => ({
  type: REQUEST_NEW_MEAL
});

export const receiveNewMeal = () => ({
  type: RECEIVE_NEW_MEAL
});

export const postMeal = (meal) => (dispatch) => {
  dispatch(requestNewMeal());

  return fetch('http://localhost:3000/meals', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(meal)
  })
    .then((response) => dispatch(receiveNewMeal()));
};
