// core
import React from 'react';

// styles
import 'components/Splash/Splash.scss';

//images
const bkg = './images/backgrounds/bkg-main.jpg';
const authorAvatar = './images/icons/avatar-big.png';
const authorAvatar2x = './images/icons/avatar-big@2x.png';
const etherium = './images/icons/etherium_icon.png';
const etherium2x = './images/icons/etherium_icon@2x.png';
const copy = './images/icons/copy.png';
const copy2x = './images/icons/copy@2x.png';
const insta = './images/icons/insta.png';
const insta2x = './images/icons/insta@2x.png';
const twitter = './images/icons/twitter.png';
const twitter2x = './images/icons/twitter@2x.png';
const check = './images/icons/check.png';
const check2x = './images/icons/check@2x.png';
const window = './images/icons/window.png';
const window2x = './images/icons/window@2x.png';


const Splash = () => {
    return (
        <section className="splash">
            <div className="splash__background" style={{backgroundImage: `url(${bkg})`}}></div>
            <div className="splash__content container">
                <div className="splash__content-avatar">
                    <img src={authorAvatar} srcSet={`${authorAvatar2x} 2x`} width="137" height="137" alt="Avatar author"/>
                </div>
                <div className="splash__content-body">
                    <div className="splash__content-top top-line">

                        <div className="top-line__body">
                            <h1 className="visually-hidden">Jumy</h1>
                            <h2 className="top-line__author">Jumaker</h2>
                            <span className="top-line__active"><img src={check} srcSet={`${check2x} 2x`} width="24" height="24" alt="Check icon"/></span>
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
                            <img src={etherium} srcSet={`${etherium2x} 2x`} width="16" height="27" alt="ETH icon"/>
                        </div>
                        <div className="social-item__link"><a href="javascript:void(0);" className="base-link" title="ETH token" target="_blank" rel="nofollow">j0x1b777ac...aca6</a></div>
                        <button className="social-item__active button-default">
                            <img src={copy} srcSet={`${copy2x} 2x`} width="15" height="14" alt="Copy link icon"/>
                        </button>
                    </li>
                    <li className="splash__content-social social-item">
                        <div className="social-item__logo">
                            <img src={insta} srcSet={`${insta2x} 2x`} width="20" height="20" alt="Instagram logo"/>
                        </div>
                        <div className="social-item__link"><a href="javascript:void(0);" className="base-link" title="Istagram" target="_blank" rel="nofollow">@anthonyM</a></div>
                        <button className="social-item__active button-default">
                            <img src={check} srcSet={`${check2x} 2x`} width="24" height="24" alt="Check icon"/>
                        </button>
                    </li>
                    <li className="splash__content-social social-item">
                        <div className="social-item__logo">
                            <img src={twitter} srcSet={`${twitter2x} 2x`} width="20" height="20" alt="Twitter logo"/>
                        </div>
                        <div className="social-item__link"><a href="javascript:void(0);" className="base-link" title="Twitter" target="_blank" rel="nofollow">@jumaker</a></div>
                    </li>
                    <li className="splash__content-social social-item">
                        <div className="social-item__logo">
                            <img src={window} srcSet={`${window2x} 2x`} width="23" height="23" alt="Window logo"/>
                        </div>
                        <div className="social-item__link"><a href="javascript:void(0);" className="base-link" title="monteard.com" target="_blank" rel="nofollow">wwww.monteard.com</a></div>
                    </li>
                </ul>


            </div>


        </section>
    );
};

export default Splash;