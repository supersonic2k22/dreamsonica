import React from "react";
import logo from '../../static/images/logo2x.png'
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