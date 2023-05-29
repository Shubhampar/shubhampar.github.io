import React from "react";
import { Container} from "react-bootstrap";
import Techstack from "../Components/TechStack/TechStack";
import ToolStack from "../Components/ToolStack/ToolStack";

function About() {
  return (
    <Container id="about" fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Techstack />
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;