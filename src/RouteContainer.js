import React from 'react';


export const RouteContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired
  },


  contextTypes: {
    getComponentRouterStore: React.PropTypes.func,
    getComponentRouterState: React.PropTypes.func
  },


  getInitialState() {
    return {routerState: this.context.getComponentRouterState()};
  },


  componentWillMount() {
    this.unsubscribe = this.context.getComponentRouterStore()
      .subscribe(this.onChange);
  },


  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  },


  onChange() {
    if (this.unsubscribe) {
      this.setState({routerState: this.context.getComponentRouterState()});
    }
  },


  render() {
    const {children: render} = this.props;
    const {routerState} = this.state;

    return render(routerState);
  }
});
