import React, {useEffect} from 'react';
import {useAdd, useValue} from '~';
import {Menu} from '../../Menu';
import {A} from '../../A';

import css from './Bar.css';

export function Bar() {
  const subpage = useValue('bar');

  const addDefaultParam = useAdd();

  useEffect(() => {
    addDefaultParam({bar: 'no'});
  }, [addDefaultParam]);

  return (
    <div className={css.e}>
      <h1>Foo</h1>
      <Menu>
        {['yes', 'no'].map(bar => (
          <A key={bar} query={{bar}}>
            Bar {bar}
          </A>
        ))}
      </Menu>
      <div className={css.content}>
        {['yes', 'no'].map(bar => subpage === bar && <h2 key={bar}>Bar {bar}</h2>)}
      </div>
    </div>
  );
}
