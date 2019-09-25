/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ScreenSizeProvider } from "../contexts/ScreenSize"
import Header from "./header"
import Stars from "./stars"
import "./layout.css"

const Layout = ({ children }) => {
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
    <ScreenSizeProvider>
      {/* <Stars /> */}
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main>{children}</main>
      </div>
    </ScreenSizeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
