import React from 'react';
import {actions, href, isActive} from 'component-router';


export const UrlContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired,
    query: React.PropTypes.object,
    pathname: React.PropTypes.string
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


  isLMB(event) {
    const {button, metaKey, shiftKey, ctrlKey, altKey} = event;

    return button === 0 && !metaKey && !shiftKey && !ctrlKey && !altKey;
  },


  onClick({query, pathname}) {
    return event => {
      // React only on normal left-button clicks
      if (this.isLMB(event)) {
        event.preventDefault();
        this.context.getComponentRouterStore().dispatch(actions.navigateTo({query, pathname}));
      }
    };
  },


  onChange() {
    this.replaceState(this.context.getComponentRouterState());
  },


  render() {
    const {children: render, query, pathname} = this.props;

    return render({
      href: href(this.state, {query, pathname}),
      onClick: this.onClick({query, pathname}),
      'data-active': isActive(this.state, {query, pathname})
    });
  }
});
