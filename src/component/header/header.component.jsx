import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import './header.component.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to="/">
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="">Contact</Link>
        </div>
    </div>
)

export default Header;