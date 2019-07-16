import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./index.css"
import SEO from "../components/seo"
import underConstruction from "../images/under-construction-flashing-lights.gif"

const NUM_STARS = 500

const IndexPage = () => (
  <Layout>
    <SEO title="🏚" />
    <marquee height="50%">
      <img className="underConstruction" src={underConstruction} />
    </marquee>
  </Layout>
)

export default IndexPage
