import React, { Component } from 'react';
import logo from 'logo.svg';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <a href='/'><img src={logo} alt='logo' className='logo' /></a>

                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

export default Header;