import React from "react"
import styled from "styled-components"

export default function Portfo(props) {
  return (
    <Container>
      {props.data.allContentfulPortfolio.edges.map((datw, i) => {
        return (
          <a href={datw.node.link} target="_blank" key={i}>
            <div key={i} className="card-port">
              <img src={datw.node.cover.url} alt="ini gambar" />
              <div className="card-text" key={i}>
                <h3>{datw.node.title}</h3>
                <p>{datw.node.subtitle}</p>
                <ul>
                  <li>{datw.node.data.title}</li>
                  <li>{datw.node.data.techno}</li>
                </ul>
              </div>
            </div>
          </a>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  li {
    list-style: none;
  }
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
    width: 100%;
    height: 180px;
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
    width: 380px;
  }

  .card-text {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 7px;

    ul {
      display: flex;
      gap: 12px;
      flex-flow: row wrap;

      li {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #aeb3b7;
          width: 100%;
          height: 2px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 130px;
      height: 140px;
      border-radius: 10px;
    }
    .card-port {
      width: fit-content;
      flex-direction: row;
      background-color: transparent;
    }

    .card-text {
      margin: 0.3em 1em;
      padding: 0;
    }
  }
`
