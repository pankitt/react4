import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import ProductsAll from 'components/ProductsAll';
import ProductName from 'components/ProductName';
import Contacts from 'components/Contacts';
import UserList from 'components/UserList';
import UserPage from 'components/UserPage';

class Main extends Component {
    render() {
        const products = this.props.products;
        const users = this.props.users;

        return (
            <main>
                <Switch>
                  <Route exact path='/' render={() => <Home products={products} />} />
                  <Route exact path='/users' render={() => <UserList users={users} />} />
                    <Route path='/users/:number' render={(obj) => <UserPage users={users} obj={obj} />} />
                  <Route exact path='/products' render={() => <ProductsAll products={products} />} />
                    <Route path='/products/:number' render={(obj) => <ProductName products={products} obj={obj} />} />
                  <Route path='/contacts' component={Contacts} />
                </Switch>
            </main>
        );
    }
}

export default Main;