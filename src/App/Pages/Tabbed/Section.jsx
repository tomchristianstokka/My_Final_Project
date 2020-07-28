import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../common/mediaQueries.js';

const Section = ({chosenTab}) => {

    return (
        <SectionStyled className='Section'>
            <div className='column column1'>
                <img src={ chosenTab.image } alt={ chosenTab.title }/>
            </div>
            <div className='column column2'>  
                <h2>{ chosenTab.title }</h2>
                <div dangerouslySetInnerHTML={ {__html: chosenTab.text } } />
            </div>  
        </SectionStyled>
    );
}

export default Section;

const SectionStyled = styled.div`
    background-color: tan;
    padding: 20px;

    @media ${mq.tablet} {
        display: flex;
    }

    .column1 {
        @media ${mq.tablet} {
            max-width: 300px;
            width: 25%;
        }
        text-align: center;

        img {
            max-width: 100%;
        }
    }

    .column2 {
        width: 75%;
        padding: 20px;
    }
`;