import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Headerstyled>
            <div className='nested-wrapper'>
                Welcome
            </div>
        </Headerstyled>
     );
}

export default Header;

const Headerstyled = styled.header`
            background-color: tan;
            font-size: 30px;
    `;