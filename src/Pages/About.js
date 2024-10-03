import React from "react";
import { Container, Row } from "react-bootstrap";
import Techstack from "../Components/TechStack/TechStack";
import ToolStack from "../Components/ToolStack/ToolStack";
import SelfIntro from "../Components/SelfIntro/SelfIntro";


function About() {
  return (
    <>
      <div className="about-section about section" id="about">
        <br />
        <br />
        <br />
        <h1 style={{ fontSize: "2.6em", textAlign: "center", padding: "0" }}>
          <span className="purple">
            About
          </span>
        </h1>
        <SelfIntro />
      </div>
      {/* <Particle /> */}
      <Container fluid>
        <Techstack />
        <ToolStack />
      </Container>

    </>
  );
}

export default About;