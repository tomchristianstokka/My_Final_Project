import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {

 // Single line comment
    /*
        Multi line comment
        more than one line
        see
    */

const myVariable = 'Look into this'
const anotherOne = 'Or this one'
console.log(myVariable, anotherOne);

const random = () => {
    //Actions to execute
    console.log('Execute random actions');
}

random();

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
        background-color: #02081b;
        color: #d6d6d6;

        @media ${mq.tablet} {
            background-color: #02081b;
        }
        @media ${mq.desktop} {
            background-color: #02081b;
        }        
    `;