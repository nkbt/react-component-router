import {bootstrap} from './bootstrap';

bootstrap();

if (module.hot) {
  module.hot.accept('./bootstrap', () => {
    bootstrap();
  });
}
