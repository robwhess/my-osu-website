import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import FontAwesome from 'react-fontawesome';

import { generateSitePath } from '../lib/SitePath';

const NavItem = styled.li`
  display: inline-block;
  position: relative;
  float: ${props => props.right ? 'right' : 'initial'};
  a.active {
    box-shadow: inset 0 -2px 0 #d54f1e;
  }
  a:hover {
    background-color: ${props => props.right ? 'initial' : 'rgba(213, 79, 30, 0.5)'};
    color: ${props => props.right ? 'inherit' : '#eee'};
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Nav = styled.nav`
  flex: 1 0 auto;
`;

const NavbarHeading = styled.div`
  min-width: 150px;
  flex: 0 0 auto;
`;

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
      navbarCollapsed: !this.state.navbarCollapsed
    });
  }

  generateNavItem(link, key) {
    return (
      <NavItem key={key} right={link.isRight} external={link.isExternal}>
        {link.isExternal ?
          <a href={link.path} target="_blank" rel="noopener noreferrer">{link.title}</a> :
          <NavLink exact to={generateSitePath(link.path)}>{link.title}</NavLink>
        }
      </NavItem>
    );
  }

  render() {
    return (
      <NavbarContainer subnav={this.props.subnav}>
        <NavbarHeading>
          <Link to={generateSitePath('/')}>{this.props.title}</Link>
        </NavbarHeading>
        <Nav>
          <NavList>
            {this.props.links.map(this.generateNavItem)}
          </NavList>
        </Nav>
      </NavbarContainer>
    );
  }

}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subnav: PropTypes.bool
};

Navbar.defaultProps = {
  subnav: false
};

export default Navbar;
