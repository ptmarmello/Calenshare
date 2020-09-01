import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>

                {/* You can write any path as LINK object from react-router-dom here */}
            </Switch>
        </BrowserRouter>
    );
}