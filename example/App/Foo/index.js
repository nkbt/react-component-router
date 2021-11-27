import React, {useEffect} from 'react';
import {useAdd, useValue, useRemove} from '~';
import {Menu} from '../../Menu';
import {A} from '../../A';

import css from './Foo.css';

export function Foo() {
  const addDefaultParam = useAdd();
  const removeDefaultParam = useRemove();

  useEffect(() => {
    addDefaultParam({foo: 1});
    return () => removeDefaultParam({foo: 1});
  }, [addDefaultParam, removeDefaultParam]);

  const subpage = parseInt(useValue('foo'), 10);
  return (
    <div className={css.e}>
      <h1>Foo</h1>
      <Menu>
        {[1, 2, 3, 4, 5].map(foo => (
          <A key={foo} query={{foo}}>
            Foo {foo}
          </A>
        ))}
      </Menu>
      <div className={css.content}>
        {[1, 2, 3, 4, 5].map(foo => subpage === foo && <h2 key={foo}>Foo {foo}</h2>)}
      </div>
    </div>
  );
}
