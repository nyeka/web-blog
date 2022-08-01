import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Data() {
  return (
    <Container>
      <div className="card-found">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7904723.png&f=1&nofb=1" />
        <h4>You're in wrong way</h4>
      </div>
      <div>
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card-found {
    color: white;
    img {
      width: 70%;
    }
  }
`
