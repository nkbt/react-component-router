import React from 'react';
import {render} from 'react-dom';
import {Router, useLocationSync} from '~';
import {App} from './App';

import './global.css';

function WithLocation() {
  useLocationSync();
  return <App />;
}

export const bootstrap = async () => {
  const {whatever} = JSON.parse(document.querySelector('#config').innerHTML);
  console.log('CONFIG', {whatever});

  render(
    <React.StrictMode>
      <Router search={document.location.search} params={{page: 'home'}}>
        <WithLocation />
      </Router>
    </React.StrictMode>,
    document.querySelector('#app')
  );
};
