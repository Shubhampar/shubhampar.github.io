import React from "react";
import { Container } from "@chakra-ui/react";
import BeautyWorld from "../assets/BeautyWorld.png";
import Apple from "../assets/apple.png";
import FirstCry from "../assets/firstcry.png";
// import IndiaMart from "../assets/indiamart.png";
import { SiChakraui,SiReact,SiRedux,SiJavascript,SiCss3, SiFirebase } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import MyProjectCard from "./MyProjectCard";


const Projects = () => {
  const projects = [
    {
      id: 1,
      livelink: "https://touted-toad-5222-wlt1.vercel.app/",
      github: "https://github.com/Shubhampar/touted-toad-5222.git",
      techStack: [  {id:1,skill:'React',img:<SiReact size='20px' color='skyblue' />},
      {id:2,skill:'Redux',img:<SiRedux size='20px' color='darkblue' />},
      {id:3,skill:'Chakra',img:<SiChakraui size='20px' color='rgb(78,201,196)' />},
      {id:4,skill:'Firebase',img:<SiFirebase size='20px' color='orange' />},
    ],
      description:
        "This is website which basically deals with  skincare makeup and haircare products ",
      features: [],
      images: BeautyWorld,
      gif: "",
      projectTitle: "BeautyWorld",
    },
    {
      id: 2,
      livelink: "https://vermillion-arithmetic-ac5003.netlify.app/",
      github: "https://github.com/Shubhampar/judicious-income-4437.git",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
      description:
        "fineapple.com and this website basically consists of electronic gadgets like phones ,watches, laptops and tablet.Acoolaborative project",
      features: [],
      images: Apple,
      gif: "",
      projectTitle: "Apple.com Clone",
    },
    {
      id: 3,
      livelink: "https://scintillating-kangaroo-883080.netlify.app/",
      github: "https://github.com/Shubhampar/teal-board-7169.git",
      techStack: [{id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:4,skill:'React',img:<SiReact size='20px' color='skyblue' />},
      {id:5,skill:'Redux',img:<SiRedux size='20px' color='darkblue' />},
      {id:6,skill:'Chakra',img:<SiChakraui size='20px' color='rgb(78,201,196)' />},],
      description:
        "Fauget Store is a cloned website of firstcry.com which deals with baby's essentials",
      features: [],
      images: FirstCry,
      gif: "",
      projectTitle: "Firstcry.com clone",
    },
    // {
    //   id: 4,
    //   livelink: "https://chimerical-empanada-f4a3f8.netlify.app/",
    //   github: "https://github.com/fahisayub/BlueHeavenClone",
    //   techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
    //   {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
    //   {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
    //   description:
    //     "IndiaMART is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal. ",
    //   features: [],
    //   images: IndiaMart,
    //   gif: "",
    //   projectTitle: "IndiaMART Clone",
    // },
  ];

  return (
    <Container id='Projects' maxW="90%"  margin='auto'padding='0px'  marginTop='50px'>
    <Container maxW="100%" 
      gap='20px' margin='auto' p='0px' marginTop='50px'>
      {projects.map((project) => {
        return <MyProjectCard key={project.id} {...project} />;
      })}
    </Container>
    </Container>
  );
};

export default Projects;
