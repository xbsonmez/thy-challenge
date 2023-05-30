import Button from "@/components/Button";
import React from "react";
import { useLocation } from "react-router-dom";
import './cabin-selection.scss';
import {
    faCircleCheck,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const CabinSelection = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { status, price } = location.state;


    const returnHome = () => {
        navigate('/', { replace: false });
    }
    return (
        <div className="cabin-selection">
            {status === 'AVAILABLE'
                ? (<div className="cabin-selection__successful">

                    <div className="cabin-selection__successful__text">
                        <span><FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> </span> Kabin Seçimini Tamamladınız.
                    </div>

                    <div className="cabin-selection__successful__price">
                        <div>Toplam Tutar </div>
                        <div className="cabin-selection__successful__price__text">TRY {price} </div>
                    </div>

                </div>)
                : (<div className="cabin-selection__error">
                    <div className="cabin-selection__error__text">
                        <span><FontAwesomeIcon icon={faCircleExclamation} style={{ color: 'red' }} /> </span> Kabin Seçiminiz tamamlanamadı.</div>

                    <div className="cabin-selection__error__bottom">
                        <Button className="cabin-selection__error__bottom__btn" onClick={returnHome}> Başa Dön</Button>
                    </div>
                </div>)

            }

        </div >
    )
}

export default CabinSelection;
