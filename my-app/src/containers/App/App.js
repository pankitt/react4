import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from '../../components/FilterableProductTable/index';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Sporting Goods', price: '$20.99', stocked: false, name: 'Hockey'},
    {category: 'Sporting Goods', price: '$1.99', stocked: false, name: 'Rugby'},
    {category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Am. Football'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus'},
    {category: 'Electronics', price: '$299.99', stocked: true, name: 'Samsung'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'LG'},
    {category: 'Electronics', price: '$359.99', stocked: true, name: 'Sony'}
];

class App extends Component {
  render() {
    return (
        <section>
            <FilterableProductTable products={PRODUCTS} />
        </section>
    );
  }
}

export default App;
