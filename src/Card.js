import React from "react";
import data from "./data";

export default function Card(props){
    let card
    if (props.id !== data.length) {
        card = "card1"
    } else {
        card = "card2"
    }

    return(
        <div className={card}>
            <img className="card-image" src={props.imageUrl} alt=""/>
            <div className="card-text">
                <div className="location">
                <p className="country"><img src="../images/location-logo.png" alt=""/> {props.location}</p>
                <a className="google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <span className="date">{props.startDate} - {props.endDate}</span>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}