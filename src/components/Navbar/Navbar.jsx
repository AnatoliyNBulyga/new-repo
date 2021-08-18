// core
import React from 'react';
import {NavLink} from 'react-router-dom';
// styles
import 'components/Navbar/Navbar.scss';
import search from 'assets/images/search.png';
import search2x from 'assets/images/search@2x.png';
import notice from 'assets/images/notice.png';
import notice2x from 'assets/images/notice@2x.png';
import avatar_small from 'assets/images/avatar.png';
import avatar_small2x from 'assets/images/avatar@2x.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand"></div>
            <div className="navbar__right">
                <ul className="navbar__nav">
                    <li><NavLink to="/explore">explore</NavLink></li>
                    <li><NavLink to="/drops">drops</NavLink></li>
                    <li><NavLink to="/artists">artists</NavLink></li>
                </ul>
                <span className="navbar__search">
                    <img width="20" heigth="20" src={search} srcSet={`${search2x} 2x`} alt="Search icon" />
                </span>
                <span className="navbar__notice">
                    <img width="20" heigth="20" src={notice} srcSet={`${notice2x} 2x`} alt="Notice icon" />
                </span>
                <span className="navbar__action"><NavLink to="/create">create</NavLink></span>
                <span className="navbar__avatar">
                    <img width="38" heigth="38" src={avatar_small} srcSet={`${avatar_small2x} 2x`} alt="User avatar" />
                </span>
            </div>


        </nav>
    );
};

export default Navbar;