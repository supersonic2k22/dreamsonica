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
            <p className="workTogether_item--text" style={{fontSize: '19px', textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, praesentium.
            </p>
            <WorkTogetherIconBtn onClick={() => scrollTo('same')}>
                Let's Talk
            </WorkTogetherIconBtn>
        </div>
    )
}


export default InfoItemElement