// core
import React from 'react';

const FilterItem = ({
    index,
    activeTab,
    onSelectTabHandler,
    item
}) => {

    return (
        <li
            key={`${item}_${index}`}
            className={`filter__item filter__link${activeTab === index ? ' current' : ''}`}
            onClick={() => onSelectTabHandler(index)}
        >{item}</li>
    );
};

export default FilterItem;