import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Certif from "../components/layout/Certif"
import { Layout } from "../components/layout/layout"

export default function Certificates() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCertificates(sort: { order: DESC, fields: date }) {
        edges {
          node {
            date(formatString: "D MMMM, YYYY")
            link
            name
            institusi
            foto {
              url
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Certif data={data} />
    </Layout>
  )
}
