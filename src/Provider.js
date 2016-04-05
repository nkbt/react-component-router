import React from 'react';


export const Provider = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    namespace: React.PropTypes.string,
    children: React.PropTypes.element.isRequired
  },


  childContextTypes: {
    getComponentRouterStore: React.PropTypes.func,
    getComponentRouterState: React.PropTypes.func
  },


  getDefaultProps() {
    return {
      namespace: 'componentRouter'
    };
  },


  getChildContext() {
    const {store, namespace} = this.props;

    return {
      getComponentRouterStore: () => store,
      getComponentRouterState: () => store.getState()[namespace]
    };
  },


  render() {
    return React.Children.only(this.props.children);
  }
});
