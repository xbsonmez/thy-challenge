import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

    const { pathname } = useLocation();


    return (
        <div className={pathname === '/' ? 'header' : 'first__header'}>
            <div className="header__content">
                <div><b>turkishairlines.com</b></div>
                <div>search<b>Flight Challenge</b></div>
            </div>
        </div>
    )
}

export default React.memo(Header); 
