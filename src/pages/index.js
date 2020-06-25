import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import "./index.css"
import SEO from "../components/seo"
import MeOnALion from "../components/MeOnALion"
import DarkmodeToggle from "../components/DarkmodeToggle"

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Layout>
      <SEO title="🏚" />
      <DarkmodeToggle darkmodeCallback={setDarkMode}/>
      <MeOnALion darkMode={darkMode}/>
      <div className="theTops">
        <h1 className="nameHeader">Eric Wilson</h1>
        <p className="subtitle">
          a complex chemical system for turning plants into shenanigans
        </p>
      </div>
      <div className="theBusiness">
        <h2>Me:</h2>
        <p>
          👨🏼‍💻 i make internet things
          <br />
          🎃 sometimes they're spooky
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
