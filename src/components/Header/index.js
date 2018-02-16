import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import logoImg from 'assets/logo.svg';

class Header extends Component {

    render() {
        const logoLink = <Link to='/'><img src={logoImg} alt='logo' className='logo' /></Link>;
        const navMenu = <nav>
            {this.props.items.map((item, index) =>
                <NavLink to={item.link} key={index} activeClassName="active">{item.label}</NavLink>
            )}
        </nav>;

        return (
            <header className='header'>
                <AppBar iconElementLeft={logoLink} iconElementRight={navMenu}/>
            </header>

        );
    }
}

export default Header;