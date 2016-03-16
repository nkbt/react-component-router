import test from 'tape';
import App from '../../src/example/App/index';


test('App', t => {
  t.ok(App instanceof Function, 'should be function');
  t.end();
});
