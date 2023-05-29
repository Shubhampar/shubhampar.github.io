import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
  
} from "react-icons/di";
import {SiRedux,SiExpress,SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (<div id="skills" >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="purple">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://reactjs.org/" target={"_blank"}>  
        <DiReact />
        <p>React</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://redux.js.org/" target={"_blank"}> 
        <SiRedux />
        <p>Redux</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://expressjs.com/" target={"_blank"}>
        <SiExpress />
        <p>Express</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://www.mongodb.com/" target={"_blank"}> 
        <DiMongodb />
        <p>Mongodb</p>
      </a>
      </Col>
      
    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://nodejs.org/en/" target={"_blank"}>
        <DiNodejs />
        <p>Nodejs</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
      <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript" target={"_blank"}>
        <DiJavascript1 />
        <p>Javascript</p>
      </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://tailwindcss.com/" target={"_blank"}>
        <SiTailwindcss />
        <p>Tailwind</p>
        </a>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
       <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
        <DiHtml5 />
        <p>Html5</p>
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://github.com/" target={"_blank"}>
        <DiGithubBadge />
        <p>Github</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://getbootstrap.com/" target={"_blank"}>
        <DiBootstrap />
        <p>Bootstrap</p>
        </a>
      </Col>
    </Row>
    </div>
  );
}

export default Techstack;