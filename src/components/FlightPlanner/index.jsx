import React, { useState } from "react";
import Button from "Components/Button";
import SelectBox from "Components/SelectBox";
import {
    faPlaneDeparture,
    faPlane,
    faCalendarDays,
    faPerson
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Radio, Modal } from 'antd';
import { useNavigate } from "react-router-dom";


const FlightPlanner = props => {

    const navigate = useNavigate();
    const { originAirports, destinationAirports } = props;

    const [counter, setCounter] = useState(1);
    const [value, setValue] = useState(1);
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const updatePassenger = val => {
        if (val !== 0 && val !== 7) {
            setCounter(val);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const searchPlane = e => {
        debugger;
        if (origin === undefined || destination === undefined || counter === 0) {
            showModal();
        } else {
            navigate('/list', { replace: false, state: { origin, destination, passenger: counter } });
        }
    }


    const contentPopover = () => {
        return (
            <div>
                <div className="popup-over-title">Kabin ve yolcu seçimi</div>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Economy Class</Radio>
                    <Radio value={2}>Business Class</Radio>
                </Radio.Group>

                <div className="bottom">
                    <div className="bottom__text">
                        YOLCU
                    </div>
                    <div className="bottom__content">
                        <Button onClick={() => updatePassenger(counter - 1)}>-</Button>
                        {counter}
                        <Button onClick={() => updatePassenger(counter + 1)}>+</Button>
                    </div>
                </div>

            </div>

        );
    };

    const renderCounter = () => {
        return (
            <>
                <div className="count-people">
                    {Array.from(Array(counter), (e, i) => {
                        if (i < 3) {
                            return <span key={i}><FontAwesomeIcon icon={faPerson} /></span>
                        }
                        if (i == 3 && counter > 2) {
                            return <span key={i}>+</span>
                        }
                    })}
                </div>
                <div className="count-number">
                    {counter}

                </div>
            </>
        );
    }

    return (
        <div className='flight-planner'>
            <div className='flight-planner__content'>
                <div>
                    <SelectBox
                        icon={faPlaneDeparture}
                        data={originAirports}
                        setVal={setOrigin}
                        defaultPlaceholder={'Nereden'}
                    />
                </div>
                <div>
                    <SelectBox
                        icon={faPlane}
                        data={destinationAirports}
                        setVal={setDestination}
                        defaultPlaceholder={'Nereye'}
                    />
                </div>
                <div className='flight-planner__content__date-picker'>
                    <div>Tarih</div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                </div>
                <Popover content={contentPopover} title="" trigger="click" placement="bottom" >
                    <div className='flight-planner__content__counter'>
                        {renderCounter()}
                    </div>
                </Popover>
                <Button color={'#ff0024'} width={'50px'} onClick={searchPlane}>
                    <div style={{ fontSize: '32px', color: 'white' }}>{'>'}</div>
                </Button>
            </div>

            <Modal title="Hata" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Lütfen Seçim Yapınız.</p>
            </Modal >

        </div>
    )
}

export default FlightPlanner;
