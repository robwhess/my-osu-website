/*
 * This file contains a navbar component that can be used for both the primary
 * site navbar and sub-navbars.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import breakpoints from '../lib/breakpoints';
import isExternalLink from '../lib/isExternalLink';

const NavbarContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  border-bottom: ${props => props.subnav ? '1px solid #eee' : 'none'};
  display: flex;
  align-items: center;
  color: ${props => props.subnav ? '#333' : '#ddd'};
  background-color: ${props => props.subnav ? '#fff' : '#333'};
  font-weight: 100;
  font-size: 20px;
  a {
    color: inherit;
    display: block;
    &:hover {
      text-decoration: none;
    }
  }
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      display: inline-block;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${(props) =>
      props.subnav ? "#434343" : "#323232"};
    color: #fff;
    border-bottom: ${(props) =>
      props.subnav ? '#333' : 'none'};
  }
`;

const NavbarHeading = styled.div`
  flex: 0 0 auto;
  display: inline-block;
  a {
    padding: 10px 0;
  }
`;

const Nav = styled.nav`
  flex: 1 0 auto;
  a {
    padding: 10px 20px;
  }
  @media (max-width: ${breakpoints[0]}px) {
    a {
      padding: 0;
      margin: 10px 0;
    }
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  @media (max-width: ${breakpoints[0]}px) {
    height: ${props => props.collapsed ? 0 : 'auto'};
    overflow: hidden;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  position: relative;
  float: ${props => props.right ? 'right' : 'initial'};
  &:hover {
    background-color: #fff;
    color: #333;
  }
  a {
    &.active {
      box-shadow: inset 0 -2px 0 #d54f1e;
    }
    &:hover {
      background-color: rgba(213, 79, 30, 0.2);
      color: #333;
    }
  }

  @media (max-width: ${breakpoints[0]}px) {
    display: block;
    float: initial;
    position: relative;
    &:hover, a:hover {
      background-color: inherit;
      color: inherit;
    }
    a.active {
      box-shadow: none;
    }
  }
`;

const NavMenu = styled.ul`
  display: none;
  padding: 0;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  list-style-type: none;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.25);
  ${NavItem}:hover & {
    display: block;
  }
  @media (max-width: ${breakpoints[0]}px) {
    position: static;
    display: initial;
    font-size: inherit;
    background-color: inherit;
    color: inherit;
    box-shadow: none;
  }
`;

const NavMenuItem = styled.li `
  a {
    padding-left: 30px;
    &:hover {
      background-color: rgba(213, 79, 30, 0.2);
      color: #333;
    }
  }
  @media (max-width: ${breakpoints[0]}px) {
    a {
      margin-left: 20px;
      &:hover {
        background-color: inherit;
        color: inherit;
      }
    }
  }
`;

const CollapseButton = styled.button`
  display: none;
  padding: 0 12px;
  border: none;
  font-size: 18px;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
  &:focus {
    outline:none
  }
  @media (max-width: ${breakpoints[0]}px) {
    display: inline-block;
    transform: ${props => props.collapsed ? 'rotate(-180deg)' : 'none'};
    transition: transform 150ms ease;
  }
`;

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleNavbarCollapsed = this.toggleNavbarCollapsed.bind(this);
    this.generateNavItem = this.generateNavItem.bind(this);
  }

  toggleNavbarCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  generateNavItem(link, key) {
    const content = link.faIcon ? <FontAwesomeIcon icon={link.faIcon} /> : link.title;
    return (
      <NavItem key={key} right={link.isRight} subnav={this.props.subnav}>
        {isExternalLink(link.url) ?
          <a href={link.url} target="_blank" rel="noopener noreferrer">{content}</a> :
          <NavLink end to={link.url}>{content}</NavLink>
        }
        {link.menu ?
          <NavMenu>
            {link.menu.map((menuItem, i) => (
              <NavMenuItem key={i}>
                <Link to={menuItem.url}>{menuItem.title}</Link>
              </NavMenuItem>
            ))}
          </NavMenu> :
          null
        }
      </NavItem>
    );
  }

  render() {
    return (
      <NavbarContainer subnav={this.props.subnav} collapsed={this.state.collapsed}>
        <NavbarHeading>
          <Link to={this.props.heading.url}>{this.props.heading.title}</Link>
          <CollapseButton onClick={this.toggleNavbarCollapsed} collapsed={this.state.collapsed}>
            <FontAwesomeIcon icon={faAngleDown} />
          </CollapseButton>
        </NavbarHeading>
        <Nav>
          <NavList collapsed={this.state.collapsed}>
            {this.props.links.map(this.generateNavItem)}
          </NavList>
        </Nav>

      </NavbarContainer>
    );
  }

}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
  heading: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  subnav: PropTypes.bool
};

Navbar.defaultProps = {
  subnav: false
};

export default Navbar;
