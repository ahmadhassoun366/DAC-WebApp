"use client"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ads1 from "../../../../public/images/ads1.jpeg"
import ads2 from "../../../../public/images/ads2.jpeg"
import Image from "next/image";

const AdsCard = () => (
    <Carousel>
        <div>
            <Image
                src={ads1}
                alt=""
                className="w-2/3 sm:w-full md:w-2/3 lg:w-full drop-shadow-lg"
            />
        </div>
        <div>
            <Image
                src={ads2}
                alt=""
                className="w-2/3 sm:w-full md:w-2/3 lg:w-full drop-shadow-lg"
            />
        </div>
        <div>
            <Image
                src={ads1}
                alt=""
                className="w-2/3 sm:w-full md:w-2/3 lg:w-full drop-shadow-lg"
            />
        </div>
        <div>
            <Image
                src={ads2}
                alt=""
                className="w-2/3 sm:w-full md:w-2/3 lg:w-full drop-shadow-lg"
            />
        </div>
    </Carousel>
);
export default AdsCard