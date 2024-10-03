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
  return (<div id="skills"  >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="purple">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
     <div className="skills-card">
      <a href = "https://reactjs.org/" target={"_blank"} className="skills-card-img">  
        <DiReact />
        <p class="skills-card-name">React</p>
      </a>
     </div>
      </Col>
   
<Col xs={4} md={2} className="tech-icons">
<div className="skills-card">
      <a href = "https://redux.js.org/" target={"_blank"} className="skills-card-img"> 
        <SiRedux />
        <p class="skills-card-name">Redux</p>
      </a>
</div>
      </Col>
<Col xs={4} md={2} className="tech-icons">
<div className="skills-card">
      <a href = "https://expressjs.com/" target={"_blank"} className="skills-card-img">
        <SiExpress />
        <p class="skills-card-name">Express</p>
      </a>
</div>
      </Col>
   
<Col xs={4} md={2} className="tech-icons">
<div className="skills-card">
      <a href = "https://www.mongodb.com/" target={"_blank"} className="skills-card-img"> 
        <DiMongodb />
        <p class="skills-card-name">Mongodb</p>
      </a>
</div>
      </Col>
   
 <Col xs={4} md={2} className="tech-icons">
 <div className="skills-card">
      <a href = "https://nodejs.org/en/" target={"_blank"} className="skills-card-img">
        <DiNodejs />
        <p class="skills-card-name">Nodejs</p>
      </a>
  </div>     
      </Col>
   
<Col xs={4} md={2} className="tech-icons">
<div className="skills-card">
      <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript" target={"_blank"} className="skills-card-img">
        <DiJavascript1 />
        <p class="skills-card-name">Javascript</p>
      </a>
</div>
      </Col>
  
<Col xs={4} md={2} className="tech-icons">
<div className="skills-card">
      <a href = "https://tailwindcss.com/" target={"_blank"} className="skills-card-img">
        <SiTailwindcss />
        <p class="skills-card-name">Tailwind</p>
        </a>
</div>
      </Col>
   
      
  <Col xs={4} md={2} className="tech-icons">
  <div className="skills-card">
       <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"} className="skills-card-img">
        <DiHtml5 />
        <p class="skills-card-name">Html5</p>
        </a>
    </div>    
      </Col>
    
     <Col xs={4} md={2} className="tech-icons">
     <div className="skills-card">
      <a href = "https://github.com/" target={"_blank"} className="skills-card-img">
        <DiGithubBadge />
        <p class="skills-card-name">Github</p>
        </a>
      </div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
     <div className="skills-card">
      <a href = "https://getbootstrap.com/" target={"_blank"} className="skills-card-img">
        <DiBootstrap />
        <p class="skills-card-name">Bootstrap</p>
        </a>
      
     </div>
     </Col>
    
    </Row>
    </div>
  );
}

export default Techstack;