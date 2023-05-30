import React, { useState } from "react";
import { useFlightContext } from 'Context/FlightContext';
import FlightTime from "Components/FlightTime";
import './flight-list.scss';
import { useLocation } from "react-router-dom";
import { Switch } from 'antd';

const FlightList = () => {

    const location = useLocation();

    const { origin, destination, passenger } = location.state;
    const { flight } = useFlightContext();


    const [promosyonStatus, setPromosyonStatus] = useState(false);

    const onChange = () => {
        setPromosyonStatus(!promosyonStatus);
    };

    return (
        <div className="flight-list">
            <div className="flight-list__container">
                <div className="flight-list__head">
                    <div className="flight-list__title">Uçuş</div>
                    <div className="flight-list__info"><p> {origin} - {destination} , {passenger} Yolcu </p> </div>
                    <div className="flight-list__switch"> <span>Promosyon Kodu </span> <Switch onChange={onChange} checked={promosyonStatus} />  </div>
                    {promosyonStatus && <div className="flight-list__promosyon-active">
                        <div>Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle indirim alabilirsiniz!</div>
                        <div>Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır. </div>
                    </div>
                    }
                </div>

                <FlightTime flights={flight?.flights} passenger={passenger} promosyonStatus={promosyonStatus} />
            </div>
        </div>
    )
}

export default FlightList;
