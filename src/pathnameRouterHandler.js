import React from 'react';
import {actions, store} from 'component-router';


export const pathnameRouterHandler = ({notFound}) =>
  handlers =>
    React.createClass({
      propTypes: {
        route: React.PropTypes.string.isRequired,
        params: React.PropTypes.object.isRequired
      },


      componentDidMount() {
        Object.keys(handlers).forEach(route =>
          store.dispatch(actions.addRoute(route)));
      },


      componentWillUnmount() {
        Object.keys(handlers).forEach(route =>
          store.dispatch(actions.removeRoute(route)));
      },


      render() {
        const {route, params, ...props} = this.props;
        const currentValue = route;

        if (currentValue === undefined || !handlers.hasOwnProperty(currentValue)) {
          return notFound ? React.createElement(notFound) : null;
        }

        return React.createElement(handlers[currentValue], {...params, ...props});
      }
    });
