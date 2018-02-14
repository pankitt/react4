import React, { Component } from 'react';
import logo from 'assets/logo.svg';

class Header extends Component {

    render() {
        return (
            <header className='header'>
                <a href='/'><img src={logo} alt='logo' className='logo' /></a>

                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </header>
        );
    }
}

export default Header;