/*
 * This file contains a navbar component that can be used for both the primary
 * site navbar and sub-navbars.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

import { generateSitePath } from '../lib/SitePath';
import breakpoints from '../lib/breakpoints';

const NavbarContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  color: ${props => props.subnav ? '#333' : '#ddd'};
  background-color: ${props => props.subnav ? '#fff' : '#333'};
  font-weight: 100;
  font-size: 22px;
  a {
    color: inherit;
    display: block;
    padding: 10px 20px;
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
`;

const NavbarHeading = styled.div`
  flex: 0 0 auto;
  display: inline-block;
`;

const Nav = styled.nav`
  flex: 1 0 auto;
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
    color: inherit;
  }
  a.active {
    box-shadow: inset 0 -2px 0 #d54f1e;
  }
  a:hover {
    background-color: rgba(213, 79, 30, 0.2);
    color: #333;
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
  top: 46px;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  color: #333;
  font-size: 18px;
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
      padding-left: 40px;
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
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  cursor: pointer;
  &:focus {
    outline:none
  }
  @media (max-width: ${breakpoints[0]}px) {
    display: inline-block;
    transform: ${props => props.collapsed ? 'none' : 'rotate(-180deg)'};
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
    return (
      <NavItem key={key} right={link.isRight} subnav={this.props.subnav}>
        {link.isExternal ?
          <a href={link.path} target="_blank" rel="noopener noreferrer">{link.title}</a> :
          <NavLink exact to={generateSitePath(link.path)}>{link.title}</NavLink>
        }
        {link.menu ?
          <NavMenu>
            {link.menu.map((menuItem, i) => (
              <NavMenuItem key={i}>
                <Link to={generateSitePath(menuItem.path)}>{menuItem.title}</Link>
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
          <Link to={generateSitePath(this.props.heading.path)}>{this.props.heading.title}</Link>
          <CollapseButton onClick={this.toggleNavbarCollapsed} collapsed={this.state.collapsed}>
            <FontAwesome name="chevron-down" />
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
    path: PropTypes.string.isRequired
  }).isRequired,
  subnav: PropTypes.bool
};

Navbar.defaultProps = {
  subnav: false
};

export default Navbar;
