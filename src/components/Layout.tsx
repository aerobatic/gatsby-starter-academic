import React, { Component, CSSProperties } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ISiteConfig, IMenuLink } from '../types';
import Header from './Header';

import { rhythm, scale } from '../utils/typography';

import 'bootstrap/dist/css/bootstrap.min.css';

interface ILayoutProps {
  location: Location;
  siteConfig: ISiteConfig;
}

const ROOT_PATH = '/'; // `${__PATH_PREFIX__}/`

class Layout extends Component<ILayoutProps> {
  render() {
    const { siteConfig } = this.props;
    const rootPath = '/'; // `${__PATH_PREFIX__}/`

    return (
      <>
        <Header location={this.props.location} siteConfig={siteConfig} />
        <main role="main">{this.props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    );
  }
}

export default Layout;
