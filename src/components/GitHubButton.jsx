import {  Container, Text,Button } from '@chakra-ui/react';
import React from 'react';
const GitHubButton = () => {
    return (
        <Container  height= '424px'
        width= '424px'>
        <Container transform= 'rotate(45deg)'
    borderRadius= '3.125rem'
    border='4px solid #FF9D57'
    height= '300px'
    width= '300px'
    bg= '#2d2c2c '
    >
            
        <Container transform= 'rotate(-45deg)'
         height= '300px'
         width= '300px'
         py='50px'
         >
        <Text 
    fontSize='30px'
    color='#FF9D57'>Have a look at
    my github</Text>
        <Button borderRadius= '1.25rem'
    height= '65px'
    width= '185px'
    bg= '#FF9D57' >
        <Text textAlign= 'center'
    fontSize= '32px'
    color= '#2d2c2c'>GitHub</Text></Button>
    </Container>
      </Container>
      </Container>
    );
};

export default GitHubButton;