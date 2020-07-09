import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Mainstyled>
            <div className='nested-wrapper'>
                Projects
            </div>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
        background-color: tan;
        font-size: 40px;
`;