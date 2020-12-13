import React from "react";
import {
    scroller
} from 'react-scroll'
import {
 WorkTogetherIconBtn
} from './style'

const scrollTo = (id) => {
    scroller.scrollTo(id, {
        duration: 1800,
        delay: 300,
        smooth: 'easeInCirc'
    })
}

const InfoItemElement = () => {

    return (
        <div className="workTogether_item">
            <WorkTogetherIconBtn onClick={() => scrollTo('same')}>
                Let's Talk
            </WorkTogetherIconBtn>
        </div>
    )
}


export default InfoItemElement