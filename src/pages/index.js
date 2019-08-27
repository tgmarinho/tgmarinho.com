import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>home</h1>
    <ul>
      <li>
        <a href="about">About</a>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
