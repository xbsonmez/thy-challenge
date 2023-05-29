
import React from "react";
import Header from "Components/Header";
import { Outlet } from "react-router-dom";


const AppLayout = props => {

    return (
        <>
            <Header {...props} />
            <Outlet />
        </>
    )
}

export default AppLayout;
