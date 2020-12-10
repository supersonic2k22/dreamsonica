import React from "react";
import logo from '../../static/video/ezgif.com-gif-maker.gif'
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