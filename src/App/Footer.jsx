import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

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

        @media ${mq.tablet} {
            background-color: darkred;
        }
        @media ${mq.desktop} {
            background-color: darkseagreen;
        }        
`;