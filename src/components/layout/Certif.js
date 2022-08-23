import React from "react"
import styled from "styled-components"

export default function Certif({ data }) {
  return (
    <Container>
      {data.allContentfulCertificates.edges.map((item, index) => {
        const { name, link, date, foto, institusi } = item.node
        return (
          <a href={link} target="_blank" rel="noreferrer" key={index}>
            <div key={index} className="fluid-container">
              <img src={foto.url} alt={foto.title} />
              <div className="text">
                <div className="date">
                  <p>{date}</p>
                  <span>|</span>
                  <span className="institusi">{institusi}</span>
                </div>
                <h3>{name}</h3>
              </div>
            </div>
          </a>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-flow: row wrap;
  gap: 24px;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .date {
    display: flex;
    gap: 12px;
  }

  h3 {
    color: #fff;
  }

  .fluid-container {
    width: 380px;
    background-color: #505558;

    border-radius: 12px;
    p {
      position: relative;
      width: fit-content;
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #e8ecef;
        position: absolute;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    .fluid-container {
      width: 340px;
    }
  }

  @media screen and (max-width: 426px) {
    padding: 12px 0;
    .fluid-container {
      width: fit-content;
    }
  }
`
