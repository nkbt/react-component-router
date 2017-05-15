import React from 'react';
import PropTypes from 'prop-types';
import {UrlContainer} from './UrlContainer';


export const Url = ({query, href, children, ...props}) => (
  <UrlContainer {...{query, pathname: href}}>
    {urlProps => <a {...urlProps} {...props}>{children}</a>}
  </UrlContainer>
);
Url.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  query: PropTypes.object
};
Url.defaultProps = {
  children: undefined,
  href: undefined,
  query: undefined
};
