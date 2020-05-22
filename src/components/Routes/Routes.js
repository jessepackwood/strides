import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import Contact from '../../views/Contact/Contact'
import ProjectView from '../../views/ProjectView/ProjectView'
import {projects} from '../../services/projects'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route path ='/contact' component = {Contact} />
            <Route exact path='/work' />
            <Route path='/work/blossom' render= {(props) => <ProjectView {...props} project={projects.blossom} />} />
            <Route path='/work/the-daily-shift' render= {(props) => <ProjectView {...props} project={projects.theDailyShift} />} />
            <Route path='/work/whole-body-challenge' render= {(props) => <ProjectView {...props} project={projects.wholeBodyChallenge} />} />
            <Route path='/work/starv' render= {(props) => <ProjectView {...props} project={projects.starv} />} />
            <Route path='/work/next-level-sports' render={(props) => <ProjectView {...props} project={projects.nextLevelSports} /> } />
        </Switch>
    );
};

export default Routes;