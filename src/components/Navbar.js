import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends Component {

  generateLinkComponent(link) {
    var { path, title, isExternal } = link;
    if (isExternal) {
      return <a href={path} target="_blank">{title}</a>;
    } else {
      return <Link to={path}>{title}</Link>;
    }
  }

  generateNavMenuComponent(menu) {
    if (menu) {
      return (
        <ul className="navmenu-list">
          {menu.map((menuItem, i) => (
            <li key={i} className="navmenu-item">
              <Link to={menuItem.path}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <nav className={this.props.subnav ? "subnav" : ""}>
        <ul className="navbar">
          {this.props.links.map((link, i) => {
            var { menu, isHeading, isLink, isRight } = link;
            var linkComponent = this.generateLinkComponent(link);
            var navMenuComponent = this.generateNavMenuComponent(menu);
            return (
              <li key={i} className={"navitem" + (isHeading ? " title" : "") + (navMenuComponent ? " navmenu" : "") + (isLink ? " navlink" : "")+ (isRight ? " right" : "")}>
                {linkComponent}
                {navMenuComponent}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
