// core
import React, {memo} from 'react';
import {NavLink} from 'react-router-dom';
// styles
import 'components/Navbar/Navbar.scss';
// data
import {icons} from 'data/db.json';

const Navbar = () => {
    return (
        <header className="navbar container">
            <div className="navbar__brand">jumy</div>
            <nav className="navbar__right">
                <ul className="navbar__nav list-inline">
                    <li><NavLink className="navbar__nav-link" to="/explore">explore</NavLink></li>
                    <li><NavLink className="navbar__nav-link" to="/drops">drops</NavLink></li>
                    <li><NavLink className="navbar__nav-link" to="/artists">artists</NavLink></li>
                </ul>
                <button className="navbar__search button-default">
                    <img width="20" heigth="20" src={icons.search} srcSet={`${icons.search2x} 2x`} alt="Search icon" />
                </button>
                <span className="navbar__notice">
                    <img width="14" heigth="18" src={icons.notice} srcSet={`${icons.notice2x} 2x`} alt="Notice icon" />
                </span>
                <span className="navbar__action"><NavLink className="navbar__nav-link" to="/create">create</NavLink></span>
                <span className="navbar__avatar">
                    <img width="38" heigth="38" src={icons.avatar_small} srcSet={`${icons.avatar_small2x} 2x`} alt="User avatar" />
                    <span className="navbar__avatar-active"></span>
                </span>
            </nav>
            <div className="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default memo(Navbar);