/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const NUM_STARS = 500
const MAX_STAR_R = 0.3 // Percent

const starCoords = Array.from(new Array(NUM_STARS)).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random(),
}))

const Layout = ({ children }) => {
  const [screenHeight, setScreenHeight] = useState()
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    const resetWindowDimensions = () => {
      setScreenHeight(window.innerHeight)
      setScreenWidth(window.innerWidth)
    }
    resetWindowDimensions()
    window.addEventListener(
      "resize",
      () => {
        resetWindowDimensions()
      },
      true
    )
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <svg
        className="svgCanvasStars"
        viewBox={`0 0 ${screenWidth} ${screenHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {starCoords.map(star => (
          <circle
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={`${star.r * MAX_STAR_R}%`}
            stroke-width="0"
            fill="#FFF"
          ></circle>
        ))}
      </svg>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Eric Wilson</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
