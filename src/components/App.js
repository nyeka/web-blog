import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Layout } from "./layout/layout"

export const dat = graphql`
  query {
    allContentfulContentBlog {
      edges {
        node {
          title
          slug
          date(formatString: "D MMMM, YYYY")
          author
          subtitle
          cover {
            url
          }
        }
      }
    }
  }
`
export default function App() {
  const data = useStaticQuery(dat)
  return (
    <Layout>
      <Container>
        <div className="blog-content">
          {data.allContentfulContentBlog ? (
            data.allContentfulContentBlog.edges.map((datw, i) => {
              return (
                <div className="card" key={i}>
                  <Link to={`/${datw.node.slug}`}>
                    <div className="card-blog hvr-sink">
                      <img src={datw.node.cover.url} />
                      <div className="card-text">
                        <h1>{datw.node.title}</h1>
                        <p>{datw.node.date}</p>
                        <p>{datw.node.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          ) : (
            <div>
              <h3>Data Tidak Ada</h3>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  display: flex;
  color: white;
  font-family: "Poppins", sans-serif;

  .blog-content {
    width: 50vw;

    .card {
      span {
        width: 90%;
        height: 2px;
        background: #fff;
      }
    }
  }

  .card-blog {
    display: flex;
    margin-top: 12px;
    flex-direction: row;
    padding: 20px 8px;
    border-radius: 19px;
    height: fit-content;

    img {
      width: 120px;
      height: 140px;
      border-radius: 9px;
    }

    :hover {
      background-color: #505558;
    }
  }

  .card-text {
    margin-left: 20px;
  }

  @media screen and (max-width: 500px) {
    .blog-content {
      width: fit-content;
    }
  }

  @media screen and (max-width: 910px) {
    .blog-content {
      width: 100%;
    }
  }
`
