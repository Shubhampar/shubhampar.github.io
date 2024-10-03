// import React, { useState } from "react";
// import "./header.css"
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import {Link} from "react-scroll"
// import Button from "react-bootstrap/Button";
// import Resume1 from "../Shubham-Singh-Resume.pdf"
// function Header() {
  
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);
//   const  x = window.matchMedia("(max-width:1000px)")

//   function rel(x) {
//     if (x.matches) { // If media query matches
//       let a= document.getElementById("tgl");
//       a.click();
//     } 
//   }
  

//   return (
//     <Navbar
//      id="nav-menu"
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     > 
//       <Container>
//         {/* <Navbar.Brand className="purple">Shubham</Navbar.Brand> */}
//         <Navbar.Toggle id="tgl"
//           aria-controls="responsive-navbar-nav">
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>

//         <Navbar.Collapse id="responsive-navbar-nav">

//           <Nav className="ml-auto" defaultActiveKey="#home">

//           <Nav.Item className="fork-btn">
//           <Link to="home" className="nav-link home">
//           <Button onClick={()=>{rel(x)}}
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 Home
//           </Button>
//           </Link>
//           </Nav.Item>

//            <Nav.Item className="fork-btn">
//           <Link to="about" className="nav-link about">
//           <Button onClick={()=>{rel(x)}} 
//                 target="_blank"
//                 // className="about section"
//               >
//                 About
//           </Button>
//           </Link>
//           </Nav.Item>

//           <Nav.Item className="fork-btn">
//           <Link to="skills" className="nav-link skills">
//           <Button onClick={()=>{rel(x)}}
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 Skills
//           </Button>
//           </Link>
//           </Nav.Item>

//           <Nav.Item className="fork-btn">
//           <Link to="projects" className="nav-link projects">
//           <Button onClick={()=>{rel(x)}}
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 Projects
//           </Button>
//           </Link>
//           </Nav.Item>
//           <Nav.Item className="fork-btn">
//           <Link to="contact" className="nav-link contact">
//           <Button onClick={rel}
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 Contact
//           </Button >
//           </Link>
//           </Nav.Item>
//             <Nav.Item className="fork-btn">
//               <Link >
//             <Button 
//                 // href={Resume1}
//                 href="https://drive.google.com/file/d/1T8P0teTruzCicLS99c6lO9lToqb3Fyy0/view?usp=sharing"
//                 target="_blank"
//                 // className="nav-link resume" 
//                 // id="resume-button-1"
//                 // download
//                 className="fork-btn-inner"
//               >
//                 Resume
//               </Button>
//               </Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import React, { useState } from "react";
import "./header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-scroll"
import Button from "react-bootstrap/Button";
import Resume from "./Shubham-Singh-Resume.pdf"


function Header() {
  
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const  x = window.matchMedia("(max-width:1000px)")

  function rel(x) {
    if (x.matches) { // If media query matches
      let a= document.getElementById("tgl");
      a.click();
    } 
  }
  const openResume = () => {
    // const a = document.createElement('a');
    const a=document.getElementById("resume")
    a.setAttribute('id','resume-link-1');
    // a.style.display = 'none';
    a.href = Resume;
    a.download = 'Shubham-Singh-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.open(Resume, '_blank');
  };


  return (
    <Navbar
      id="nav-menu"
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle id="tgl"
          aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <div><h1 className="Navbar-Name">Shubham</h1></div>
          <Nav className="ml-auto" defaultActiveKey="#home">

          <Nav.Item className="fork-btn">
          <Link to="home" className="nav-link home">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Home
          </Button>
          </Link>
          </Nav.Item>

           <Nav.Item className="fork-btn">
          <Link to="about" className="nav-link about">
          <Button onClick={()=>{rel(x)}} 
                target="_blank"
                className="fork-btn-inner"
              >
                About
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="skills" className="nav-link skills">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Skills
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="projects" className="nav-link projects">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Projects
          </Button>
          </Link>
          </Nav.Item>

         


          <Nav.Item className="fork-btn">
          <Link to="contact" className="nav-link contact">
          <Button onClick={rel}
                target="_blank"
                className="fork-btn-inner"
              >
                Contact
          </Button>
          </Link>
          </Nav.Item>

         

            
            <Nav.Item className="fork-btn ">
              <a href="#" className="nav-link resume" >
            <Button
                // href="https://drive.google.com/file/d/1T8P0teTruzCicLS99c6lO9lToqb3Fyy0/view?usp=sharing"
                // href="https://drive.google.com/uc?export=download&id=1T8P0teTruzCicLS99c6lO9lToqb3Fyy0"
                // target="_blank"
                // rel="noreferrer"
                onClick={openResume}
                id="resume-button-1"
                className="fork-btn-inner"
                // download
              ><a id="resume" >Resume</a>
              </Button>
              </a>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


