import React from "react"
import styled from "styled-components"
import { GiBookmarklet } from "react-icons/gi"
import { FaMedal } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
import { Link } from "gatsby"

const active = {
  background: "#676c6f",
  transition: ".2s",
}

export default function Nav() {
  return (
    <Container>
      <div className="card-nav">
        <li>
          <Link className="link-text" to="/" activeStyle={active}>
            <GiBookmarklet /> <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link className="link-text" to="/portfolio" activeStyle={active}>
            <FaMedal /> <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link className="link-text" to="/certificates" activeStyle={active}>
            <TbCertificate />
            <span>Certificates</span>
          </Link>
        </li>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card-nav {
    width: 95vw;
    background: #505558;
    border-radius: 30px;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  .link-text {
    padding: 14px 38px;
    border-radius: 30px;
  }

  li {
    cursor: pointer;
    text-align: center;
    display: flex;
    margin: 16px;
    color: #c6c7cb;

    span {
      margin: 12px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90vw;
    .card-nav {
      width: 90vw;
    }
  }

  @media screen and (max-width: 768px) {
    li {
      font-size: 29px;
    }
    margin-top: 20px;
    width: 90vw;
    height: 75px;

    .link-text {
      padding: 12px 33px;
    }
  }
  @media screen and (max-width: 700px) {
    span {
      display: none;
    }
  }

  @media screen and (max-width: 398px) {
    .link-text {
      padding: 8px 26px;
    }
    width: 95vw;
  }

  @media screen and (max-width: 320px) {
    .link-text {
      padding: 5px 14px;
    }
    width: 100vw;
    .card-nav {
      width: 95vw;
    }
  }

  @media screen and (min-width: 1026px) {
    width: 50vw;
  }
`
