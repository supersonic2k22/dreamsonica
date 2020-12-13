import React from "react";
import logo from '../../static/images/logo2x.png'
import {
    WrapperLogoHeader
} from './style';

const HeaderLogo = () => {

    return (
        <WrapperLogoHeader>
            <img src={logo} alt="Logo Dream Sonica"/>
        </WrapperLogoHeader>
    )
}

export default HeaderLogo;