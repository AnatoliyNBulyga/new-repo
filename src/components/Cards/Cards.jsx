// core
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
// styles
import 'components/Cards/Cards.scss';
// components
import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";


const Cards = () => {
    const {cards, isLoading} = useSelector( state => state.data);
    return isLoading
    ? <Preloader />
    :  cards && cards.length
        ? (
            <ul className="cards container">
                {
                    cards.map(card =>
                        <CardItem key={card.id} {...card}/>
                    )
                }
            </ul>
        )
        :   <h2 className="no_items">No cards</h2>
};

export default memo(Cards);