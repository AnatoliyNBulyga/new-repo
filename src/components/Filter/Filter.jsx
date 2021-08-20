// core
import React, {memo} from 'react';
// styles
import 'components/Filter/Filter.scss';
// components
import FilterItem from "../FilterItem/FilterItem";


const Filter = (props) => {
    return (
        <ul className="filter list-inline container">
            {
                props.items && props.items.map( (item, index) =>
                    <FilterItem key={`${item}_${index}`} item={item} index={index} {...props}/>
                )
            }
        </ul>
    );
};

export default memo(Filter);