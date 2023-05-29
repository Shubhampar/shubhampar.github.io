import React from "react";
import {
  Container,
  Img,
  Heading,
  Box,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  projectTitle,
  images,
  description,
  github,
  livelink,
  techStack,
}) => {
  return (
    <Container
      maxW="100%"
      class="project-card"
      margin="auto"
      h="auto"
      boxShadow="lg"
      bg="gray.300"
      display="block"
      borderRadius="10px"
      marginTop="10px"
      padding="10px"
    >
      <Img src={images} boxSize="border-box" borderRadius="10px" />
      <Box>
        <Heading fontWeight="semibold" size="md" margin="20px" className="project-title">
          {projectTitle}
        </Heading>
        <Text margin="20px" h="100px" className="project-description">
          {description}
        </Text>
        <Text class="project-tech-stack">TechStack Used:</Text>
        <Box
          margin="auto"
          display="grid"
          gridTemplateColumns={[
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
          ]}
          gap="10px"
        >
          {techStack.map(({ id, skill, img }) => {
            return (
              <Box
                key={id}
                borderRadius="10px"
                w="60px"
                h="50px"
                bg="white"
                textAlign="center"
                padding="5px"
                boxShadow="base"
              >
                <Icon boxSize="20px">{img}</Icon>
                <Text fontSize="10px">{skill}</Text>
              </Box>
            );
          })}
        </Box>
        <Box display="flex" justifyContent="space-evenly" margin="20px">
          <Button
            as="a"
            target="_blank"
            bg="darkblue"
            color="white"
            className="project-deployed-link"
            href={livelink}
            _hover={{ color: "black", bg: "gray" }}
          >
            <FiExternalLink /> View Live
          </Button>
          <Button as="a"
           target="_blank" 
          bg="black"
           color="white" 
           className="project-github-link"
           href={github}
           _hover={{color:'black',bg:'gray'}}
           >
            <SiGithub />
            View Code
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectCard;
