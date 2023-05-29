import React from "react";
import Button from "../Button";

const FlightListHeader = () => {



    return (
        <div className={'flight-list-header'}>
            <div className="flight-list-header__text">Sıralama Kriteri</div>
            <Button className='flight-list-header__btn'>Ekonomi Ücreti</Button>
            <Button className='flight-list-header__btn'>Kalkış Saati</Button>
        </div>
    )
}

export default FlightListHeader;
