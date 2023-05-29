import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectBox = props => {

    const {
        icon,
        data,
        setVal,
        value,
        defaultPlaceholder } = props;

    const handleChange = e => {
        setVal(e.currentTarget.value);
    };

    return (
        <div className="custom-select-box">
            <FontAwesomeIcon icon={icon} className={'custom-select-box__icon'} />

            <select
                className="custom-select-box__select"
                onChange={handleChange}

            >
                {!value && (<option value='-1' hidden>{defaultPlaceholder ? defaultPlaceholder : 'Lütfen Seçiniz'}</option>)}
                {data?.map((e, index) => {
                    return <option key={index} value={e?.value}>{e?.value} </option>
                })}
            </select>
        </div >
    )
}

export default SelectBox;
