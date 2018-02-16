import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ProductName from 'components/ProductName';


class TableProduct extends Component {
    render(){
        const product = this.props.product;

        return (
             <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>№</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Category</TableHeaderColumn>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {product.map((item, index) =>
                      <TableRow key={index}>
                        <TableRowColumn>{index + 1}</TableRowColumn>
                        <TableRowColumn>
                            <Link to={`/products/${item.id}`}>{item.name}</Link>
                            <Route path='/products/:number' render={(obj) => <ProductName products={product} obj={obj} />} />
                        </TableRowColumn>
                        <TableRowColumn>{item.category}</TableRowColumn>
                        <TableRowColumn>{item.price}</TableRowColumn>
                      </TableRow>
                    )}
                </TableBody>
             </Table>
        )
    }
}

class Home extends Component {

    render() {
        const product = this.props.products;

        return (
            <section>
                <h3>Home</h3>
                <TableProduct product={product} />
            </section>
        );
    }
}

export default Home;