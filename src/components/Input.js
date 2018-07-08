import React from 'react';
import { TIME_FIELD_NAME } from '../enums';

export default ({value, focused, onChange, onFocus, onBlur}) => {
  const focusClass = focused ? 'skin--focused' : '';

  return (
    <div className={`input skin ${focusClass}`}>
      <label className={`input__label skin ${focusClass}`}>Time</label>
      <input
        className="input__field skin"
        name={TIME_FIELD_NAME}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type="text" />
    </div>
  );
};
