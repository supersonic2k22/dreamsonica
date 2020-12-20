import React from "react";
import {pages} from '../../configs/app.config'

import {
 WorkTogetherIconBtn
} from './style'



const InfoItemElement = ({toScroll}) => {

    return (
        <div className="workTogether_item">
            <WorkTogetherIconBtn onClick={() => toScroll('same')}>
                Let's Talk
            </WorkTogetherIconBtn>
        </div>
    )
}


export default InfoItemElement