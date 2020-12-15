import React, { Component } from 'react';
import InfoItemElement from './infoItemEelement';
import { Col, Hidden } from 'react-grid-system';
import { WrapperIcons } from './style';

import doneIcon from '../../static/images/sonica/common/done_ico.svg';
import scratchIcon from '../../static/images/sonica/common/build_from_scratch_ico.svg';
import machinePoint from '../../static/images/sonica/common/machine_point.svg';
import Slider from 'react-slick';

export default class WorkTogetherIcons extends Component {
    render() {
        const { goToSlide } = this.props;

        return (
            <WrapperIcons>
                <div className="workTogether_item" onClick={() => goToSlide(1)}>
                    <img src={doneIcon} className="workTogether_img" alt="" />
                </div>
                <div className="workTogether_item" onClick={() => goToSlide(2)}>
                    <img
                        src={scratchIcon}
                        className="workTogether_img"
                        alt=""
                    />
                </div>
                <div className="workTogether_item" onClick={() => goToSlide(3)}>
                    <img
                        src={machinePoint}
                        className="workTogether_img"
                        alt=""
                    />
                </div>
                <Hidden xs sm md lg>
                    <InfoItemElement />
                </Hidden>
            </WrapperIcons>
        );
    }
}
