import React from 'react';
import {actions} from 'component-router';


export const pathnameRouterHandler = ({notFound}) =>
  handlers =>
    React.createClass({
      propTypes: {
        route: React.PropTypes.string.isRequired,
        params: React.PropTypes.object.isRequired
      },


      contextTypes: {
        store: React.PropTypes.object
      },


      componentDidMount() {
        Object.keys(handlers).forEach(route =>
          this.context.store.dispatch(actions.addRoute(route)));
      },


      componentWillUnmount() {
        Object.keys(handlers).forEach(route =>
          this.context.store.dispatch(actions.removeRoute(route)));
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
