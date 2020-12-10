import React from "react";
import logo from '../../static/video/ezgif.com-gif-maker.gif'
import {
    WrapperLogoHeader
} from './style';

const FooterLogo = () => {

    return (
        <WrapperLogoHeader>
            <img src={logo} className="footer_logo" alt="Logo Dream Sonica"/>
        </WrapperLogoHeader>
    )
}

export default FooterLogo;