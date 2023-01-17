import React from "react"

export default function Card(props) {

    return (
        <div className="card--container">
            <img src={props.data.imageUrl}/>
            <div>
                <p>{props.data.location} <a href={props.data.googleMapsUrl}>View on Google Maps</a></p>
                <h2>{props.data.title}</h2>
                <p className="dates">{props.data.startDate} - {props.data.endDate}</p>
                <p className="description">{props.data.description}</p>
            </div>
        </div>
    )
}