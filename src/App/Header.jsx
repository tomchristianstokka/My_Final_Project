import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';
// import { Logo } from '../../public/assets/img/Logo/Logo.png';

const Header = () => {
    return (
        <Headerstyled>
            <div className='nested-wrapper'>
                <div className='row-container'>
                    <div className='text'>
                        <h2>tomchristianstokka</h2>
                        <h3>portfolio</h3>
                    </div>
                </div>
            </div>
        </Headerstyled>
    );
}

export default Header;

const Headerstyled = styled.header`
    background-color: #02081b;
    font-size: 30px;

    @media ${mq.tablet} {
        background-color: #02081b;
    }
    @media ${mq.desktop} {
        background-color: #02081b;
    }
    
    .row-container {
        display: flex;
        justify-content: left;
    }
    .logo {
        color: black;
        margin-right: 10px;

        svg {
            width: 80px;
            height: auto;
        }
    }
    .text {

        h2 {
            font-size: 36px;
            margin: 0px;
            color: #d6d6d6;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
            color: #8c1e1e;
            padding: 0px;
        }
    }
`;