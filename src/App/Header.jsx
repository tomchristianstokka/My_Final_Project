import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Headerstyled>
            <div className='nested-wrapper'>
                <div className='row-container'>
                    <div className='logo'><FontAwesomeIcon icon={ faPizzaSlice } /></div>
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
    background-color: tan;
    font-size: 30px;
    
    .row-container {
        display: flex;
        justify-content: center;
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
            font-size: 40px;
            margin: 0px;
            color: black;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
            color: black;
        }
    }
`;