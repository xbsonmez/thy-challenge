import React, {
    useState,
    createContext,
    useContext,
    useMemo,
    useCallback
} from 'react';

import flightsData from "Constants/flights.json";


const FlightContext = createContext();
const FlightConsumer = FlightContext.Consumer;

export function useFlightContext() {
    const context = useContext(FlightContext);

    if (!context) {
        throw new Error('FlightContext must be used within a FlightProvider');
    }

    return context;
}

export function FlightProvider({ children }) {
    const [flight, setFlights] = useState(flightsData);

    const [originAirport, setOriginAirports] = useState([]);

    const [destinationAirpors, setDestionationAirports] = useState([]);

    const setCities = useCallback(() => {
        let flightOriginCity = [];
        let flightDestinationCity = [];
        flightsData.flights.forEach(item => {

            const origin = {
                key: item.originAirport.city.code,
                value: item.originAirport.city.name
            }
            const destination = {
                key: item.destinationAirport.city.code,
                value: item.destinationAirport.city.name
            }
            if (flightOriginCity.some(item => item.key === origin.key) === false) {
                flightOriginCity.push(origin);
            }

            if (flightDestinationCity.some(item => item.key === destination.key) === false) {
                flightDestinationCity.push(destination);
            }
        });
        setOriginAirports(flightOriginCity);
        setDestionationAirports(flightDestinationCity);
    }, [flightsData.flights]);


    const value = useMemo(
        () => ({
            flight,
            destinationAirpors,
            originAirport,
            setCities
        }),
        [flight, destinationAirpors, originAirport, setCities]
    );

    return <FlightContext.Provider value={value}>{children}</FlightContext.Provider>;
}


export default { FlightProvider, FlightConsumer, FlightContext, useFlightContext };
