import React, {Component} from "react";
import InfoItemElement from "./infoItemEelement";
import {
    Hidden
} from "react-grid-system";

import {
    WrapperIcons,
} from './style'

export default class WorkTogetherIcons extends Component {


    render() {

        const {indexCarouselCard} = this.props

        return (
            <WrapperIcons >
                <div className="workTogether_item"
                      onClick={() => indexCarouselCard()}>
                    <img  src={require('../../static/images/done_ico.svg')} className="workTogether_img" alt=""/>
                </div>
                <div className="workTogether_item"
                      onClick={() => indexCarouselCard()}>
                    <img src={require('../../static/images/build_from_scratch_ico.svg')} className="workTogether_img" alt=""/>
                </div>
                <div className="workTogether_item"
                      onClick={() => indexCarouselCard()}>
                    <img src={require('../../static/images/machine_point.svg')} className="workTogether_img" alt=""/>
                </div>
                <Hidden xs sm md lg>
                    <InfoItemElement/>
                </Hidden>
            </WrapperIcons>
        );
    }
}