import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Jasmine Wang" />
    <div className="hero">
      <div className="headshot">
        <Image />
      </div>
      <div className="bio">
        <h1>
          Hello! I'm a full stack software developer based in Chicago, IL.
        </h1>
        <p>
          I like <a href="https://www.instagram.com/jsmney/">drawing</a>, west
          coast swing, and puzzles.
        </p>
      </div>
    </div>
    <hr />
    <h2>Projects</h2>
    <h3>Coreo</h3>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
