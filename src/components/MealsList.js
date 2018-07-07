import React from 'react';

export default function MealsList ({meals, shouldDisplay}) {
  return (
    <React.Fragment>
      {shouldDisplay ?
          <div className="l-list">{meals}</div> :
          <p className="p">Press button to see what tasties have you eaten</p>}
    </React.Fragment>
  );
}
