import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class UserCard extends Component {
    render() {
        const user = this.props.user;
        const back = <Link to='/users'>Back</Link>;

        return (
            <Card>
                <CardHeader
                  title={user.username}
                  subtitle={user.email}
                  avatar="http://dnevniki-vampira.org/templates/tv_horror/dleimages/noavatar.png"
                />
                <CardTitle title={user.name} subtitle={user.phone} />
                <CardActions>
                  <FlatButton label={back} />
                </CardActions>
            </Card>
        )
    }

}


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
                //console.log('userName', data);
                this.setState({ userName: data })
            });
    }

    render() {
        const user = this.state.userName;

        if (!user) return <div>User not found</div>;
        return (
            <section>
                <h3>User Name:</h3>
                <UserCard user={user} />
            </section>
        );
    }
}

export default UserPage;