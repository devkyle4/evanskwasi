import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Evans Kwasi </span>
            from <span className="purple"> Ghana.</span>
            <br />I am also known as <span className="purple">Devkyle</span> on
            the internet.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Biographies
            </li>
            <li className="about-activity">
              <ImPointRight /> Football/Soccer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Start making the difference Now<br></br>
            because Tomorrow will be built on Today!"{" "}
          </p>
          <footer className="blockquote-footer">Evans</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
