import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import Contact from '../../views/Contact/Contact'
import ProjectView from '../../views/ProjectView/ProjectView'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route path ='/contact' component = {Contact} />
            <Route exact path='/work' />
            <Route path='/work/the-daily-shift' component= {ProjectView} />
        </Switch>
    );
};

export default Routes;