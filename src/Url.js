import React from 'react';
import PropTypes from 'prop-types';
import {UrlContainer} from './UrlContainer';


class A extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };


  static defaultProps = {
    children: undefined
  };


  render() {
    const {children, ...props} = this.props;

    return (
      <a {...props}>{children}</a>
    );
  }
}


export class Url extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string,
    query: PropTypes.object
  };


  static defaultProps = {
    href: undefined,
    query: undefined
  };


  render() {
    const {query, href, ...props} = this.props;

    return (
      <UrlContainer {...{query, pathname: href}}>
        {urlProps => <A {...urlProps} {...props} />}
      </UrlContainer>
    );
  }
}
