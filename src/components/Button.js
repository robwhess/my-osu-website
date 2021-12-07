/** @jsxImportSource @emotion/react */
/*
 * This component is a button.
 */

import { css } from '@emotion/react/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isExternalLink from '../lib/isExternalLink';

function Button({ href, secondary, small, children, ...props }) {
  const styles = css`
    display: inline-block;
    padding: 4px 8px;
    border: 2px solid #d54f1e;
    border-radius: 3px;
    background-color: ${secondary ? '#fff' : '#d54f1e'};
    color: ${secondary ? '#d54f1e' : '#fff'};
    font-weight: 200;
    font-size: ${small ? '14px' : 'initial'};
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    &:hover {
      background-color: ${secondary ? 'rgba(213, 79, 30, 0.1)' : 'rgba(213, 79, 30, 0.75)'};
      text-decoration: none;
    }
  `;

  let BtnComponent = 'button';
  if (href && isExternalLink(href)) {
    BtnComponent = 'a';
    props.href = href;
  } else if (href) {
    BtnComponent = Link;
    props.to = href;
  }
  return <BtnComponent css={styles} {...props}>{children}</BtnComponent>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  secondary: PropTypes.bool,
  small: PropTypes.bool
};

export default Button;
