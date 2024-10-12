import  React,{useState} from "react";
import { useSelector } from "react-redux";
import './list.css';
import { selectChampions } from "../../features/slices/championsSlice";
import Champion from "../Champion/Champion";
import { getFilterKlassen } from "../../features/slices/filterKlassenSlice";
import { getStates } from "../../features/slices/statesSlice";




export default function List(props){

    const champs = useSelector(selectChampions);
    const states = useSelector(getStates);
    const filterKlassen = useSelector(getFilterKlassen);



    return(
        <div>
            <table cellSpacing="0" cellPadding="0">
                <thead/>
                <tbody>
                    {
                        champs.map((champ,index)=>{
                           
                          if( filterKlassen[champ.Klasse].Checked == true ){
                                    return(<Champion key={index} champ={champ}/>)
                                }
                          if( states.ShowAll == 1 ){
                            return(<Champion key={index} champ={champ}/>)
                          }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

