import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home/index';
import ProductsAll from 'components/ProductsAll/index';
import ProductName from 'components/ProductName';
import Contacts from 'components/Contacts/index';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/products' render={() => <ProductsAll products={this.props.products} />} />
                  <Route path='/products/:number' render={(obj) => <ProductName products={this.props.products} obj={obj} />} />
                  <Route path='/contacts' component={Contacts} />
                </Switch>
            </main>
        );
    }
}

export default Main;