import React from 'react';

import MealsList from '../components/MealsList';

export default function (props) {
  const {meals, fetchMealsIfNeeded, shouldDisplayList} = props;

  return (
    <React.Fragment>
      <p className="l-h1">What have I eaten today 🤔:</p>
      <MealsList shouldDisplay={shouldDisplayList} meals={meals} />
      <button className="btn skin default" onClick={fetchMealsIfNeeded}>Show my meals</button>
    </React.Fragment>
  );
}
