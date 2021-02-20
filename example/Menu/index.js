import React from 'react';
import PropTypes from 'prop-types';
import css from './Menu.css';

export function Menu({children}) {
  return (
    <ul className={css.e}>
      {React.Children.map(children, item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired
};
