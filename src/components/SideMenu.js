import React from 'react';
import { Link } from 'react-router-dom';


export default ({isShown, onClick}) => {
  return (
    <div onClick={onClick} className={`l-side-menu skin ${isShown ? 'show' : ''}`}>
      <ul className="list">
        <li className="list__item list__item--block skin">
          <Link to="/">Home</Link>
        </li>
        <li className="list__item list__item--block skin">
          <Link to="/add">Add Meal</Link>
        </li>
      </ul>
    </div>
  );
};
