import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "../header/Header";
import Home from '../home/Home';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import WorkFLow from '../workflow/WorkFlow';
import Contacts from '../contacts/Contacts';

import "./Main.scss";




const Main =() => {
      return (
        <>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/portfolio' component={Portfolio}/
            >
            <Route path='/workflow' component={WorkFLow}/
            >
            <Route path='/contacts' component={Contacts}/>
          </Switch>
        </main>
        </>
    );
}
export default Main;