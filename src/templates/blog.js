import { graphql } from "gatsby"
import React from "react"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Header } from "../components/About/header"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
  query MyQuery($slug: String) {
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
    renderMark: {
      [MARKS.BOLD]: text => (
        <b className="font-bold">
          {text}
        </b>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a
            href={uri}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }
  return (
    <Container>
      <Header />
      <div className="article-section">
        <h2>{props.data.contentfulContentBlog.title}</h2>
        <p>{props.data.contentfulContentBlog.subtitle}</p>
        <span>Dipublikasikan pada {props.data.contentfulContentBlog.date}</span>
        <img
          src={props.data.contentfulContentBlog.cover.url}
          style={{ width: "90%" }}
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
  flex-flow: row wrap;
  width: 100vw;
  justify-content: space-around;
  color: white;
  font-family: "Poppins", sans-serif;

  .article-section {
    width: 50vw;
  }

  @media screen and (max-width: 768px) {
    .article-section {
      width: 100vw;
    }
  }
`
