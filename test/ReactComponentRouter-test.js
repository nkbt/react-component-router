import test from 'tape';
import ReactComponentRouter from '../src/ReactComponentRouter';

test('ReactComponentRouter', t => {
  t.ok(ReactComponentRouter instanceof Function, 'should be function');
  t.end();
});
