import React from "react";

const FlightCard = props => {

    const { arrivalDateTimeDisplay, code, name } = props;



    return (
        <div className={'flight-card'}>
            <div className="flight-card__arrival">
                <div>{arrivalDateTimeDisplay}</div>
                <div>{code}</div>
                <div>{name}</div>
            </div>
            <div className="flight-card__solid">

            </div>
            <div className="flight-card__destination">
                <div>{arrivalDateTimeDisplay}</div>
                <div>{code}</div>
                <div>{name}</div>
            </div>
            <div className="flight-card__timer">
                <div>{'Uçuş Süresi'} </div>
                <div>{'1h 30m'} </div>
            </div>
        </div>
    )
}

export default FlightCard;
