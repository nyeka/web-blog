import React from "react"
import styled from "styled-components"
import author from "../../images/author.jpeg"
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"

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
              <a href="https://github.com/nyeka" target="_blank">
                <AiOutlineGithub className="hvr-card hvr-bounce-in card-2" />
              </a>
              <a href="https://www.instagram.com/_nyomaneka/" target="_blank">
                <BsInstagram className="hvr-card hvr-bounce-in card-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/nyoman-eka-swardita/"
                target="_blank"
              >
                <AiFillLinkedin className="hvr-card hvr-bounce-in card-2" />
              </a>
              <a>
                <AiFillTwitterCircle className="hvr-card hvr-bounce-in card-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="konten-desc">
          <p>
            First year Informatics Engineering student {""}
            <span>
              <u>
                <a href="https://www.unila.ac.id" target="_blank">
                  Universitas Lampung
                </a>
              </u>
              .
            </span>{" "}
            Frontend developer intern {""}
            <span>
              <u>
                <a
                  href="https://www.tupaitech.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TupaiTech
                </a>
              </u>
              .
            </span>{" "}
            Interested in Javascript ecosystem
          </p>
        </div>
        <div className="card-msg">
          <a href="mailto:nyeka2101@gmail.com">Say Hi!</a>
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
  font-family: "Poppins", sans-serif;

  .card-2 {
    background: #505558;
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
      font-weight: bold;
    }
  }

  .card-content {
    display: flex;

    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
    }

    .card-icon {
      display: flex;
      margin-left: 20px;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }

  .konten-desc {
    text-align: center;
    span {
      color: #c6c7cb;
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
    width: 20vw;
    align-items: flex-start;

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
