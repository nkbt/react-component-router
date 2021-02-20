import test from 'tape';
import {initialState} from './initialState';

test('Url', t => {
  t.deepEqual(
    initialState,
    {query: {}, params: {}, search: '', cleanQuery: {}, cleanSearch: ''},
    'should be empty state'
  );
  t.end();
});
