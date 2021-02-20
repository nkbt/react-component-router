import React from 'react';
import {useValue} from '~';
import {A} from '../A';
import {Menu} from '../Menu';
import {Home} from './Home';
import {Foo} from './Foo';
import {Bar} from './Bar';

import css from './App.css';

export function App() {
  const page = useValue('page');

  return (
    <div className={css.e}>
      <Menu>
        <A query={{page: 'home'}}>Home</A>
        <A query={{page: 'foo'}}>Foo</A>
        <A query={{page: 'bar'}}>Bar</A>
      </Menu>
      <section className={css.content}>
        {page === 'home' && <Home />}
        {page === 'foo' && <Foo />}
        {page === 'bar' && <Bar />}
      </section>
    </div>
  );
}
