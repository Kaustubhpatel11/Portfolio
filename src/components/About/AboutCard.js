import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kaustubh Patel</span>{" "}
            from <span className="purple">Noida, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Student</span> at{" "}
            <span className="purple">AKGEC</span>.
            <br />I am pursuing B.tech in  {" "}
            <span className="purple">Computer Science & Information Technology</span> 
            
            <br />
            <br />
          Other than coding I love engaging in activities that challenge me and
            inspire or uplift me :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight />Reading Blogs and Books
            </li>
            <li className="about-activity">
              <ImPointRight />Working Out
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
