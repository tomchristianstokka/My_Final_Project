import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx';
import Work from './Pages/Work.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx'; 

const Main = () => {
    return (
        <Mainstyled>
            <BrowserRouter>
                <Switch>
                    <Route path='/contact' component={ Contact } />
                    <Route path='/about' component={ About } />
                    <Route path='/work' component={ Work } />
                    <Route path='/' component={ Home } />
                </Switch>
            </BrowserRouter>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
        background-color: tan;
        font-size: 40px;
`;