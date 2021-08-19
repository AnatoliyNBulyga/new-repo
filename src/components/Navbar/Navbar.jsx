// core
import React from 'react';
import {NavLink} from 'react-router-dom';
// styles
import 'components/Navbar/Navbar.scss';
// images
import search from 'assets/images/icons/search.png';
import search2x from 'assets/images/icons/search@2x.png';
import notice from 'assets/images/icons/notice.png';
import notice2x from 'assets/images/icons/notice@2x.png';
import avatar_small from 'assets/images/icons/avatar.png';
import avatar_small2x from 'assets/images/icons/avatar@2x.png';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__brand">
                jumy
            </div>
            <nav className="navbar__right">
                <ul className="navbar__nav list-inline">
                    <li><NavLink className="navbar__nav-link" to="/explore">explore</NavLink></li>
                    <li><NavLink className="navbar__nav-link" to="/drops">drops</NavLink></li>
                    <li><NavLink className="navbar__nav-link" to="/artists">artists</NavLink></li>
                </ul>
                <button className="navbar__search button-default">
                    <img width="20" heigth="20" src={search} srcSet={`${search2x} 2x`} alt="Search icon" />
                </button>
                <span className="navbar__notice">
                    <img width="14" heigth="18" src={notice} srcSet={`${notice2x} 2x`} alt="Notice icon" />
                </span>
                <span className="navbar__action"><NavLink className="navbar__nav-link" to="/create">create</NavLink></span>
                <span className="navbar__avatar">
                    <img width="38" heigth="38" src={avatar_small} srcSet={`${avatar_small2x} 2x`} alt="User avatar" />
                    <span className="navbar__avatar-active"></span>
                </span>
            </nav>


        </header>
    );
};

export default Navbar;