import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header';
import './layout.css';

const fontSrc =
  'https://fonts.googleapis.com/css?family=Karla:400,700&amp;subset=latin-ext';
const meta = [
  { name: 'description', content: 'Sample' },
  { name: 'keywords', content: 'sample, something' }
];

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} meta={meta}>
          <link href={fontSrc} rel="stylesheet" />
          <html lang="en" />
        </Helmet>
        <div className="page">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="content">{children}</div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
