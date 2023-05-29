import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/119346050/241807407-8697f377-5d41-41c4-9159-829a6ac14da4.png"
              title="Apple.com Clone"
              description="We have basically cloned the website apple.com and we kept the name as fineapple.com and this website basically consists of electronic gadgets like phones ,watches, laptops and tablet which has differnt OS version than normal android."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MockApi | LocalStorage"
              link="vermillion-arithmetic-ac5003.netlify.app/"
              a="https://github.com/Shubhampar/judicious-income-4437.git"
            />
          </Col>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/119346050/241807826-818bf108-5477-4e56-b341-8b13e34889e8.png"
              title="FirstCry.com Clone"
              description="This is an E-Commerce website which speciaizes in selling clothes and styling products for babies."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="scintillating-kangaroo-883080.netlify.app/"
              a="https://github.com/Shubhampar/teal-board-7169.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/119346050/241807812-6d2bc0f5-01f5-46e4-9017-b3245ee67119.png"
              title="BeautyWorld "
              description="Its an E-commerce webiste which basically deals with comsemtic, skincare and haircare products"
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="touted-toad-5222-wlt1.vercel.app"
              a="https://github.com/Shubhampar/touted-toad-5222.git"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/to-do%201.PNG?raw=true"
              title="To-Do-List"
              description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. It is created by JavaScript, Html, Css languages."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://iridescent-granita-ec6794.netlify.app/"
              a="https://github.com/Rushikesh7997/To-Do-List-App"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
