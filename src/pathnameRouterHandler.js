import React from 'react';
import PropTypes from 'prop-types';
import {actions} from 'component-router';


export const pathnameRouterHandler = ({notFound}) =>
  handlers => class extends React.Component {
    static propTypes = {
      route: PropTypes.string,
      params: PropTypes.object.isRequired
    };


    static defaultProps = {
      route: null
    };


    static contextTypes = {
      getComponentRouterStore: PropTypes.func
    };


    componentDidMount() {
      Object.keys(handlers).forEach(route =>
        this.context.getComponentRouterStore().dispatch(actions.addRoute(route)));
    }


    componentWillUnmount() {
      Object.keys(handlers).forEach(route =>
        this.context.getComponentRouterStore().dispatch(actions.removeRoute(route)));
    }


    render() {
      const {route, params, ...props} = this.props;
      const currentValue = route;

      if (currentValue === null || !(currentValue in handlers)) {
        return notFound ? React.createElement(notFound) : null;
      }

      return React.createElement(handlers[currentValue], {route, params, ...props});
    }
  };
