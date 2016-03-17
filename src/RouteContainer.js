import React from 'react';


export const RouteContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired
  },


  contextTypes: {
    store: React.PropTypes.object
  },


  getInitialState() {
    return this.context.store.getState();
  },


  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.replaceState(this.context.store.getState());
  },


  render() {
    const {children: render} = this.props;

    return render(this.state);
  }
});
