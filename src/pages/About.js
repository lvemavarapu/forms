import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import travel from '../assets/travel.png';
export default function About() {
    return (
        <div><h1>hello</h1>
            <Carousel>
                <div>
                    <img src={travel} width={400} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={travel}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={travel} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>

    )
}