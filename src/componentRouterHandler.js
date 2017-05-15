import React from 'react';
import PropTypes from 'prop-types';
import {actions} from 'component-router';


export const componentRouterHandler = ({namespace, notFound, defaultValue}) =>
  handlers => class extends React.Component {
    static propTypes = {
      params: PropTypes.object.isRequired
    };


    static contextTypes = {
      getComponentRouterStore: PropTypes.func
    };


    componentDidMount() {
      if (defaultValue) {
        this.context.getComponentRouterStore()
          .dispatch(actions.addDefaultParam(namespace, defaultValue));
      }
    }


    componentWillUnmount() {
      if (defaultValue) {
        this.context.getComponentRouterStore()
          .dispatch(actions.removeParam(namespace));
      }
    }


    render() {
      const {params, ...props} = this.props;

      if (!(namespace in params) || !(params[namespace] in handlers)) {
        return notFound ? React.createElement(notFound) : null;
      }

      return React.createElement(handlers[params[namespace]], {params, ...props});
    }
  };
