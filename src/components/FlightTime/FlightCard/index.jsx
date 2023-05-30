import React from "react";

const FlightCard = props => {

    const { originAirport, destinationAirport, flightDuration, arrivalDateTimeDisplay, departureDateTimeDisplay } = props;


    return (
        <div className={'flight-card'}>
            <div className="flight-card__arrival">
                <div>{arrivalDateTimeDisplay}</div>
                <div>{originAirport.city.code}</div>
                <div>{originAirport.city.name}</div>
            </div>
            <div className="flight-card__solid">

            </div>
            <div className="flight-card__destination">
                <div>{departureDateTimeDisplay}</div>
                <div>{destinationAirport.city.code}</div>
                <div>{destinationAirport.city.name}</div>
            </div>
            <div className="flight-card__timer">
                <div>{'Uçuş Süresi'} </div>
                <div>{flightDuration} </div>
            </div>
        </div>
    )
}

export default React.memo(FlightCard);
