import React from 'react';

export default ({order, title}) => {
  return (
    <li className="list__item list__item--flex">
      <div className="list__bullet skin">{order}</div>
      <div className="list__item-content skin">{title}</div>
    </li>
  );
};
