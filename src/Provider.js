import React from 'react';


export const Provider = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired
  },


  childContextTypes: {
    store: React.PropTypes.object
  },


  getChildContext() {
    return {store: this.props.store};
  },


  render() {
    return React.Children.only(this.props.children);
  }
});
