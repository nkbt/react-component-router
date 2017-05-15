import React from 'react';
import {actions} from 'component-router';


export const componentRouterHandler = ({namespace, notFound, defaultValue}) =>
  handlers =>
    React.createClass({
      propTypes: {
        params: React.PropTypes.object.isRequired
      },


      contextTypes: {
        getComponentRouterStore: React.PropTypes.func
      },


      componentDidMount() {
        if (defaultValue) {
          this.context.getComponentRouterStore()
            .dispatch(actions.addDefaultParam(namespace, defaultValue));
        }
      },


      componentWillUnmount() {
        if (defaultValue) {
          this.context.getComponentRouterStore()
            .dispatch(actions.removeParam(namespace));
        }
      },


      render() {
        const {params, ...props} = this.props;

        if (!(namespace in params) || !(params[namespace] in handlers)) {
          return notFound ? React.createElement(notFound) : null;
        }

        return React.createElement(handlers[params[namespace]], {params, ...props});
      }
    });
