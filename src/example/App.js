import React from 'react';
import Component from '../index';
import css from './App.css';


const App = React.createClass({
  render() {
    return (
      <div className={css.app}>
        <Component />
      </div>
    );
  }
});


export default App;
