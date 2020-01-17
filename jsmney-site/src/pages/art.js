import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Coreo from "../images/coreo.png"
import Facestuff from "../images/facestuff.jpg"
import Coconuts from "../images/coconutsinc.png"
import Nacwala from "../images/nacwala.png"
import EastWest from "../images/eastwest.jpg"
import TinyGH from "../images/gh-tiny.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Jasmine Wang" />
    <div className="hero">
      <div className="headshot">
        <Image />
      </div>
      <div className="bio">
        <h1>I'm also an illustrator and designer!</h1>
        <p>
          I studied at Watts Atelier in Encinitas, CA. I'm also a member of
          Urban Sketchers Chicago. Doodling helps me listen.
        </p>
      </div>
    </div>
    <hr />
    <h2>Illustration</h2>
    <div className="projects art">
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
      <img src={Coreo} alt="Coreo" className="art-image" />
    </div>
  </Layout>
)

export default IndexPage
