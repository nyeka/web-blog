import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Portfo(props) {
  return (
    <Container>
      {props.data.allContentfulPortfolio.edges.map((datw, i) => {
        return (
          <div key={i} className="card-port">
            <Link to={datw.node.link} target="_blank">
              <img src={datw.node.cover.url} alt="ini gambar" />
              <div className="card-text">
                <h3>{datw.node.title}</h3>
                <p>{datw.node.subtitle}</p>
                <li>{datw.node.tech}</li>
              </div>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  h3 {
    color: #e8ecef;
  }
  p {
    color: #aeb3b7;
  }
  li {
    color: #aeb3b7;
  }

  img {
    width: 420px;
    height: 220px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .card-port {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 2em 0;
    background-color: #505558;
    width: fit-content;
  }

  .card-text {
    margin: 0.3em 1em;
  }

  @media screen and (max-width: 768px) {
    margin: 0.3em 1em;
    img {
      width: 130px;
      height: 140px;
      border-radius: 10px;
    }
    .card-port {
      padding: 10px;
      flex-direction: row;
    }
  }
`
