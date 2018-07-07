import React from 'react';

export default ({title, items, removeMeal}) => (
  <article className="card card--3 skin">
    <div className="card__content">
      <h2>
        {title}
      </h2>
      <ul className="list">
        {items}
      </ul>
    </div>
    <div className="card__footer">
      <button className="btn btn--left-offset skin tertiary" onClick={removeMeal}>Remove</button>
    </div>
  </article>
);
