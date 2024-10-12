import React, {useEffect, useState} from 'react';
import './filter.css';
import Button from '../Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import { getFilterKlassen, setFilterKlassen } from '../../features/slices/filterKlassenSlice';
import { getFilterImmu, setFilterImmu } from '../../features/slices/filterImmuSlice';
import { getStates, setShowAll } from '../../features/slices/statesSlice';
import { getFilterBleed } from '../../features/slices/filterBleedSlice';
import { getFilterPoison } from '../../features/slices/filterPoisonSlice';

export default function Filter(props){

    
    const dispatch = useDispatch();
   
    const filterBleed = useSelector(getFilterBleed);
    const filterPoison = useSelector(getFilterPoison);


    const filterKlassen = useSelector(getFilterKlassen);
    const [Klassen] = useState(["Mutant","Talent","Forschung","Mystisch","Kosmos","Technologie"]);

    const filterImmu = useSelector(getFilterImmu);
    const [Immus] = useState(["Bleed","Poison","Incinerate","Shock"]);
    
    useEffect(()=>{
        checkNoSelect()     
    },[filterKlassen.Mutant.Checked,
        filterKlassen.Talent.Checked,
        filterKlassen.Forschung.Checked,
        filterKlassen.Mystisch.Checked,
        filterKlassen.Kosmos.Checked,
        filterKlassen.Technologie.Checked]);



    function clickAction(e){
        let id = e.target.id;
            if( Klassen.indexOf(id) > -1){
                dispatch(setFilterKlassen(e.target.id+'|'+filterKlassen[e.target.id].Checked));
                dispatch(setShowAll(0));
            }
            if( Immus.indexOf(id) > -1){
                dispatch(setFilterImmu(e.target.id+'|'+filterImmu[e.target.id].Checked));
                dispatch(setShowAll(0));
            }

    
    }

    function checkNoSelect(){
        if(filterKlassen.Mutant.Checked == false
            && filterKlassen.Talent.Checked == false
            && filterKlassen.Forschung.Checked == false
            && filterKlassen.Mystisch.Checked == false
            && filterKlassen.Kosmos.Checked == false
            && filterKlassen.Technologie.Checked == false
        ){
            dispatch(setShowAll(1));
        }
    }
    
    return(
        <div className="filter">
            <div className="filterrow">
            {
                    Klassen.map((klasse,index)=>{
                        return(
                        <Button key={"klassenFilter1_"+filterKlassen[klasse].id} title={filterKlassen[klasse].Name} id={filterKlassen[klasse].id} click={clickAction} img={filterKlassen[klasse].Img} width="40px"/>
                        )
                    })
                    
            }    
            </div>
            <div className="filterrow">
                {
                    Immus.map((immu,index)=>{
                        return(
                            <Button key={"immusFilter_"+filterImmu[immu].id} title={filterImmu[immu].Name} id={filterImmu[immu].id} click={clickAction} img={filterImmu[immu].Img} width="40px"/>
                        )
                    })
                }
            </div>
            
            <div>
               
            </div>
        </div>
    )
}