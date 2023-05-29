import React, { useEffect } from 'react';
import { useFlightContext } from 'Context/FlightContext';
import FlightPlanner from "Components/FlightPlanner";
import "./flightInquiry.scss";


const FlightInquiryPage = () => {

    const { originAirport, destinationAirpors, setCities } = useFlightContext();

    useEffect(() => {
        setCities();
    }, []);

    return (
        <div className="inguiry">
            <div className="inguiry__title"><p>Merhaba</p> </div>
            <div className="inguiry__sub-title">Nereyi Keşfetmek istersiniz?</div>
            <div>
                <FlightPlanner originAirports={originAirport} destinationAirports={destinationAirpors} />
            </div>
        </div>
    )
}

export default FlightInquiryPage;
