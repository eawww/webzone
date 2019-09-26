import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import "./index.css"
import SEO from "../components/seo"
import MeOnALion from "../components/MeOnALion"

const IndexPage = () => (
  <Layout>
    <SEO title="🏚" />
    <MeOnALion />
    <div className="theTops">
      <h1 className="nameHeader">Eric Wilson</h1>
      <p className="subtitle">
        develops web like Peter Parker in the darkroom.
      </p>
    </div>
    <div className="theBusiness">
      <h2>Me:</h2>
      <p>
        👨🏼‍💻 Software Engineer by day;
        <br />
        😪 Sleepy Web Developer by night.
      </p>
      <p>🌱 Grower and eater of plants.</p>
      <p>
        📺 Cartoons
        <br />
        📸 Cameras
        <br />
        ⚔️ Collaboration
      </p>
      <p>
        🥥 Ice Cream
        <br />
        🤮 Emoji
        <br />
        🧙‍♂️ Innovation
      </p>
    </div>
  </Layout>
)

export default IndexPage
