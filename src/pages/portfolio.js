import React from "react"
import { Layout } from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import Portfo from "../components/Portfo"

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        edges {
          node {
            title
            subtitle
            link
            cover {
              url
            }
            data {
              techno
              title
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Portfo data={data} />
    </Layout>
  )
}
