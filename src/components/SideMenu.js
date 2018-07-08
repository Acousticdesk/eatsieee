import React from 'react';
import { Link } from 'react-router-dom';


export default ({isShown, onClick, onLinkClick}) => {
  return (
    <div onClick={onClick} className={`l-side-menu skin ${isShown ? 'show' : ''}`}>
      <ul className="list">
        <li className="list__item list__item--block skin">
          <Link onClick={onLinkClick} to="/">Home</Link>
        </li>
        <li className="list__item list__item--block skin">
          <Link onClick={onLinkClick} to="/add">Add Meal</Link>
        </li>
      </ul>
    </div>
  );
};
