import React from 'react';
import PropTypes from 'prop-types';
import {actions, href, isActive} from 'component-router';
import {RouteContainer} from './RouteContainer';


export class UrlContainer extends React.PureComponent {
  static contextTypes = {
    getComponentRouterStore: PropTypes.func
  };


  static propTypes = {
    children: PropTypes.func.isRequired,
    query: PropTypes.object,
    pathname: PropTypes.string
  };


  static defaultProps = {
    query: undefined,
    pathname: undefined
  };


  onClick = event => {
    // React only on normal left-button clicks
    if (this.isLMB(event)) {
      const {query, pathname} = this.props;

      event.preventDefault();
      this.context.getComponentRouterStore()
        .dispatch(actions.navigateTo({query, pathname}));
    }
  };


  isLMB = event => {
    const {
      button, metaKey, shiftKey, ctrlKey, altKey
    } = event;

    return button === 0 && !metaKey && !shiftKey && !ctrlKey && !altKey;
  };


  render() {
    const {children: render, query, pathname} = this.props;

    return (
      <RouteContainer>
        {state => render({
          href: href(state, {query, pathname}),
          onClick: this.onClick,
          'data-active': isActive(state, {query, pathname})
        })}
      </RouteContainer>
    );
  }
}
