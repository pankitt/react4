import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class TableUsers extends Component {
    render(){
        const users = this.props.users;

        return (
             <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>№</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Email</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {users.map((item, index) =>
                      <TableRow key={index}>
                        <TableRowColumn>{index + 1}</TableRowColumn>
                        <TableRowColumn>
                            <Link to={`/users/${item.id}`}>{item.name}</Link>
                        </TableRowColumn>
                        <TableRowColumn>{item.email}</TableRowColumn>
                      </TableRow>
                    )}
                </TableBody>
             </Table>
        )
    }
}

class UserList extends Component {
    render() {
        const users = this.props.users;
        
        return (
            <section>
                <h3>Users</h3>
                <TableUsers users={users} />
            </section>
        );
    }
}

export default UserList;