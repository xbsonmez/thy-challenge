import React from "react";
import { Radio } from 'antd';

const FlightSeatCard = props => {

    const { data, isEconomy, selectType, type } = props;

    const SeatCard = () => {
        return (
            <div className="flight-seat-card__text">
                <div>
                    Yolcu Başına
                </div>
                <div>{data.fareCategories?.ECONOMY?.subcategories?.[0].price.currency}  {data.fareCategories?.ECONOMY?.subcategories?.[0].price.amount}  </div>
            </div>
        );
    };

    return (
        <>
            <div className={'flight-seat-card'}>
                <div className="flight-seat-card__radio">
                    <Radio checked={type === selectType}> {isEconomy ? 'ECONOMY' : 'BUSINESS'}</Radio>
                </div>
                {SeatCard()}
            </div>
        </>
    )
}

export default FlightSeatCard;
