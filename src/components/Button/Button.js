import React from "react";
import './Button.css';


export default function Button(props){

    

    return(
        <div className="Button" onClick={props.click} style={{width:props.width}}><img title={props.title} id={props.id} width={props.width} src={"./images/buttons/"+props.img+".png"}/></div>
    )
}