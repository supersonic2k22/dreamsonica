import React from "react";
import CarouselComponent from "./CarouselComponent";
import {WrapperStuffShip} from "./style";

const collectionStuff = [
    {key: 0, image: 'assets/stuff/unnamed (2).jpg'},
    {key: 1, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 2, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 3, image: 'assets/stuff/unnamed (2).jpg'},
    {key: 4, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 5, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 6, image: 'assets/stuff/unnamed (2).jpg'},
    {key: 7, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 8, image: 'assets/stuff/kingfisher-1.jpg'},
    {key: 9, image: 'assets/stuff/unnamed (2).jpg'},
    {key: 10, image: 'assets/stuff/1b6ba9567a62af8034f5f2a507a04369.jpg'},
    {key: 11, image: 'assets/stuff/kingfisher-1.jpg'}
];

const Talent = () => {
    return (
        <WrapperStuffShip>
            <h3 className="stuff_ship_title">Lorem ipsum dolor sit</h3>
            <CarouselComponent collectionSlider={ collectionStuff } />
        </WrapperStuffShip>
    )
}

export default Talent;