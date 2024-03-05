/** @jsxImportSource @emotion/react */
/*
 * This component is a button.
 */

import { css } from '@emotion/react/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isExternalLink from '../lib/isExternalLink';

function Button({ href, secondary, tertiary, small, fullWidth, borderless, children, ...props }) {
  const styles = css`
    display: inline-block;
    width: ${fullWidth ? '100%' : 'init'};
    padding: 4px 8px;
    border: ${borderless ? '2px solid transparent' : tertiary ? '2px solid #272727' : '2px solid #e54f1e'};
    border-radius: 3px;
    background-color: ${secondary || tertiary ? '#fff' : '#e54f1e'};
    color: ${secondary ? '#e54f1e' : tertiary ? '#272727' : '#fff'};
    font-weight: 200;
    font-size: ${small ? '14px' : 'initial'};
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    &:hover {
      background-color: ${secondary ? '#fff1eb' : tertiary ? '#efefef' : '#ec7d55'};
      border-color: ${borderless ? 'transparent' : secondary ? '#e54f1e' : tertiary ? '#272727' : '#ec7d55'};
      text-decoration: none;
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${secondary ? '#434343' : tertiary ? '#434343' : '#434343'};
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
  fullWidth: PropTypes.bool,
  borderless: PropTypes.bool,
  small: PropTypes.bool
};

export default Button;
