import React from 'react';
import ClientCarousel from './ClientCarousel';
import { WrapperStuffShip } from './style';

import oneSlide from '../../static/images/sonica/clogo/clogo1.png';
import twoSlide from '../../static/images/sonica/clogo/clogo2.png';
import threeSlide from '../../static/images/sonica/clogo/clogo3.png';
import fourSlide from '../../static/images/sonica/clogo/clogo4.png';
import fiveSlide from '../../static/images/sonica/clogo/clogo5.png';
import sixSlide from '../../static/images/sonica/clogo/clogo6.png';
import sevenSlide from '../../static/images/sonica/clogo/clogo7.png';
import eightSlide from '../../static/images/sonica/clogo/clogo8.png';

const slides = [
    { key: 0, image: oneSlide },
    { key: 1, image: twoSlide },
    { key: 2, image: threeSlide },
    { key: 3, image: fourSlide },
    { key: 4, image: fiveSlide },
    { key: 5, image: sixSlide },
    { key: 6, image: sevenSlide },
    { key: 7, image: eightSlide },
];

const Talent = () => {
    return (
        <WrapperStuffShip>
            <ClientCarousel slider={slides} />
        </WrapperStuffShip>
    );
};

export default Talent;
