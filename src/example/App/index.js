import React from 'react';
import {locationHistory as location} from 'component-router';
import {Url, RouteContainer, componentRouterHandler, pathnameRouterHandler, Provider} from '../..';
import {createStore} from './store';
import {name} from '../../../package.json';
import css from './App.css';


const store = createStore();
location({store, namespace: 'componentRouter'});


const NotFound = () => <h2>Not Found.</h2>;


const ComponentRouteHandler = componentRouterHandler({
  namespace: 'component',
  defaultValue: 'bla',
  notFound: NotFound
})({
  bla: () => <h3>Bla</h3>,
  baz: () => <h3>Baz</h3>
});


const Bar = () => (
  <div className={css.content}>
    <h2>Bar</h2>
  </div>
);


const Foo = ({...props}) => (
  <div className={css.content}>
    <h2>Foo</h2>
    <section>
      <ComponenentLinks />
    </section>
    <section className={css.content}>
      <ComponentRouteHandler {...props} />
    </section>
  </div>
);


const PathnameRouteHandler = pathnameRouterHandler({
  notFound: NotFound
})({
  '/foo': Foo,
  '/bar': Bar
});


const GlobalLinks = () => (
  <ul>
    <li>
      <Url href="/foo" className={css.tab}>/foo</Url>
    </li>
    <li>
      <Url href="/bar" className={css.tab}>/bar</Url>
    </li>
  </ul>
);


const ComponenentLinks = () => (
  <span>
    <Url query={{component: 'bla'}} className={css.link}>component: bla</Url>
    <Url query={{component: 'baz'}} className={css.link}>component: baz</Url>
  </span>
);


const Header = () => (
  <header className={css.header}>
    <nav className={css.nav}>
      <GlobalLinks />
    </nav>
  </header>
);


const App = React.createClass({
  render() {
    return (
      <Provider store={store} namespace="componentRouter">
        <div className={css.app}>
          <h1>{name}</h1>
          <RouteContainer>
            {routingState => (
              <div>
                <Header />
                <PathnameRouteHandler
                  pathname={routingState.pathname}
                  route={routingState.currentRoute.route}
                  params={{...routingState.currentRoute.params, ...routingState.query}} />
                <section className={css.content}>
                  Routing state:
                  <pre>{JSON.stringify(routingState, null, 2)}</pre>
                </section>
              </div>
            )}
          </RouteContainer>
        </div>
      </Provider>
    );
  }
});


export default App;
