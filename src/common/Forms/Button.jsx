import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
            className='Button'
            type={ type }
        >
            { children }
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.div`
    background-color: lightgreen;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;


    &:hover {
        background-color: darkgreen;
    }

    &:active {
        background-color: black;
    }
`;