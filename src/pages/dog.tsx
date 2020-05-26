// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Dogs" />
    <h1>Dogs</h1>

    <ul>
      <li><Link to="/dog/fido">Fido</Link></li>
      <li><Link to="/dog/sparky">Sparky</Link></li>
    </ul>
  </Layout>
)

export default SecondPage
