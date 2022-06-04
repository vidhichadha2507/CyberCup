import React from 'react';

import Button from "react-bootstrap/Button";

import "./EventCard.css";

const EventCard = (props) => {
    return( 
        <div className="event-card">
            <h2>{props.eventName}</h2>
            <p>{props.eventDesc}</p>
            <Button>Register</Button>
        </div>
    )
}
export default EventCard;