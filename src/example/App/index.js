import React from 'react';
import {locationHistory as location, createStore} from 'component-router';
import {Url, RouteContainer, componentRouterHandler, pathnameRouterHandler, Provider} from '../..';
import css from './App.css';
import {name} from '../../../package.json';


const Header = React.createClass({
  render() {
    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <Url href="/foo" className={css.tab}>/foo</Url>
            </li>
            <li>
              <Url href="/bar" className={css.tab}>/bar</Url>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const Component = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },


  render() {
    const {params} = this.props;
    console.log('index.js:36    params', params);

    return (
      <div className={css.content}>
        <section>
          <Url query={{component: 'bla'}} className={css.link}>component: bla</Url>
          <Url query={{component: 'baz'}} className={css.link}>component: baz</Url>
        </section>
        <section>
          Params:
          <pre>{JSON.stringify(params, null, 2)}</pre>
        </section>
      </div>
    );
  }
});


const NotFound = () => <h1>Not Found.</h1>;


const ComponentRouteHandler = componentRouterHandler({
  namespace: 'component',
  defaultValue: 'bla',
  notFound: NotFound
})({
  bla: Component,
  baz: Component
});


const PathnameRouteHandler = pathnameRouterHandler({
  notFound: NotFound
})({
  '/foo': ComponentRouteHandler,
  '/bar': () => <div className={css.content}>/bar</div>
});


const App = React.createClass({
  componentWillMount() {
    this.store = createStore();
  },


  componentDidMount() {
    this.unsubscribe = location({store: this.store});
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  render() {
    return (
      <Provider store={this.store}>
        <div className={css.app}>
          <header>
            <h1>{name}</h1>
          </header>
          <RouteContainer>
            {({pathname, query, currentRoute: {route, params}}) => (
              <div>
                <Header />
                <PathnameRouteHandler
                  pathname={pathname}
                  route={route}
                  params={{...params, ...query}} />
              </div>
            )}
          </RouteContainer>
        </div>
      </Provider>
    );
  }
});


export default App;
