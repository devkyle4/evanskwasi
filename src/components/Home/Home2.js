import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a tech enthusiast, a programmer and a technical writer, I
              think… 🤷‍♂️
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple">
                  {" "}
                  C++, Javascript and Python and English.{" "}
                </b>
              </i>
              <br />
              <br />
              My Research Interest includes Machine Learning, AI, Robotics and
              &nbsp;
              <i>
                and also in areas related to{" "}
                <b className="purple">
                  Cognitive Science and Neuromorphic Science.
                </b>
              </i>
              <br />
              <br />I enjoy developing ML models, web, mobile apps and playing
              around APIs at my leisure with <b className="purple">
                Node.js
              </b>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  Javascript and Machine Learning Libraries
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Pytorch and Scikit-Learn</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devkyle4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/evansk88"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;