import React from 'react';

export default function ({onMealInputChange, onAddMeal, value}) {
  return (
    <React.Fragment>
      <fieldset>
        <legend>Dishes:</legend>
        <textarea
            data-type="dishes"
            onChange={onMealInputChange}
            autoFocus="m">
            {value.dishes}
        </textarea>
        <br/>
        <i>Example: Chicken, Eggplants, tomatoes, Lemon Sauce</i>
      </fieldset>
      <br/>
      <fieldset>
        <legend>Time:</legend>
        <input
            data-type="time"
            onChange={onMealInputChange}
            value={value.time}
            type="text" />
        <br/>
        <i>Example: 12:34AM</i>
      </fieldset>
      <br/>
      <button onClick={onAddMeal} className="btn skin default">Add A Meal</button>
    </React.Fragment>
  );
}
