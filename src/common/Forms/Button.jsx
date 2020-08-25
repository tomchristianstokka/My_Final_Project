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
    background-color: #02081b;
    color: #8c1e1e;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;



    &:hover {
        background-color: #02081b;
        color: #d6d6d6;
    }

    &:active {
        background-color: lightgreen;
        color: #02081b;
    }
`;