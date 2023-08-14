import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paawan Sharma </span>
            from <span className="purple"> Jaipur, India.</span>
            <br /> I am a Second year student pursuing BTech in AI & Data Science
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing ESports
            </li>
            <li className="about-activity">
              <ImPointRight /> Explorations
            </li>
            <li className="about-activity">
              <ImPointRight /> And Learning!
            </li>
          </ul>
          <br>
          </br>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Success Leads to Respect"{" "}
          </p>
          <footer className="blockquote-footer">Paawan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
