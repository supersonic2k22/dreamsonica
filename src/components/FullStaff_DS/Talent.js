import React from "react";
import CarouselComponent from "./CarouselComponent";
import {WrapperStuffShip} from "./style";

const collectionStuff = [
    {key: 0, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/06/1.jpg.webp'},
    {key: 1, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/06/7-copy.png.webp'},
    {key: 2, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/07/4-2.png.webp'},
    {key: 3, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/06/6-1.png.webp'},
    {key: 4, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/07/5-1.png.webp'},
    {key: 5, image: 'https://www.newfireglobal.com/wp-content/uploads/2020/07/2-1.png.webp'}
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