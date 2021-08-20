// core
import React, {memo} from 'react';
// utils
import {getPriceDevider} from 'utils/functions';
// styles
import './CardItem.scss';

const CardItem = ({
        imgSrc,
        imgWidth,
        imgHeight,
        cardTitle,
        priceCrypto,
        priceCryptoCurrancy,
        previewSrc,
        category,
        price,
        priceCurrancy
    }) => {

    const icons = {
        checkSmall: './images/cards_previews/check_small.png',
        checkSmall2x: './images/cards_previews/check_small@2x.png'
    }

    return (
        <li className="cards_item overflow-hidden">
            <div className="cards_item__image">
                <img src={`./images/cards/${imgSrc}`} className="img-responsive" width={imgWidth} height={imgHeight} alt="Card"/>
            </div>
            <div className="cards_item__content card-body">
                <div className="card-body__line">
                    <div className="card-body__line-title">{cardTitle}<span className="card-body__line-count">1/1</span></div>
                    <div className="card-body__price crypto"><span className="price-value">{priceCrypto}</span>{priceCryptoCurrancy}</div>
                </div>
                <div className="card-body__line">
                    <div className="card-body__preview">
                        <div className="card-body__img">
                            <img src={`./images/cards_previews/${previewSrc}`} className="img-responsive" width="24" height="25" alt="Category preview"/>
                            <img src={icons.checkSmall} srcSet={`${icons.checkSmall2x} 2x`} className="img-responsive check" width="16" height="16" alt="Check icon"/>
                        </div>
                        <div className="card-body__category">{category}</div>
                    </div>
                    <div className="card-body__price"><span className="price-value">{getPriceDevider(price)}</span>&nbsp;{priceCurrancy}</div>
                </div>
            </div>
        </li>
    );
};

export default memo(CardItem);