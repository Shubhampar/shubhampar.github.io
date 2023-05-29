import { Center, Container, Image } from '@chakra-ui/react';
import React from 'react';

const GitHubStats = () => {
    return (
        <Container maxW={['full','full','60%','full','full']}  gap='10px' m='auto'>
            <Center gap='10px'display={['block','block','block','flex','flex']}>

        <Image src='https://github-readme-streak-stats.herokuapp.com?user=shubhampar&theme=github-dark&border_radius=20'/>
        <Image src='https://github-readme-stats.vercel.app/api?username=shubhampar&show_icons=true&theme=dark&border_radius=20'/>
            </Center>
            <Center>

        <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=shubhampar&layout=compact&border_radius=20'/>
            </Center>
        </Container>
    );
};

export default GitHubStats;