import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Filter  from '../components/filter/filter';
import List from '../components/list/list';

import { setChampions } from '../features/slices/championsSlice';

const App=()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Dif00l/mcoc-data/refs/heads/main/champions.json")
        .then(res=>res.json())
        .then(function(data){
            dispatch(setChampions(data))
        })
    },[]);

    return(
        <div>
            <Filter/>
            <List/>
        </div>
    )
};

export default App;