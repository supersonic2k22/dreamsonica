import React from "react";

import {
   WrapperServiceContent
} from './style';

const ServiceContent = () => {
    return (
        <WrapperServiceContent>
            <h2 className="service_content_title">HOW DO WE WORK</h2>
            <p className="service_content_text">
                We connect your game all multiple channels, thus maximizing opportunities to interact with better players.
            </p>
            <p className="service_content_text" style={{fontWeight: 'bold'}}>
                Reach top media sources
            </p>
        </WrapperServiceContent>
    )
}

export default ServiceContent;