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
              title="FineApple.com"
              description="We have basically cloned the website apple.com and we kept the name as fineapple.com and this website basically consists of electronic gadgets like phones ,watches, laptops and tablet which has differnt OS version than normal android."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MockApi | LocalStorage"
              link="https://playful-frangollo-777454.netlify.app/"
              a="https://github.com/Shubhampar/judicious-income-4437.git"
            />
          </Col>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/119346050/241807826-818bf108-5477-4e56-b341-8b13e34889e8.png"
              title="FaugetStore.com"
              description="This is an E-Commerce website which specializes in selling clothes and styling products for babies."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://scintillating-kangaroo-883080.netlify.app/"
              a="https://github.com/Shubhampar/teal-board-7169.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/119346050/241807812-6d2bc0f5-01f5-46e4-9017-b3245ee67119.png"
              title="BeautyWorld"
              description="Its an E-commerce webiste which basically deals with comsemtic, skincare and haircare products"
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | Bootstrap | React |Redux "
              link="https://beauty-world-cosmetic-ecommerce.vercel.app/"
              a="https://github.com/Shubhampar/touted-toad-5222.git"
            />
          </Col>
          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Shubhampar/clothy/raw/master/src/assets/landingpage.png"
              title="Clothy"
              description="Its an E-commerce website which basically deals with appreals for mens and womens"
              tech="Tech-Stacks"
              techD="Html | Javascript | Chakra-UI | Css | React |Redux | Typescript"
              link="https://clothy-fab.netlify.app/"
              a="https://github.com/Shubhampar/clothy.git"
            />
          </Col> */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/121215502/255426889-7fefce9b-5763-4af3-97c9-31e5d4527816.png"
              title="enormous-library-3081-RealEstate-Marketplace-App"
              description="Briks99 is an Indian online real estate marketplace which is a subsidiary of Zillow. It facilitates buyers and renters to find homes and neighborhoods across the United States through recommendations, local insights, and map overlays that offer details on commutes, schools, churches."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | Redux | Express | MongoDB | Mongoose | ChakraUI "
              link="https://stalwart-fairy-7587d7.netlify.app/"
              a="https://github.com/Shubhampar/enormous-library-3081-RealEstate-Marketplace-App-.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
