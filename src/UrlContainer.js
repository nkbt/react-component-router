import React from 'react';
import {actions, href, isActive} from 'component-router';


export const UrlContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired,
    query: React.PropTypes.object,
    pathname: React.PropTypes.string
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


  isLMB(event) {
    const {button, metaKey, shiftKey, ctrlKey, altKey} = event;

    return button === 0 && !metaKey && !shiftKey && !ctrlKey && !altKey;
  },


  onClick({query, pathname}) {
    return event => {
      // React only on normal left-button clicks
      if (this.isLMB(event)) {
        event.preventDefault();
        this.context.store.dispatch(actions.navigateTo({query, pathname}));
      }
    };
  },


  onChange() {
    this.replaceState(this.context.store.getState());
  },


  render() {
    const {children: render, query, pathname} = this.props;
    const {store} = this.context;

    return render({
      href: href(store.getState(), {query, pathname}),
      onClick: this.onClick({query, pathname}),
      'data-active': isActive(store.getState(), {query, pathname})
    });
  }
});
