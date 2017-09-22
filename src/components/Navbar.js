import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import { generateSitePath } from '../lib/SitePath';
import '../styles/Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarCollapsed: true
    };
  }

  generateLinkComponent(link) {
    var { path, title, isExternal } = link;
    if (isExternal) {
      return <a href={path} target="_blank">{title}</a>;
    } else {
      return <NavLink exact to={generateSitePath(path)}>{title}</NavLink>;
    }
  }

  generateNavMenuComponent(menu) {
    if (menu) {
      return (
        <ul className="navmenu-list">
          {menu.map((menuItem, i) => (
            <li key={i} className="navmenu-item">
              <NavLink exact to={generateSitePath(menuItem.path)}>{menuItem.title}</NavLink>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

  toggleNavbarCollapsed() {
    this.setState({
      navbarCollapsed: !this.state.navbarCollapsed
    });
  }

  render() {
    var headingItems = this.props.links.filter((item) => item.isHeading);
    var nonHeadingItems = this.props.links.filter((item) => (!item.isHeading));

    return (
      <nav className={"navbar" + (this.props.subnav ? " subnav" : "")}>

        {headingItems.map((item, i) => (
          <div className="heading" key={i}>
            {this.generateLinkComponent(item)}
          </div>
        ))}

        <div className="navbar-list-container">
          <ul className={"navbar-list" + (this.state.navbarCollapsed ? " collapsed" : "")}>
            {nonHeadingItems.map((item, i) => {
              var { menu, isLink, isRight } = item;
              var linkComponent = this.generateLinkComponent(item);
              var navMenuComponent = this.generateNavMenuComponent(menu);
              return (
                <li key={i} className={"navitem" + (navMenuComponent ? " navmenu" : "") + (isLink ? " navlink" : "")+ (isRight ? " right" : "")}>
                  {linkComponent}
                  {navMenuComponent}
                </li>
              );
            })}
          </ul>
          <div className="collapse-button" onClick={this.toggleNavbarCollapsed.bind(this)}>
            <FontAwesome name="bars" />
          </div>
        </div>

      </nav>
    );
  }
}

export default Navbar;
