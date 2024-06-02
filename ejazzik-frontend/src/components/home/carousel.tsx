import React from "react";
import {Carousel as C} from "rsuite";
import Image from "next/image";
import img1 from "../../../public/carousel1.jpeg"
import img2 from "../../../public/carousel2.jpeg"
import img3 from "../../../public/carousel3.jpeg"

export const Carousel = () => {
    return(
        <div className="h-screen carousel-container">
            <div className="image-overlay z-10">
                <div  className="text-7xl max-lg:text-4xl text-white" >Poznawaj świat z eJazzik!</div>
            </div>
            <C className="carousel" autoplay autoplayInterval={6000}>
                <Image src={img1} alt={"houseOne"} priority className="imageCarousel" />
                {/*<Image src={img2} alt={"houseTwo"} className="imageCarousel" />*/}
                <Image src={img3} alt={"houseThree"} className="imageCarousel" />
            </C>
        </div>
    )
}