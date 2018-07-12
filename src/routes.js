import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Products from './components/Products';
import Home from './components/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
    </Switch>
);