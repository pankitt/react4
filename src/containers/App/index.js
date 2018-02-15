import React, { Component } from 'react';
import './index.css';
import Header from 'components/Header';
import Main from 'containers/Main';

const MENU = [
    {link: '/products', label: 'Products'},
    {link: '/contacts', label: 'Contacts'},
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           menu: MENU
        }
    }



    componentWillMount() {
        const root = 'http://localhost:3004';
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const request = new Request(
            `${root}/products`,
            {
                method: 'GET',
                headers: headers
            }
        );
        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log('products', data);
                this.setState({ products: data })
            });
        /*fetch('http://localhost:3004/menu')
            .then( response => response.json() )
            .then( data => this.setState({ menu: data }) );*/
    }

    render() {
        return (
            <section>
                <Header items={this.state.menu} />
                <Main products={this.state.products} />
            </section>
        );
    }
}

export default App;
