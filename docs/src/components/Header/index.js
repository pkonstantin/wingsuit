import PropTypes from 'prop-types';
import React from 'react';
import GatsbyLink from 'gatsby-link';
import './style.css';

import wingsuitLogo from '../../design/homepage/wingsuit-logo.svg';

const home = 'https://storybook.js.org/';

const sections = [

];

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

class Header extends React.Component {
  renderSections() {
    return sections.map((section) => (
      <Link className="selected" key={section.id} to={section.href}>
        {section.caption}
      </Link>
    ));
  }

  render() {
    const { currentSection } = this.props;
    let titleClassname = 'float-left';
    if (currentSection === 'home') {
      titleClassname += ' hide';
    }

    return (
      <div id="header" className="row">
        <div className="col-xs-12 col-md-12">
          <div id="header-title" className={titleClassname}>
            <Link to={home}>
              <img className="sb-title" src={wingsuitLogo} alt="Storybook Logo" />
            </Link>
          </div>
          <div id="header-links" className="float-right">
            {this.renderSections()}
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default Header;
