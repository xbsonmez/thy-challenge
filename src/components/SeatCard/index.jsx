import React from "react";
import Button from "../Button";

const SeatCard = props => {

    const { data, selectSeat, promosyonStatus, isEco } = props;

    return (
        <div className="seat-card-container">
            {data.map((item, index) => {
                return (
                    <div key={index} className="seat-card-container__item" >
                        <div className="seat-card-container__item__title">
                            <div className="seat-card-container__item__title__bold-text"> {item.brandCode} </div>
                            <div>
                                <div className="seat-card-container__item__title__text">
                                    {item.price.currency}
                                </div>
                                <div className="seat-card-container__item__title__bold-text">
                                    {(promosyonStatus && item.brandCode === 'ecoFly') ? (item.price.amount / 2) : item.price.amount}
                                </div>
                            </div>
                        </div>
                        <div>
                            {item.rights.map((r, key) => {
                                return <div key={key} className="seat-card-container__item__content"> {r} </div>;
                            })}
                        </div>
                        <div className="seat-card-container__item__bottom">
                            <Button
                                disabled={(promosyonStatus && item.brandCode !== 'ecoFly') || (promosyonStatus && !isEco)}
                                className={(promosyonStatus && item.brandCode !== 'ecoFly' || (promosyonStatus && !isEco)) ? "seat-card-container__item__bottom__disabled-btn" : "seat-card-container__item__bottom__btn"}
                                onClick={() => selectSeat(item.status, item.price.amount)}

                            >
                                Uçuşu Seç
                            </Button></div>
                    </div>
                )
            })}

        </div >
    )
}

export default SeatCard;
