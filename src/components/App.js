import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Layout } from "./layout/layout"

export const dat = graphql`
  query {
    allContentfulContentBlog(sort: { order: DESC, fields: date }) {
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
                      <img src={datw.node.cover.url} alt="ini gambar" />
                      <div className="card-text">
                        <p>{datw.node.date}</p>
                        <h3>{datw.node.title}</h3>
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

  .blog-content {
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
      object-fit: cover;
    }

    :hover {
      background-color: #505558;
    }
  }

  .card-text {
    margin-left: 20px;

    h3 {
      color: #fff;
    }
  }

  @media screen and (max-width: 110px) {
    .blog-content {
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    .blog-content {
      width: 52vw;
    }

    .card-blog {
      img {
        width: 220px;
        height: 140px;
      }
    }

    .card-text {
      h3 {
        font-size: 27px;
      }
    }
  }
`
