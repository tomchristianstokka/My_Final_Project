import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabSet, chosenTab}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';

    return (
        <TabStyled 
            className={ theClassName }
            onClick={ handleClick }
        >
            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    display: inline-block;

    width: 100px;
    line-height: 40px;
    border-radius: 25px 25px 25px 25px;
    text-align: center;

    margin-right: 5px;
    margin-left: 10px;

    background-color: #d6d6d6;
    color: #02081b;
    &.active {
        background-color: #d6d6d6;
        color: #8c1e1e;
    }
`;