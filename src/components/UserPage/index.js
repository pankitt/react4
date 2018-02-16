import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {

    render() {
        const num = this.props.obj.match.params.number;
        const users = this.props.users;
        const find = id => users.find(p => p.id === Number(id));
        const item = find(num);

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