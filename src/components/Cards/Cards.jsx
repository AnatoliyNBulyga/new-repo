// core
import React, {memo, useMemo} from 'react';
import {useSelector} from 'react-redux';
// styles
import 'components/Cards/Cards.scss';
// components
import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";


const Cards = () => {
    const {cards, isLoading} = useSelector( state => state.data);
    const {type} = useSelector( state => state.filter);

    const filteredCards = useMemo(() => {

        return type
        // if type > 0 set filtered items
        ? cards.filter( card => card.type === type)
        // if type === 0 set all items
        : cards

    }, [cards, type])

    return isLoading
    ? <Preloader />
    :  filteredCards && filteredCards.length
        ? (
            <ul className="cards container">
                {
                    filteredCards.map(card =>
                        <CardItem key={card.id} {...card}/>
                    )
                }
            </ul>
        )
        :   <h2 className="no_items">No cards</h2>
};

export default memo(Cards);