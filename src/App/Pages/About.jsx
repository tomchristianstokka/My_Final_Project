import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const About = () => {

    return (
        <AboutStyled className='about'>
            <Helmet>
                <title>About :: tomchristianstokka</title> 
            </Helmet> 
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`
    
`;