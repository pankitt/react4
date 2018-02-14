import React, { Component } from 'react';
import './index.css';
import Header from 'components/Header/index';
import Main from 'containers/Main/index';

const menu = [
    {link: '/products', label: 'Products'},
    {link: '/contacts', label: 'Contacts'},
];
const PRODUCTS = [
    {number:0, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {number:1, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {number:2, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {number:3, category: 'Sporting Goods', price: '$20.99', stocked: false, name: 'Hockey'},
    {number:4, category: 'Sporting Goods', price: '$1.99', stocked: false, name: 'Rugby'},
    {number:5, category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Am. Football'},
    {number:6, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod'},
    {number:7, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone'},
    {number:8, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus'},
    {number:9, category: 'Electronics', price: '$299.99', stocked: true, name: 'Samsung'},
    {number:10, category: 'Electronics', price: '$199.99', stocked: true, name: 'LG'},
    {number:11, category: 'Electronics', price: '$359.99', stocked: true, name: 'Sony'}
];


class App extends Component {
  render() {
    return (
        <section>
            <Header items={menu}/>
            <Main products={PRODUCTS} />
        </section>
    );
  }
}

export default App;
