import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Work from './Pages/Work.jsx';
import Contact from './Pages/Contact.jsx';

const Main = () => {
    return (
        <Mainstyled>
            <Switch>
                <Route path='/contact' component={ Contact } />
                <Route path='/work' component={ Work } />
                <Route path='/' component={ Home } />
                />
            </Switch>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
        background-color: #02081b;
        padding: 50px;
`;