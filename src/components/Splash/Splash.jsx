// core
import React, {memo} from 'react';
import {Link} from 'react-router-dom'
// styles
import 'components/Splash/Splash.scss';
// data
import {icons, background} from 'data/db.json';


const Splash = () => {

    return (
        <section className="splash">
            <div className="splash__background" style={{backgroundImage: `url(${background})`}}></div>
            <div className="splash__content container">
                <div className="splash__content-avatar">
                    <img src={icons.authorAvatar} srcSet={`${icons.authorAvatar2x} 2x`} width="137" height="137" alt="Avatar author"/>
                </div>
                <div className="splash__content-body">
                    <div className="splash__content-top top-line">

                        <div className="top-line__body">
                            <h1 className="visually-hidden">Jumy</h1>
                            <h2 className="top-line__author">Jumaker</h2>
                            <span className="top-line__active"><img src={icons.check} srcSet={`${icons.check2x} 2x`} width="24" height="24" alt="Check icon"/></span>
                        </div>

                        <p className="top-line__description">
                            Photographer & sundriser. Eternally chasing light and colors through photography.
                        </p>

                    </div>
                    <div className="splash__content-info follow">
                        <div className="follow__counter">
                            <div className="follow__counter-value">37</div>
                            <div className="follow__counter-title">Followers</div>
                        </div>
                        <div className="follow__counter">
                            <div className="follow__counter-value">19</div>
                            <div className="follow__counter-title">Following</div>
                        </div>
                    </div>
                </div>
                <ul className="splash__content-social">
                    <li className="splash__content-social-item social-item">
                        <div className="social-item__logo">
                            <img src={icons.etherium} srcSet={`${icons.etherium2x} 2x`} width="16" height="27" alt="ETH icon"/>
                        </div>
                        <div className="social-item__link"><Link to="/" className="base-link" title="ETH token" >0x1b777ac...aca6</Link></div>
                        <button className="social-item__active button-default">
                            <img src={icons.copy} srcSet={`${icons.copy2x} 2x`} width="15" height="14" alt="Copy link icon"/>
                        </button>
                    </li>
                    <li className="splash__content-social-item social-item">
                        <div className="social-item__logo">
                            <img src={icons.insta} srcSet={`${icons.insta2x} 2x`} width="20" height="20" alt="Instagram logo"/>
                        </div>
                        <div className="social-item__link"><Link to="/" className="base-link" title="Istagram">@anthonyM</Link></div>
                        <button className="social-item__active button-default">
                            <img src={icons.check} srcSet={`${icons.check2x} 2x`} width="24" height="24" alt="Check icon"/>
                        </button>
                    </li>
                    <li className="splash__content-social-item social-item">
                        <div className="social-item__logo">
                            <img src={icons.twitter} srcSet={`${icons.twitter2x} 2x`} width="20" height="20" alt="Twitter logo"/>
                        </div>
                        <div className="social-item__link"><Link to="/" className="base-link" title="Twitter">@jumaker</Link></div>
                    </li>
                    <li className="splash__content-social-item social-item">
                        <div className="social-item__logo">
                            <img src={icons.window} srcSet={`${icons.window2x} 2x`} width="23" height="23" alt="Window logo"/>
                        </div>
                        <div className="social-item__link"><Link to="/" className="base-link" title="monteard.com">wwww.monteard.com</Link></div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default memo(Splash);