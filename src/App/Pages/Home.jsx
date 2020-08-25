import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Home :: tomchristianstokka</title>
            </Helmet>
            <div className='nested-wrapper'>
                <Tabbed />
            </div>
            <div className='nested-wrapper'>
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;