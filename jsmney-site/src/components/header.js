import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
        <Link to="https://www.linkedin.com/in/jsmney/">
          <img src="https://source.unsplash.com/random/40x40" alt="LinkedIn" />
        </Link>
        <Link to="https://github.com/jsmney">
          <img src="https://source.unsplash.com/random/40x40" alt="Github" />
        </Link>
        <Link to="https://www.behance.net/jasminey">
          <img src="https://source.unsplash.com/random/40x40" alt="Behance" />
        </Link>
        <Link to="http://dribbble.com/jsmney">
          <img src="https://source.unsplash.com/random/40x40" alt="Dribbble" />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
