import React from 'react';
import {actions, href, isActive} from 'component-router';
import {RouteContainer} from './';


export const UrlContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired,
    query: React.PropTypes.object,
    pathname: React.PropTypes.string
  },


  contextTypes: {
    getComponentRouterStore: React.PropTypes.func
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
        this.context.getComponentRouterStore()
          .dispatch(actions.navigateTo({query, pathname}));
      }
    };
  },


  render() {
    const {children: render, query, pathname} = this.props;

    return (
      <RouteContainer>
        {state => render({
          href: href(state, {query, pathname}),
          onClick: this.onClick({query, pathname}),
          'data-active': isActive(state, {query, pathname})
        })}
      </RouteContainer>
    );
  }
});
