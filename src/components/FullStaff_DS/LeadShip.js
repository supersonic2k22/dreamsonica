import React from "react";
import CarouselComponent from "./CarouselComponent";
import {WrapperStuffShip} from './style'
const collectionStuff = [
    {key: 0, image: 'assets/stuff/unnamed (2).jpg'},
    {key: 0, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 0, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 0, image: 'assets/stuff/unnamed (1).jpg'},
    {key: 0, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 0, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 0, image: 'assets/stuff/unnamed (1).jpg'},
    {key: 0, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 0, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 0, image: 'assets/stuff/unnamed.jpg'},
    {key: 0, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 0, image: 'assets/stuff/kingfisher-1.jpg'}
];

const LeadShipCarousel = () => {
    return (
            <WrapperStuffShip>
                <h3 className="stuff_ship_title">Lorem ipsum dolor sit</h3>
                <CarouselComponent collectionSlider={ collectionStuff }/>
            </WrapperStuffShip>
        )
}

export default LeadShipCarousel