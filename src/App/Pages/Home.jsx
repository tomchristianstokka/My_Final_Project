import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Welcome :: tomchristianstokka</title>
            </Helmet>
            <Tabbed />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;