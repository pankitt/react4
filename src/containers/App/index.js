import React, { Component } from 'react';
import './index.css';
import Header from 'components/Header';
import Main from 'containers/Main';

const MENU = [
    {link: '/users', label: 'Users'},
    {link: '/products', label: 'Products'},
    {link: '/contacts', label: 'Contacts'},
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           users: [],
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

        const root2 = 'https://jsonplaceholder.typicode.com';
        const request2 = new Request(
            `${root2}/users`,
            {
                method: 'GET',
                headers: headers
            }
        );
        fetch(request)
            .then(response => response.json())
            .then(data => {
                //console.log('products', data);
                this.setState({ products: data })
            });
        fetch(request2)
            .then(response => response.json())
            .then(data => {
                //console.log('users', data);
                this.setState({ users: data })
            });
    }

    render() {
        return (
            <section>
                <Header items={this.state.menu} />
                <Main products={this.state.products} users={this.state.users}/>
            </section>
        );
    }
}

export default App;
