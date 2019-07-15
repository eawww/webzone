import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./index.css"
import Image from "../components/image"
import SEO from "../components/seo"
import underConstruction from "../images/under-construction-flashing-lights.gif"

const NUM_STARS = 500

const screenHeight = window.innerHeight
const screenWidth = window.innerWidth

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <marquee scrollAmount="10" height="50%">
      <img className="underConstruction" src={underConstruction} />
    </marquee>
  </Layout>
)

export default IndexPage
