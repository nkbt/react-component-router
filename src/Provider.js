import React from 'react';
import PropTypes from 'prop-types';


export class Provider extends React.PureComponent {
  static childContextTypes = {
    getComponentRouterStore: PropTypes.func,
    getComponentRouterState: PropTypes.func
  };


  static defaultProps = {
    namespace: 'componentRouter'
  };


  static propTypes = {
    store: PropTypes.object.isRequired,
    namespace: PropTypes.string,
    children: PropTypes.element.isRequired
  };


  getChildContext() {
    const {store, namespace} = this.props;

    return {
      getComponentRouterStore: () => store,
      getComponentRouterState: () => store.getState()[namespace]
    };
  }


  render() {
    return React.Children.only(this.props.children);
  }
}
