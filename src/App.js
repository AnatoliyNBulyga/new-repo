// core
import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import dataBase from './data/db';
// styles
import './App.scss';
// components
import Navbar from './components/Navbar/Navbar';
import Splash from "./components/Splash/Splash";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
// data
import data from "data/db.json";
import {dataActions} from "./store/actions/dataActions";

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataActions.setDataAction(data));
    }, []);

  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Splash />
              <Filter />
              <Cards />
          </div>
      </BrowserRouter>

  );
}

export default App;
