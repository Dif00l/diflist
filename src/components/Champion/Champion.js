import React from "react";


export default function Champion(props){

    const champ = props.champ;
    
    return(
        <tr key={"champ_"+props.index}>
        <td><img className="imgChamp" src={"./images/champions/"+champ.Image+".png"}/></td>
        <td>{champ.Name}</td>
        <td>{champ.Klasse}</td>
        <td>{
        champ.Tags.map((Tag,index)=>{
            return(
                <div key={"tag_"+index}>{Tag}</div>
            )
        })
        }</td>
        <td>{
        champ.Skills.map((Skill,index)=>{
            return(
                <div key={"skill_"+index}>{Skill}</div>
            )
        })}</td>
        <td>{
        champ.Immunities.map((Immunity,index)=>{
            return(
                <div key={"immunity_"+index}>{Immunity}</div>
            )
        })}</td>
    </tr>
    )
}



