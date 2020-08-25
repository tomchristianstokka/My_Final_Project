import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    
    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        console.log('Cliked the hamburger menu', showMenu);
        showMenuSet(!showMenu);
    }

    // useEffect is for lifecycle events, like component mounted
    // When we pass empty [] it triggers component mounted
    useEffect(()=>{
        // console.log('Mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            // console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }

        // On Load / Component Mounts
        handleWindowSizeChange();

        // Every Time Window is resized
        window.addEventListener('resize', handleWindowSizeChange);
    
        // Clean Up our Listners on dismount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, []); // Straight braces empty = component mounted

    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <div
                    className='hamburger'
                    onClick={ toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                    <div className='links'>
                        <NavLink to='/work'>Work</NavLink>
                        <NavLink to='/' exact>About</NavLink>  
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                }
            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #02081b;
    color: #d6d6d6;
    text-align: right;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 10px;

        svg {
            color: #8c1e1e;
            width: 25px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }

    a {
        display: inline-block;

        text-align: center;
        font-size: 18px;
        background-color: #d6d6d6;
        color: #02081b;

        text-decoration: none;

        margin-top: 0px;

        margin-bottom: 0px;

        border-radius: 26px;

        width: 100px;
        line-height: 30px;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #560707;
            color: #d6d6d6;
        }
        &:active {
            background-color: #8c1e1e;
            color: white;
        }
    }
`;