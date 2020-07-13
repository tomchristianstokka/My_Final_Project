import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Footerstyled>
            <div className='nested-wrapper'>
                Footer
            </div>   
        </Footerstyled>
    );
}

export default Footer;

const Footerstyled = styled.footer`
        background-color: tan;        
`;