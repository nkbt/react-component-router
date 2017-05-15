import React from 'react';
import {actions} from 'component-router';


export const pathnameRouterHandler = ({notFound}) =>
  handlers =>
    React.createClass({
      propTypes: {
        route: React.PropTypes.string,
        params: React.PropTypes.object.isRequired
      },


      getDefaultProps() {
        return {
          route: null
        };
      },


      contextTypes: {
        getComponentRouterStore: React.PropTypes.func
      },


      componentDidMount() {
        Object.keys(handlers).forEach(route =>
          this.context.getComponentRouterStore().dispatch(actions.addRoute(route)));
      },


      componentWillUnmount() {
        Object.keys(handlers).forEach(route =>
          this.context.getComponentRouterStore().dispatch(actions.removeRoute(route)));
      },


      render() {
        const {route, params, ...props} = this.props;
        const currentValue = route;

        if (currentValue === null || !(currentValue in handlers)) {
          return notFound ? React.createElement(notFound) : null;
        }

        return React.createElement(handlers[currentValue], {route, params, ...props});
      }
    });
