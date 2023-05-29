import React, { useState } from "react";
import "./header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-scroll"
import Button from "react-bootstrap/Button";


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

          <Nav className="ml-auto" defaultActiveKey="#home">

          <Nav.Item className="fork-btn">
          <Link to="home">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
                id="home"
              >
                Home
          </Button>
          </Link>
          </Nav.Item>

           <Nav.Item className="fork-btn">
          <Link to="about">
          <Button onClick={()=>{rel(x)}} 
                target="_blank"
                className="about section"
                id="about" 
              >
                About
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="skills">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
                id="skills"
              >
                Skills
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="projects">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
                id="projects"
              >
                Projects
          </Button>
          </Link>
          </Nav.Item>

         


          <Nav.Item className="fork-btn">
          <Link to="contact">
          <Button onClick={rel}
                target="_blank"
                className="fork-btn-inner"
                id="contact"
              >
                Contact
          </Button>
          </Link>
          </Nav.Item>

         

            
            <Nav.Item className="fork-btn">
            <Button
                href="https://drive.google.com/file/d/1T8P0teTruzCicLS99c6lO9lToqb3Fyy0/view?usp=share_link"
                target="_blank"
                className="fork-btn-inner"
              >
                Resume
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;