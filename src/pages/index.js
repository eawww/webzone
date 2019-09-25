import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import "./index.css"
import SEO from "../components/seo"
import MeOnALion from "../components/MeOnALion"

const NUM_STARS = 500

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="🏚" />
    {/* <Image
      className={"squareMeOnALion"}
      fluid={data.lionman.childImageSharp.fluid}
    /> */}
    <MeOnALion />
    <div className="theTops">
      <h1 className="nameHeader">Eric Wilson</h1>
      <p className="subtitle">
        I develop web like Peter Parker in the darkroom.
      </p>
    </div>
    <hr className="gradientDivider"></hr>
    <div className="theBusiness">
      <h2>Me:</h2>
      <p>Software Engineer by day; sleepy Web Developer by night.</p>
      <p>Grower and eater of plants.</p>
      <p>
        I have a motorcycle so you know I'm really cool.
        <br />
        (vroom vroom 🏍)
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    lionman: file(relativePath: { eq: "squaremeonalion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
