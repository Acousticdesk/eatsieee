import React from 'react';
import Input from '../components/Input';

export default function ({onMealInputChange, onMealInputFocus, isMealInputFocused, onMealInputBlur, onAddMeal, value}) {
  return (
    <React.Fragment>
      <fieldset>
        <legend>Dishes:</legend>
        <textarea
            name="dishes"
            onChange={onMealInputChange}
            autoFocus="m">
            {value.dishes}
        </textarea>
        <br/>
        <i>Example: Chicken, Eggplants, tomatoes, Lemon Sauce</i>
      </fieldset>
      <br/>
      <fieldset>
        <Input
          focused={isMealInputFocused}
          value={value.time}
          onChange={onMealInputChange}
          onFocus={onMealInputFocus}
          onBlur={onMealInputBlur}
        />
        <br/>
        <i>Example: 12:34AM</i>
      </fieldset>
      <br/>
      <button onClick={onAddMeal} className="btn skin default">Add A Meal</button>
    </React.Fragment>
  );
}
