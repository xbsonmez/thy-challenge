import React from "react";
import Button from "../Button";

const FlightListHeader = props => {

    const { setFlightAccordingToTime, setFlightAccordingToPrice } = props;

    return (
        <div className={'flight-list-header'}>
            <div className="flight-list-header__text">Sıralama Kriteri</div>
            <Button className='flight-list-header__btn' onClick={() => setFlightAccordingToPrice()}>Ekonomi Ücreti</Button>
            <Button className='flight-list-header__btn' onClick={() => setFlightAccordingToTime()}>Kalkış Saati</Button>
        </div>
    )
}

export default React.memo(FlightListHeader); 
