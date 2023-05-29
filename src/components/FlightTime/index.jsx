import React from "react";
import { useState } from "react";
import FlightListHeader from "../FlightListHeader";
import SeatCard from "../SeatCard";
import FlightCard from "./FlightCard";
import FlightSeatCard from "./FlightSeatCard";

const FlightTime = props => {

    const { flights } = props;

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

    const selectSeat = val => {
        console.log('VALLL ', val);
    }

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
                <div><SeatCard data={data} selectSeat={selectSeat} /></div>
            </div>
        );
    };

    return (
        <div className={'flight-time'}>
            <FlightListHeader />

            {flights?.map((item, index) => {
                return (
                    <div style={{ display: 'block' }} key={index}>
                        <div key={index} className={'flight-time__content'} >
                            <FlightCard
                                arrivalDateTimeDisplay={item.arrivalDateTimeDisplay}
                                code={item.originAirport.city.code}
                                name={item.originAirport.city.name}
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
