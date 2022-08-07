import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

export default function Data() {
  return (
    <Container>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="card-found">
        <div className="card-back">
          <h2>You're in wrong way</h2>
          <p>
            <Link to="/">Go Back</Link>
          </p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;

  .card-found {
    color: white;
  }

  .card-back {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
