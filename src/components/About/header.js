import React from "react"
import styled from "styled-components"
import author from "../../images/author.jpeg"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TbBrandInstagram } from "react-icons/tb"
import { VscGithubInverted } from "react-icons/vsc"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { Link } from "gatsby"

export const Header = () => {
  return (
    <>
      <Container>
        <div className="card">
          <h2>Nyoman Eka</h2>
          <div className="card-content">
            <img
              src={author}
              className="hvr-card hvr-bounce-out"
              alt="ini gambar"
            />
            <div className="card-icon">
              <Link to="https://github.com/nyeka" target="_blank">
                <VscGithubInverted className="hvr-card hvr-bounce-in card-2" />
              </Link>
              <Link to="https://www.instagram.com/_nyomaneka/" target="_blank">
                <TbBrandInstagram className="hvr-card hvr-bounce-in card-2" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/nyoman-eka-swardita/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="hvr-card hvr-bounce-in card-2" />
              </Link>
              <Link>
                <AiFillTwitterCircle className="hvr-card hvr-bounce-in card-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="konten-desc">
          <p>
            First year Informatics Engineering student {""}
            <span>
              <u>
                <Link to="https://www.unila.ac.id" target="_blank">
                  Universitas Lampung
                </Link>
              </u>
              .
            </span>{" "}
            Frontend developer intern {""}
            <span>
              <u>
                <Link
                  to="https://www.tupaitech.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TupaiTech
                </Link>
              </u>
              .
            </span>{" "}
            Interested in Javascript ecosystem
          </p>
        </div>
        <div className="card-msg hvr-bounce-in">
          <Link to="mailto:nyeka2101@gmail.com">Say Hi!</Link>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #e8ecef;
  width: 100%;

  .card-2 {
    width: 30px;
    border-radius: 50%;
    height: 30px;
  }

  .card-msg {
    background-color: #1d2022;
    color: #c6c7cb;
    width: 100%;
    text-align: center;
    border-radius: 50px;
    padding: 12px 0;
  }

  .card {
    display: flex;
    flex-direction: column;

    h2 {
      align-self: center;
      font-weight: 700;
    }
  }

  .card-content {
    display: flex;
    justify-content: space-around;

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
    }

    .card-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 9px;
    }
  }

  .konten-desc {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    span {
      color: #c6c7cb;
    }

    @media screen and (max-width: 348px) {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 368px) {
    width: fit-content;

    .card-content {
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      .card-icon {
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card-2 {
      height: 34px;
    }

    .card-content {
      .card-icon {
        gap: 9px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    align-items: flex-start;

    .card-content {
      width: 350px;
      justify-content: space-between;
    }

    .card-2 {
      width: 40px;
      height: 40px;
    }

    .konten-desc {
      text-align: justify;
    }

    .card {
      h2 {
        align-self: flex-start;
      }
    }

    .card-msg {
      width: 100%;
    }
  }

  @media screen and (min-width: 620px) and (max-width: 1100px) {
    width: 60vw;
    margin: 2em;
  }
`
