import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ezemanager"
              description="EzeManager is a smart, intuitive platform designed to simplify project and task management. It helps teams stay organized, track progress, and collaborate efficiently. With powerful automation and clear insights, EzeManager streamlines productivity for businesses of any size."
              ghLink="https://github.com/Kaustubhpatel11/TASK-MANAGER"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Trackfit"
              description="This web app helps users easily track calories burned through daily activities and workouts. It provides real-time calculations based on user data, offering insights into fitness progress and goals. With a clean interface and detailed analytics"
              ghLink="https://github.com/Kaustubhpatel11/Trackfit"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
