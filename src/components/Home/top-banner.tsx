
import React from 'react';
import { Button } from '../ui/button';
const bannervideo = '/assets/banners/car-video.mp4';

const TopBanner = () => {
    return (
        <section className="relative w-full h-screen">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bannervideo}
                // type="video/mp4"
                autoPlay
                loop
                muted
            >
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center">
                    <span className='text-secondaryColor'>
                        Luxury
                    </span>    is not a need, it&apos;s an <span className='text-secondaryColor'>
                        Experience  </span>
                </h1>
                <p className="mt-4 text-center  md:text-xl">
                    Travel with the finest cars and make every journey unforgettable.
                </p>

                <div className="flex space-x-4 mt-6">
                    {/* Button with hover effect */}
                    <Button
                        className="text-white bg-primaryColor hover:bg-primaryColor-dark transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3 rounded-md shadow-lg"
                        size={'lg'}
                    >
                        Reserve Your Ride
                    </Button>

                    {/* Secondary Button with border and hover effect */}
                    <Button
                        className="text-white bg-transparent border-2 border-secondaryColor hover:bg-secondaryColor transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3 rounded-md shadow-lg"
                        size={'lg'}
                    >
                        Browse Cars
                    </Button>
                </div>
            </div>

        </section>
    );
};

export default TopBanner;
