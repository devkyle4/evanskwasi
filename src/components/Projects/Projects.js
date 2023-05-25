import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weeds from "../../Assets/Projects/weeds.png";
import sign from "../../Assets/Projects/sign_language.png";
import chatui from "../../Assets/Projects/chatui.png";
import dataCareer from "../../Assets/Projects/Data_Survey.png";
import imageGen from "../../Assets/Projects/image_generator.png";
import kernel from "../../Assets/Projects/kernel.png";

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
              imgPath={chatui}
              isBlog={false}
              title="Chat App UI"
              description="A flutter Chat UI for creating chatapps to share resources and hangout with friends built with react.js and Material-UI."
              ghLink="https://github.com/devkyle4/ChatApp_UI"
              demoLink="https://github.com/devkyle4/ChatApp_UI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kernel}
              isBlog={false}
              title="Xkernel"
              description="My personal customized microkernel with efficient memory management and scheduling algorithm for teaching. Created with assembly language and C programming languages"
              ghLink="https://github.com/devkyle4/Kernel/tree/master"
              demoLink="https://github.com/devkyle4/Kernel/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataCareer}
              isBlog={false}
              title="Analytics from Data Professionals"
              description="An analytics from a survey taken from people in the data related field. With the use of PowerBI, the data is being explored to draw out relationships between various parameters accepted from the survey"
              ghLink="https://github.com/devkyle4/Data_Pros_Survey_Analysis_Pbi"
              demoLink="https://github.com/devkyle4/Data_Pros_Survey_Analysis_Pbi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weeds}
              isBlog={false}
              title="Weed Detection with ResNet"
              description="Used the open-source DeepWeed dataset to train a model with a custom ResNet-9 classifer model using 'PyTorch' framework. The model was able to successfully to detect weeds from crop plants with an accuracy of 89%."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageGen}
              isBlog={false}
              title="Ai Image Generator"
              description="With the aid of the OPENAI api, I build a web app with minimalistic features that is able to generate AI images."
              ghLink="https://github.com/devkyle4/Simple-Image-Generator_OpenAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Sign Language Recognition"
              description="Trained a CNN classifier using with Keras and tensorflow. The classifier sucessfully predicts American sign language to it with 88% accuracy."
              ghLink="https://github.com/devkyle4/Machine-Learning/tree/master"
            />
          </Col>
        </Row>
      </Container>
      ;
    </Container>
  );
}

export default Projects;
