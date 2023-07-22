import React from "react";
import locImg from "../location.png";

export default function traveltiles(props){
    return(   
        <div>
        <div className="tiles">
            <img className="location-image" src={`${props.titleImg}`} alt="Place" />
   
            <div className="tile-info">
                <div className="row">
                    <img className="location-icon" src={locImg} alt="location-icon"  />
                    <div className="country">{props.country}</div>
                    <a href={`${props.map}`}><div className="view"><u>View on Google Maps</u></div></a>
                </div>
                
                <div className="location-name"><b>{props.name}</b></div>
                <div className="travel-date">{props.date}</div>
                <div className="location-description">{props.description}</div>         
                
            </div>   
        </div>
        <hr className="hr"></hr>
        </div>
        
    )
}