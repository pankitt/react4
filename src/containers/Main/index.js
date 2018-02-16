import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import ProductsAll from 'components/ProductsAll';
import ProductName from 'components/ProductName';
import Contacts from 'components/Contacts';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                  <Route exact path='/' render={() => <Home products={this.props.products} />} />
                  <Route exact path='/products' render={() => <ProductsAll products={this.props.products} />} />
                  <Route path='/products/:number' render={(obj) => <ProductName products={this.props.products} obj={obj} />} />
                  <Route path='/contacts' component={Contacts} />
                </Switch>
            </main>
        );
    }
}

export default Main;