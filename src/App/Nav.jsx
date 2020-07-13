import React from 'react';
import styled from 'styled-components';

const Nav = () => {  
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <a href='/'>Welcome</a>
                <a href='/work'>Work</a>
                <a href='/about'>About Me</a>
                <a href='/contact'>Contact</a>
            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: tan;
    color: black;

    text-align: center;

    a {
        display: inline-block;

        text-align: center;
        line-height: 50px;
        font-size: 20px;
        background-color: tan;
        color: black;

        text-decoration: none;

        width: 150px;
        margin-right: 10px;
        margin-left: 10px;

        &:hover {
            background-color: beige;
        }
    }
`;