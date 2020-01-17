import PropTypes from "prop-types"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import LinkedIn from "../images/social/linkedin-mark.png"
import Github from "../images/social/github-mark.png"
import Behance from "../images/social/behance-mark.png"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div
        className="header"
        style={{
          maxWidth: 960,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#002855`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <a href="https://www.linkedin.com/in/jsmney/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/jsmney">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.behance.net/jasminey">
            <img src={Behance} alt="Behance" />
          </a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
