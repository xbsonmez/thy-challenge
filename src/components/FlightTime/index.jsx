import React, { useState } from "react";
import FlightListHeader from "../FlightListHeader";
import SeatCard from "../SeatCard";
import FlightCard from "./FlightCard";
import FlightSeatCard from "./FlightSeatCard";
import { useNavigate } from "react-router-dom";

const FlightTime = props => {

    const navigate = useNavigate();

    const { flights, passenger, promosyonStatus } = props;

    const [flightsOrdered, setFlighthOrdered] = useState(flights);

    const [selectType, setSelectType] = useState('');


    const selectSeatType = e => {
        e.stopPropagation();
        e.preventDefault();

        if (selectType !== e.currentTarget.id) {
            setSelectType(e.currentTarget.id);
        } else {
            setSelectType('');
        }
    };

    const selectSeat = (val, price) => {

        navigate('/result', {
            replace: false, state: {
                status: val, price: Math.round(price * passenger * 100) / 100
            }
        });

    }

    const setFlightAccordingToTime = () => {
        const temp = flights.sort((a, b) => {
            return (a.arrivalDateTimeDisplay.split(':').join('') + 1) - (b.arrivalDateTimeDisplay.split(':').join('') + 1);
        });
        setFlighthOrdered([...temp]);
    };

    const setFlightAccordingToPrice = () => {

        const temp = flights.sort((a, b) => { return a.fareCategories.ECONOMY.subcategories[0].price.amount - b.fareCategories.ECONOMY.subcategories[0].price.amount });
        setFlighthOrdered([...temp]);
    };

    const renderSeatDetail = val => {
        const isEco = selectType.includes('a');
        let data;
        if (isEco) {
            data = val.fareCategories.ECONOMY.subcategories;
        } else {
            data = val.fareCategories.BUSINESS.subcategories;
        }

        return (
            <div className="seat-detail">
                <div><SeatCard data={data} promosyonStatus={promosyonStatus} selectSeat={selectSeat} isEco={isEco} /></div>
            </div>
        );
    };


    return (
        <div className={'flight-time'}>
            <FlightListHeader setFlightAccordingToTime={setFlightAccordingToTime} setFlightAccordingToPrice={setFlightAccordingToPrice} />

            {flightsOrdered.length > 0 && flightsOrdered?.map((item, index) => {
                return (
                    <div style={{ display: 'block' }} key={index}>
                        <div key={index} className={'flight-time__content'} >
                            <FlightCard
                                flightDuration={item.flightDuration}
                                originAirport={item.originAirport}
                                destinationAirport={item.destinationAirport}
                                arrivalDateTimeDisplay={item.arrivalDateTimeDisplay}
                                departureDateTimeDisplay={item.departureDateTimeDisplay}

                            />
                            <div id={index + 'a'} onClick={(e) => selectSeatType(e)}>
                                <FlightSeatCard
                                    data={item}
                                    isEconomy={true}
                                    selectType={selectType}
                                    type={index + 'a'}
                                />
                            </div>

                            <div id={index + 'b'} onClick={(e) => selectSeatType(e)}>
                                <FlightSeatCard
                                    data={item}
                                    isEconomy={false}
                                    selectType={selectType}
                                    type={index + 'b'}
                                />
                            </div>
                        </div>

                        {(index + 'a' === selectType || index + 'b' === selectType) && renderSeatDetail(item)
                        }
                    </div>)

            })}
        </div >
    )
}

export default FlightTime;
