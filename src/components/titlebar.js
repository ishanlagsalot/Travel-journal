import React from "react";
import globe from '../globe.png';


export default function fun(){
    return(
        <div className="nav">
            <div className="nav-items">
                <img src={globe} className="nav-globe"n alt="globe-icon"/>
                <h2 className="nav-text">My Travel Journal</h2>
            </div>            
        </div>
    )
}