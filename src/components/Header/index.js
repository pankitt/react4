import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';

class Header extends Component {

    render() {
        return (
            <header className='header'>
                <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
                <nav>
                    {this.props.items.map((item, index) =>
                        <Link to={item.link} key={index}>{item.label}</Link>
                    )}
                </nav>
            </header>

        );
    }
}

export default Header;