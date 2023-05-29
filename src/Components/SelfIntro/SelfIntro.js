import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Shubham Singh</span> an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{color: "#0A81AB" , fontStyle:"italic"}}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              I developed passion for coding a few years back when I printed my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}> "Hello world"</span> 😃, that hello world just hits different. Since then aesthetically functional websites has just been my thing.
            </p>
          </Col>
        
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
