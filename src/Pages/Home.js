import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/shubhamprof.png";
// import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";
import Resume from "../Assets/Shubham-Singh-Resume.pdf"
function Home() {
  const openResume = () => {
    const a = document.createElement('a');
    // a.setAttribute('id','resume-link-1');
    // a.style.display = 'none';
    a.href = Resume;
    a.download = 'Shubham-Singh-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.open(Resume, '_blank');
  };
  return (
    <section id="home">
      <div className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              <img src={myImg} alt="home pic" className="img-fluid home-img" />
              {/*className="home-img"  */}
            </Col>

            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name " id="user-detail-name">
                I'm
                <strong className="main-name br"> Shubham Singh</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <TypeWriter />
                <br />
                <br />
                <div style={{width:"60%",display:"flex",justifyContent:"space-evenly",margin:"auto"}}>
                  <button className="body-button" > <a href="https://github.com/Shubhampar" target="_blank" rel="noopener noreferrer">Github</a></button>
                  {/* <button className="body-button" id="resume-button-2" ><a href="https://drive.google.com/uc?export=download&id=1T8P0teTruzCicLS99c6lO9lToqb3Fyy0" target="_blank" rel="noreferrer">Resume</a></button> */}
                  <button className="body-button" id="resume-button-2" onClick={openResume}>Resume</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </section>
  );
}

export default Home;