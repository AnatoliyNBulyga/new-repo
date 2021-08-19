// core
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
// styles
import 'components/Cards/Cards.scss';
// components
import CardItem from "../CardItem/CardItem";

const Cards = () => {
    const {cards} = useSelector(state => state.data.cards);

    return cards && cards.length
    ? (
        <ul className="cards">
            {
                cards.map(card =>
                    <CardItem key={card.id} {...card}/>
                )
            }
        </ul>
    )
    :   <h2 className="no_items">No cards</h2>
};

export default Cards;