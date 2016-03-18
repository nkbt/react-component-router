import test from 'tape';
import {Url} from '../src/Url';

test('Url', t => {
  t.ok(Url instanceof Function, 'should be function');
  t.end();
});
