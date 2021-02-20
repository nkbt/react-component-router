import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useCleanHref, useIsActive, useNavigate} from '~';
import css from './A.css';

export function A({query, children, ...rest}) {
  const navigate = useNavigate();

  const onClick = useCallback(
    e => {
      e.preventDefault();
      navigate(query);
    },
    [navigate, query]
  );

  const href = useCleanHref(query);
  const isActive = useIsActive(query);

  return (
    <a className={css.e} href={href} onClick={onClick} data-active={isActive} {...rest}>
      {children}
    </a>
  );
}
A.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  query: PropTypes.object,
  children: PropTypes.node
};
A.defaultProps = {
  query: {},
  children: undefined
};
