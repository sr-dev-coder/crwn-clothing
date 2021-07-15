import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import './header.component.styles.scss';

import { auth } from './../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/">
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="">Contact</Link>
            {
                currentUser ? 
                (<div className='option' onClick={()=> auth.signOut()}>Sign Out</div>)
                :
               ( <Link className='option' to="/sign">Sign in</Link>)
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);