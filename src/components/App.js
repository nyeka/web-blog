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
                <div className="container hvr-sink" key={i}>
                  <div className="card">
                    <Link to={`/${datw.node.slug}`}>
                      <div className="card-blog ">
                        <img src={datw.node.cover.url} alt="ini gambar" />
                        <div className="card-text">
                          <p>{datw.node.date}</p>
                          <h3>{datw.node.title}</h3>
                          <p>{datw.node.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <span></span>
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

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    span {
      align-self: center;
      width: 90%;
      height: 2px;
      background-color: #505558;
      border-radius: 24px;
    }
    padding: 20px 8px;
    border-radius: 19px;
    margin-top: 12px;

    :hover {
      background-color: #313538;

      span {
        width: 100%;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        animation-name: ganteng;
        animation-duration: 0.5s;
      }
    }
  }
  @keyframes ganteng {
    0% {
      transform: scaleX(0.95);
    }

    100% {
      transform: scaleX(1);
    }
  }

  .card-blog {
    display: flex;
    flex-direction: row;

    height: fit-content;

    img {
      width: 120px;
      height: 140px;
      border-radius: 9px;
      object-fit: cover;
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
