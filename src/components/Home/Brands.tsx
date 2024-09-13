
"use client"
import React from 'react';
import { carbrandImg } from '../../lib/brand-img';
import Image from 'next/image';

const CarBrands = () => {


    return (
        <div className="flex overflow-hidden space-x-16 group w-[98%]mx-auto">
            <div

                className="flex space-x-16 animate-loop-scroll  group-hover:paused"   >
                {
                    carbrandImg.map((brand, index) => (

                        <Image
                            key={index}
                            src={brand.image}
                            alt={brand.name}
                            width={100}
                            height={100}
                            loading='lazy'
                            className="max-w-none"
                        />

                    ))
                }

            </div>
            <div

                className="flex space-x-16 animate-loop-scroll  group-hover:paused" aria-hidden="true"  >
                {
                    carbrandImg.map((brand, index) => (

                        <Image
                            key={index}
                            src={brand.image}
                            alt={brand.name}
                            width={100}
                            height={100}
                            loading='lazy'
                            className="max-w-none"
                        />

                    ))
                }


            </div>
        </div>
    );
};

export default CarBrands;
