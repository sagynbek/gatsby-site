import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function DogTemplate({ pageContext: { dog } }) {

  return (
    <Layout>
      <SEO title={`${dog.name} - ${dog.breed}`} />
      <h1>Dog details</h1>
      <h4>{dog.name} - {dog.breed}</h4>
    </Layout>
  )
}
