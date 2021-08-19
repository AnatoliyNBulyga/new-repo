// core
import React from 'react';

// styles
import 'components/Filter/Filter.scss';


const Filter = () => {
    return (
        <ul className="filter list-inline">
            <li className="filter__item"><a href="javascript:void(0);" title="Tab" className="filter__link base-link current">Created</a></li>
            <li className="filter__item"><a href="javascript:void(0);" title="Tab" className="filter__link base-link">Collected</a></li>
            <li className="filter__item"><a href="javascript:void(0);" title="Tab" className="filter__link base-link">Favorites</a></li>
        </ul>
    );
};

export default Filter;