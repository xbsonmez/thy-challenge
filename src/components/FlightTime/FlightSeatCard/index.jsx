import React from "react";
import { Radio } from 'antd';

const FlightSeatCard = props => {

    const { data, isEconomy, selectType, type, promosyonStatus } = props;

    const SeatCard = () => {
        const item = isEconomy ? (data.fareCategories?.ECONOMY?.subcategories?.[0].price.currency + ' ' + data.fareCategories?.ECONOMY?.subcategories?.[0].price.amount)
            : (data.fareCategories?.BUSINESS?.subcategories?.[0].price.currency + ' ' + data.fareCategories?.BUSINESS?.subcategories?.[0].price.amount)
        return (
            <div className="flight-seat-card__text">
                <div>
                    Yolcu Başına
                </div>
                <div> {(promosyonStatus && isEconomy) ? Math.round((data.fareCategories?.ECONOMY?.subcategories?.[0].price.amount / 2)) : item}  </div>
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
