import React, { useState } from "react";
import { useFlightContext } from 'Context/FlightContext';
import FlightTime from "Components/FlightTime";
import './flight-list.scss';
import { useLocation } from "react-router-dom";
import { Switch } from 'antd';

const FlightList = () => {

    const location = useLocation();

    const { flight } = useFlightContext();

    const [promosyonStatus, setPromosyonStatus] = useState(false);

    const onChange = () => {
        setPromosyonStatus(!promosyonStatus);
    };

    return (
        <div className="flight-list">
            <div>
                <div className="flight-list__title">Uçuş</div>
                <div className="flight-list__info"><p> {location.state.origin} - {location.state.destination} , {location.state.passenger} Yolcu </p> </div>
                <div className="flight-list__switch"> <span>Promosyon Kodu </span> <Switch onChange={onChange} checked={promosyonStatus} />  </div>

                <FlightTime flights={flight?.flights} />
            </div>
        </div>
    )
}

export default FlightList;
