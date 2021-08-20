// core
import React, {useCallback, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// redux
import {dataActions} from "./store/actions/dataActions";
import {filterActions} from "./store/actions/filterActions";
// data
import {cards, sortTypes} from "data/db.json";
// styles
import './App.scss';
// components
import Navbar from './components/Navbar/Navbar';
import Splash from "./components/Splash/Splash";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";


const App = () => {

    const dispatch = useDispatch();
    const {type} = useSelector( state => state.filter);

    useEffect(() => {
        dispatch(dataActions.setDataAction(cards));
    }, [dispatch]);

    useEffect(() => {

        if (!type) {
            // if type === 0 set all items
            dispatch(dataActions.showLoader())
            return dispatch(dataActions.setDataAction(cards));
        }
        // if type > 0 set filtered items
        dispatch(dataActions.showLoader())
        const filteredCards = cards.filter( card => card.type === type)
        dispatch(dataActions.setDataAction(filteredCards));

    }, [dispatch, type])


    const onSelectTab = useCallback(index => {
        dispatch(filterActions.setType(index));
    }, [dispatch]);

  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <main>
                  <Splash />
                  <Filter
                      activeTab={type}
                      items={sortTypes}
                      onSelectTabHandler={onSelectTab}
                  />
                  <Cards />
              </main>
          </div>
      </BrowserRouter>
  );
}

export default App;
