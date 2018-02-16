import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           userName: []
        };
        this.login = this.props.obj.match.params.number;
    }

    componentWillMount() {
        const root = 'https://jsonplaceholder.typicode.com/users/' + this.login;
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const request = new Request(
            `${root}`,
            {
                method: 'GET',
                headers: headers
            }
        );

        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log('userName', data);
                this.setState({ userName: data })
            });
    }

    render() {
        const item = this.state.userName;

        if (!item) return <div>User not found</div>;
        return (
            <section>
                <h3>User Name:</h3>

                <div>
                  <p>{item.name} - {item.email}</p>
                  <p><Link to='/users'>Back</Link></p>
                </div>
            </section>
        );
    }
}

export default UserPage;