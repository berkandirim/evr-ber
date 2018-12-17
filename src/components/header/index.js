import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './header.css';

const items = [
  { text: 'lorem', href: '#' },
  { text: 'ipsum', href: '#' },
  { text: 'dolor', href: '#' },
  { text: 'sit', href: '#' },
];

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div className="menu">
      {items.map((item, i) => (
        <Link className="menu-item" to={item.href}>
          {item.text}
        </Link>
      ))}
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: 'Evrim & Berkan',
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
