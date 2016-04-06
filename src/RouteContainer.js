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
    return this.context.getComponentRouterState();
  },


  componentDidMount() {
    this.unsubscribe = this.context.getComponentRouterStore().subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.replaceState(this.context.getComponentRouterState());
  },


  render() {
    const {children: render} = this.props;

    return render(this.state);
  }
});
