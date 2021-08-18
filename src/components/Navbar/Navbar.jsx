// core
import React from 'react';
// styles
import 'components/Navbar/Navbar.scss';
import search from 'assets/images/search.png';
import search2x from 'assets/images/search@2x.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand"></div>
            <div className="navbar__right">
                <ul className="navbar__nav">
                    <li>explore</li>
                    <li>drops</li>
                    <li>artists</li>
                </ul>
                <span className="navbar__search">
                    <img width="20" heigth="20" src={search} srcSet={`${search2x} 2x`} alt="search icon" />
                </span>
                <span className="navbar__notice"></span>
                <span className="navbar__action"></span>
                <span className="navbar__avatar"></span>
            </div>


        </nav>
    );
};

export default Navbar;