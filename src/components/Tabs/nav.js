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
    </Container>
  )
}

const Container = styled.div`
  background: #505558;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;

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

  @media screen and (max-width: 768px) {
    span {
      display: none;
    }

    li {
      font-size: 22px;
    }
    margin-top: 20px;
    width: 100%;
    height: 75px;

    .link-text {
      padding: 14px 29px;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 90vw;
  }
`
