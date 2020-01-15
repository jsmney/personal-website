import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const linkedin = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
          <Link to="https://www.linkedin.com/in/jsmney/">
            <Img fixed={linkedin.image.childImageSharp.fixed} />
          </Link>
          <Link to="https://github.com/jsmney">
            <Img fixed={linkedin.image.childImageSharp.fixed} />
          </Link>
          <Link to="https://www.behance.net/jasminey">
            <Img fixed={linkedin.image.childImageSharp.fixed} />
          </Link>
          <Link to="http://dribbble.com/jsmney">
            <Img fixed={linkedin.image.childImageSharp.fixed} />
          </Link>
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
