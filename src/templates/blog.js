import { graphql } from "gatsby"
import React from "react"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Header } from "../components/About/header"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Helmet } from "react-helmet"

export const query = graphql`
  query ($slug: String) {
    contentfulContentBlog(slug: { eq: $slug }) {
      title
      date(formatString: "D MMMM, YYYY")
      subtitle
      body {
        raw
      }
      cover {
        url
      }
    }
  }
`

export default function Blog(props) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    },
    renderMark: {
      [MARKS.CODE]: children => <code>{children.trim()}</code>,
    },
  }

  const { title, date, subtitle } = props.data.contentfulContentBlog
  return (
    <Container>
      <Helmet
        htmlAttributes={{
          lang: "id",
        }}
      >
        <meta name="generator" content="Gatsby" />
        <title>{title} | Nyoman Eka</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta itemprop="name" content="Nyoman Eka" />
        <meta itemprop="datePublished" content={date} />
        <meta
          itemprop="image"
          content={props.data.contentfulContentBlog.cover.url}
        />
        <meta itemprop="keywords" content={subtitle} />
        <meta property="og:site_name" content="Nyoman Eka" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="article" />

        <meta
          property="og:image"
          content={props.data.contentfulContentBlog.cover.url}
        />
        <meta
          property="og:image:secure_url"
          content={`https:${props.data.contentfulContentBlog.cover.url}`}
        />
        <meta property="og:image:alt" content={title} />
        <meta property="article:author" content="Nyoman Eka Swardita" />
        <meta property="article:publisher" content="Nyoman Eka " />
        <meta
          property="article:published_time"
          content={props.data.contentfulContentBlog.date}
        />
        <meta property="article:section" content="post" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="description" content={subtitle} />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>
      <div className="header-contain">
        <Header />
      </div>
      <div className="article-section">
        <h2>{props.data.contentfulContentBlog.title}</h2>
        <p>{props.data.contentfulContentBlog.subtitle}</p>
        <span>Dipublikasikan pada {props.data.contentfulContentBlog.date}</span>
        <img
          src={props.data.contentfulContentBlog.cover.url}
          style={{ width: "90%" }}
          alt="ini gambar"
        />
        <div>
          {renderRichText(props.data.contentfulContentBlog.body, options)}
        </div>
        <div>Baca Lainnya</div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  font-family: "Poppins", sans-serif;

  .article-section {
    width: 49vw;
  }

  @media screen and (max-width: 1024px) {
    .article-section {
      width: 100vw;
    }
  }

  @media screen and (max-width: 768px) {
    .article-section {
      width: 90vw;
      padding-right: 17.8px;
    }
    flex-direction: column-reverse;
    h2 {
      display: none;
    }
    .header-contain {
      margin-top: 3em;
      display: flex;
      justify-content: center;
    }
  }
`
