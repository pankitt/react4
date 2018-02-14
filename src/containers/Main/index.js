import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home/index';
import Products from 'components/Products/index';
import Contacts from 'components/Contacts/index';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/products' component={Products}/>
                  <Route path='/contacts' component={Contacts}/>
                </Switch>
            </main>
        );
    }
}

export default Main;