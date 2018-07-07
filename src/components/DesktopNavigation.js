import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="l-header__navigation">
      <Link className="l-header__link default" to="/">Home</Link>
      {' '}
      <Link className="l-header__link default" to="/add">Add Meal</Link>
    </nav>
  );
};
