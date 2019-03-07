import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Contacts from '../contacts/Contacts';



const Main =() => {
      return (
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contacts' component={Contacts}/>
          </Switch>
        </main>
    );
}
export default Main;