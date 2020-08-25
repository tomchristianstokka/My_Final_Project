import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({ name, currCategory, currCategorySet }) => {

    console.log('FilterNavButton currCategory', currCategory);

    const changeCategory = () => {
        currCategorySet(name);
    }
    
    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';

    return (
        <FilterNavButtonStyled 
            className={ theClassName }
            onClick={ changeCategory }
        >
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: #d6d6d6;
    margin: 10px; 
    border-radius: 25px;

    cursor: pointer;

    &:hover {
        background-color: #560707;
        color: #d6d6d6;
    }

    &:active {
        background-color: #8c1e1e;
        color: white;
    }
`;