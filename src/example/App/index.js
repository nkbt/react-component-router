import React from 'react';
import {locationHistory as location} from 'component-router';
import {Url, RouteContainer, componentRouterHandler, pathnameRouterHandler} from '../..';
import css from './App.css';


const ComponentHeader = React.createClass({
  render() {
    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <Url query={{page: 'quickstart'}} className={css.tab}>Quickstart</Url>
            </li>
            <li>
              <Url query={{page: 'foobar'}} className={css.tab}>FooBar</Url>
            </li>
            <li className={css.github}>
              <a
                href="https://github.com/in-flux/component-router"
                target="_blank"
                className={css.tab}>GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const PathnameHeader = React.createClass({
  render() {
    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <Url href="/quickstart" className={css.tab}>Quickstart</Url>
            </li>
            <li>
              <Url href="/foobar" className={css.tab}>FooBar</Url>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const NotFound = () => <h1>Not Found.</h1>;


const ComponentRouteHandler = componentRouterHandler({
  namespace: 'page',
  defaultValue: 'quickstart',
  notFound: NotFound
})({
  quickstart: () => <p>Quickstart</p>,
  foobar: () => <p>FooBar</p>
});


const PathnameRouteHandler = pathnameRouterHandler({
  notFound: NotFound
})({
  '/quickstart': () => <p>Quickstart</p>,
  '/foobar': () => <p>FooBar</p>
});


const App = React.createClass({
  componentDidMount() {
    this.unsubscribe = location();
  },


  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    return (
      <div className={css.app}>
        <RouteContainer>
          {({query, currentRoute: {route, params}}) => (
            <div>
              <h1>ComponentRouteHandler</h1>
              <ComponentHeader />
              <ComponentRouteHandler params={query} />

              <h1>PathnameRouteHandler</h1>
              <PathnameHeader />
              <PathnameRouteHandler route={route} params={params} />
            </div>
          )}
        </RouteContainer>


      </div>
    );
  }
});


export default App;
