import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Welcome :: tomchristianstokka</title>
            </Helmet>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;