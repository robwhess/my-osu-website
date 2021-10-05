/*
 * This component is a button.
 */

import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const Btn = styled.button`
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #d54f1e;
  border-radius: 3px;
  background-color: #d54f1e;
  color: #fff;
  font-weight: 200;
  font-size: ${props => props.small ? '14px' : 'initial'};
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  &:hover {
    background-color: rgba(213, 79, 30, 0.75);
    text-decoration: none;
  }
`;

const BtnLink = Btn.withComponent('a');

function Button({ asLink, small, children, ...props }) {
  const BtnComponent = asLink ? BtnLink : Btn;
  return <BtnComponent small={small} {...props}>{children}</BtnComponent>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asLink: PropTypes.bool,
  small: PropTypes.bool
};

export default Button;
