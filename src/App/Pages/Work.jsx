import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import ServicesContainer from './Services/ServicesContainer.jsx';

const Work = () => {

    return (
        <WorkStyled className='Work'>
            <Helmet>
                <title>Work :: tomchristianstokka</title>
            </Helmet>
            <div className='nested-wrapper'>
                <ServicesContainer />
            </div>
        </WorkStyled>
    );
}

export default Work;

const WorkStyled = styled.div`
    
`;