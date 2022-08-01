import { Helmet } from "react-helmet"
import React from "react"
import { Header } from "../About/header"
import Nav from "../Tabs/nav"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { title, description, author } = data.site.siteMetadata

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <meta property="og:site_name" content={author} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content={author} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nyoman Eka" />
        <meta name="twitter:description" content={description} />
        <meta name="description" content={description} />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>
      <Header header={true} />
      <div className="child">
        <Nav />
        <div>{children}</div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
  }

  .child {
    display: flex;
    flex-direction: column;
  }
`
