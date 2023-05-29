import React from "react";
import Button from "../Button";

const SeatCard = props => {

    const { data, selectSeat } = props;
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
                                    {item.price.amount}
                                </div>
                            </div>
                        </div>
                        <div>
                            {item.rights.map((r, key) => {
                                return <div key={key} className="seat-card-container__item__content"> {r} </div>;
                            })}
                        </div>
                        <div className="seat-card-container__item__bottom">
                            <Button disabled={item.status !== 'AVAILABLE'} className="seat-card-container__item__bottom__btn" onClick={() => selectSeat(item)}>
                                Uçuşu Seç
                            </Button></div>
                    </div>
                )
            })}

        </div>
    )
}

export default SeatCard;
