import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import Contact from '../../views/Contact/Contact'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route path ='/contact' component = {Contact} />
            <Route path='/work' />
        </Switch>
    );
};

export default Routes;