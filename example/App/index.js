import React from 'react';
import {locationHistory, locationHash} from 'component-router';
import {
  Url,
  RouteContainer,
  componentRouterHandler,
  pathnameRouterHandler,
  Provider
} from '../../src';
import {createStore} from './store';


const store = createStore();
if (process.env.HISTORY === 'HASH') {
  // When publishing to GitHub Pages we cannon use HTML5 history navigation
  locationHash({store, namespace: 'componentRouter'});
} else {
  locationHistory({store, namespace: 'componentRouter'});
}


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
  <div className="content">
    <h2>Bar</h2>
  </div>
);


const Foo = props => (
  <div className="content">
    <h2>Foo</h2>
    <section>
      <ComponenentLinks />
    </section>
    <section className="content">
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
      <Url href="/foo" className="tab">/foo</Url>
    </li>
    <li>
      <Url href="/bar" className="tab">/bar</Url>
    </li>
  </ul>
);


const ComponenentLinks = () => (
  <span>
    <Url query={{component: 'bla'}} className="link">component: bla</Url>
    <Url query={{component: 'baz'}} className="link">component: baz</Url>
  </span>
);


const Header = () => (
  <header className="header">
    <nav className="nav">
      <GlobalLinks />
    </nav>
  </header>
);


const App = () => (
  <Provider store={store} namespace="componentRouter">
    <div className="app">
      <h1>react-component-router</h1>
      <RouteContainer>
        {routingState => (
          <div>
            <Header />
            <PathnameRouteHandler
              pathname={routingState.pathname}
              route={routingState.currentRoute.route}
              params={{...routingState.currentRoute.params, ...routingState.query}} />
            <section className="content">
              Routing state:
              <pre>{JSON.stringify(routingState, null, 2)}</pre>
            </section>
          </div>
        )}
      </RouteContainer>
    </div>
  </Provider>
);


export default App;
