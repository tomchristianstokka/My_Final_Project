import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Contact :: tomchristianstokka</title>
            </Helmet>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;