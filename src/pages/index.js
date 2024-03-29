import React from "react"
import Helmet from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Coreo from "../images/coreo.png"
import Facestuff from "../images/facestuff.jpg"
import Coconuts from "../images/coconutsinc.png"
import Nacwala from "../images/nacwala.png"
import EastWest from "../images/eastwest.jpg"
import TinyGH from "../images/gh-tiny.png"
import headshot from "../images/jyw-web.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Jasmine Wang" />
    <Helmet>
      <meta property="og:image" content={headshot} />
      <meta property="twitter:image" content={headshot} />
      <meta itemprop="image" content={headshot} />
    </Helmet>
    <div className="hero">
      <div className="headshot">
        <Image />
      </div>
      <div className="bio">
        <h1>
          Hello! I'm a full stack software developer based in Chicago, IL.
        </h1>
        <p>
          I work primarily in React, Redux, Node, Express, Sequelize, and
          PostgreSQL. I also work in Adobe Creative Cloud (InDesign,
          Illustrator, Photoshop, XD).
        </p>
        <p>
          I like{" "}
          <OutboundLink href="http://art.jasminey.com">drawing</OutboundLink>,
          design, west coast swing, and puzzles.
        </p>
      </div>
    </div>
    <hr />
    <h2>Projects</h2>
    <div className="projects">
      <div>
        <OutboundLink href="https://coreo-ai.herokuapp.com/">
          <img src={Coreo} alt="Coreo" className="project-image" />
        </OutboundLink>
        <div>
          <h3>
            <OutboundLink href="https://coreo-ai.herokuapp.com/">
              Coreo
            </OutboundLink>
          </h3>
          <h4>choreography assistance web app using machine learning</h4>
          <p>
            Coreo provides a source of automated feedback for dancers on their
            choreography between rehearsals.
          </p>
          <p>
            Coreo uses TensorFlow's PoseNet pose estimation library, web
            workers, and video.js / videojs-record.
          </p>
          <p>
            <OutboundLink href="https://github.com/brain-dance/brain-dancer">
              <img src={TinyGH} alt="Github Repo" className="icon" />
            </OutboundLink>
          </p>
        </div>
      </div>
      <div>
        <OutboundLink href="https://www.youtube.com/watch?v=ugCaQ_JWw2s">
          <img src={Facestuff} alt="Facestuff" className="project-image" />
        </OutboundLink>
        <div>
          <h3>
            <OutboundLink href="https://www.youtube.com/watch?v=ugCaQ_JWw2s">
              Facestuff
            </OutboundLink>
          </h3>
          <h4>toy camera mobile app using face detection</h4>
          <p>
            Facestuff was built in a 3 day hackathon using React Native, Expo,
            and MongoDB.
          </p>
          <p>
            <OutboundLink href="https://github.com/brain-dance/brain-dancer">
              <img src={TinyGH} alt="Github Repo" className="icon" />
            </OutboundLink>
          </p>
        </div>
      </div>
      <div>
        <OutboundLink href="http://coconutsforsale.herokuapp.com/">
          <img src={Coconuts} alt="Facestuff" className="project-image" />
        </OutboundLink>
        <div>
          <h3>
            <OutboundLink href="http://coconutsforsale.herokuapp.com/">
              Coconuts, Inc
            </OutboundLink>
          </h3>
          <h4>full stack e-commerce web application</h4>
          <p>
            Coconuts, Inc is made in React, Redux, Express, Sequelize, and
            PostreSQL. Checkout using Stripe API.
          </p>
          <p>
            <OutboundLink href="https://github.com/team-coconut-tiki/grace-shopper">
              <img src={TinyGH} alt="Github Repo" className="icon" />
            </OutboundLink>
          </p>
        </div>
      </div>
      <div>
        <OutboundLink href="https://www.nacwala.com/">
          <img src={Nacwala} alt="NACWALA" className="project-image" />
        </OutboundLink>
        <div>
          <h3>
            <OutboundLink href="https://www.nacwala.com/">NACWALA</OutboundLink>
          </h3>
          <h4>
            official website for the North America Chinese Writers Association
            Los Angeles
          </h4>
          <p>Front end development and design using Bootstrap, HTML5, CSS.</p>
          <p>
            <OutboundLink href="https://github.com/jsmney/nacwala-2">
              <img src={TinyGH} alt="Github Repo" className="icon" />
            </OutboundLink>
          </p>
        </div>
      </div>
      <div>
        <OutboundLink href="http://www.eastwestcultureandart.com/">
          <img src={EastWest} alt="East West" className="project-image" />
        </OutboundLink>
        <div>
          <h3>
            <OutboundLink href="http://www.eastwestcultureandart.com/">
              East West Culture &amp; Art Center
            </OutboundLink>
          </h3>
          <h4>official website for organization based in San Diego</h4>
          <p>
            Front end development and design using Bootstrap, jQuery, HTML5,
            CSS.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div id="contact">
      <h1>Let's get in touch!</h1>
      <p>Send me an email at jasminey.tea@gmail.com</p>
    </div>
  </Layout>
)

export default IndexPage
