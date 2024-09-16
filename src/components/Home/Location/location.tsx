
"use client"
import React from 'react';
import Image from 'next/image';
import { locations } from './locationdata';

const Locations = () => {
    return (
        <div className="flex flex-wrap justify-center space-x-8 px-6 py-6">
            {/* Container for scrolling cities */}
            <div className="flex overflow-hidden space-x-8 group mx-auto">
                {/* First scrollable row */}
                <div className="flex space-x-8 animate-loop-scroll group-hover:pause">
                    {
                        locations.map((location, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3 p-4 h-[150px]  rounded-lg">
                                <Image
                                    src={location.image}
                                    alt={`${location.name} Image`}
                                    width={120}
                                    height={120}
                                    loading='lazy'
                                    className="max-w-none rounded-md object-cover h-[180px]"
                                />
                                <h2 className='text-sm font-semibold text-center'>{location.name}</h2>
                            </div>
                        ))
                    }
                </div>

                {/* Second scrollable row (for loop effect) */}
                <div className="flex space-x-8 animate-loop-scroll group-hover:pause" aria-hidden="true">
                    {
                        locations.map((location, index) => (
                            <div key={index + locations.length} className="flex flex-col items-center space-y-3 p-4 h-[150px]  rounded-lg">
                                <Image
                                    src={location.image}
                                    alt={`${location.name} Image`}
                                    width={120}
                                    height={120}
                                    loading='lazy'
                                    className="max-w-none rounded-md object-cover"
                                />
                                <h2 className='text-sm font-semibold text-center'>{location.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Locations;
