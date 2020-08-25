import React from 'react';
import styled from 'styled-components';

const Deets = () => {

    return (
        <DeetsStyled className='Deets'>  	
        Tom-Christian Stokka
        Student UCLA-Extension
        Gothenburg, Sweden
        Mobile: +46 733 26 05 24
        </DeetsStyled>
    );
}

export default Deets;

const DeetsStyled = styled.div`
    color: #02081b;
`;