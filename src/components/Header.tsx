import React, { Component, SyntheticEvent } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ISiteConfig, IMenuLink } from '../types';
import { Search as SearchIcon, Menu as MenuIcon, Close as CloseIcon } from '../icons';

// import { rhythm, scale } from '../utils/typography';

interface IHeaderProps {
  location: Location;
  siteConfig: ISiteConfig;
}

const ROOT_PATH = '/'; // `${__PATH_PREFIX__}/`

interface IState {
  mobileMenuOpen: boolean;
  mobileSearchOpen: boolean;
}

class Header extends Component<IHeaderProps, IState> {
  state = {
    mobileSearchOpen: false,
    mobileMenuOpen: false
  };

  handleMobileMenuClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  handleMobileSearchClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ mobileSearchOpen: true });
  };

  renderMenuLink(link: IMenuLink, cssPrefix: string) {
    const { header: headerTheme } = this.props.siteConfig.theme;

    const isActive = location.pathname === link.url;

    const className = classnames(`nav-link ${cssPrefix}-link`, {
      [`${cssPrefix}-link--active`]: isActive && !headerTheme.isDarkBackground,
      [`${cssPrefix}-link--dark`]: headerTheme.isDarkBackground,
      [`${cssPrefix}-link--dark--active`]: isActive && headerTheme.isDarkBackground
    });

    if (link.homeAnchor && this.props.location.pathname === ROOT_PATH) {
      return (
        <AnchorLink className={className} href={link.homeAnchor}>
          {link.text}
        </AnchorLink>
      );
    } else if (link.url.startsWith('http')) {
      return (
        <a href={link.url} className={className} target="_blank">
          {link.text}
        </a>
      );
    }
    return (
      <Link to={link.url} className={className}>
        {link.text}
      </Link>
    );
  }

  renderSearchBox() {
    return (
      <form className="form-inline my-2 my-lg-0" method="get" action="/search.html">
        <div className="header__search-box">
          <SearchIcon className="header__search-icon" />
          <input
            type="text"
            name="q"
            className="form-control header__search-input"
            placeholder="Search site"
            aria-label="Search site"
            aria-describedby="search-button"
          />
        </div>
      </form>
    );
  }

  renderMobileMenu(links: IMenuLink[]) {
    return (
      <ul
        className={classnames('header__mobile_menu', {
          'header__mobile_menu--open': this.state.mobileMenuOpen
        })}
      >
        {links.map((link, i) => (
          <li key={i} className="header__mobile_menu__item">
            {this.renderMenuLink(link, 'header__mobile_menu')}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { siteConfig } = this.props;
    const rootPath = '/'; // `${__PATH_PREFIX__}/`
    const { header: headerTheme } = this.props.siteConfig.theme;

    return (
      <header className="header">
        <nav
          className="navbar fixed-top navbar-expand-lg header__nav"
          style={{ backgroundColor: headerTheme.backgroundColor }}
        >
          <a
            className={classnames('navbar-brand header__title', {
              'header__title--dark': headerTheme.isDarkBackground
            })}
            href="/"
          >
            {this.props.siteConfig.title}
          </a>
          <div>
            {siteConfig.mainMenu.showSearch && (
              <button
                type="button"
                className="header__button"
                onClick={this.handleMobileSearchClick}
              >
                <SearchIcon className="header__button__search" />
              </button>
            )}
            <button type="button" className="header__button" onClick={this.handleMobileMenuClick}>
              <MenuIcon className="header__button__menu" />
            </button>
            {this.state.mobileSearchOpen && (
              <button type="button" className="header__button">
                <CloseIcon className="header__button__close" />
              </button>
            )}
          </div>
          <div className="header__menu">
            <ul className="navbar-nav">
              {siteConfig.mainMenu.links.map((link, i) => (
                <li key={i} className="nav-item header__menu-item">
                  {this.renderMenuLink(link, 'header__menu')}
                </li>
              ))}
              {siteConfig.mainMenu.showSearch === true && (
                <li key="search" className="header__menu-search">
                  {this.renderSearchBox()}
                </li>
              )}
            </ul>
          </div>
        </nav>
        {this.renderMobileMenu(siteConfig.mainMenu.links)}
      </header>
    );
  }
}

export default Header;
