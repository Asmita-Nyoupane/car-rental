

// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Button } from '../ui/button';
// import { carBrands } from '../../lib/car-brands';
// import { DatePicker, Space, Select } from 'antd';
// import dayjs from 'dayjs';

// const dateFormat = 'YYYY/MM/DD';

// const onChange = (value: string) => {
//     console.log(`selected ${value}`);
// };

// const onSearch = (value: string) => {
//     console.log('search:', value);
// };

// const TopBanner = () => {
//     const [isLoading, setIsLoading] = useState(true);

//     return (
//         <div className="relative">
//             {/* Loading Placeholder */}
//             {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-600 h-[500px]">
//                     <span className="text-xl text-gray-500">Loading...</span>
//                 </div>
//             )}

//             {/* Background Image */}
//             <div className="relative h-screen">
//                 <Link href={'/'}>
//                     <Image
//                         src={"/assets/banners/banner-2.jpg"}
//                         alt="Background Image"
//                         height={3000}
//                         width={3000}
//                         quality={100}
//                         priority={true}
//                         className="object-cover h-[600px] w-full brightness-75"
//                         onLoad={() => setIsLoading(false)}
//                     />
//                 </Link>

//                 {/* Overlay Content: Quote and Search Bar */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 text-center">
//                     {/* Quote Section */}
//                     <h2 className="header text-white w-[70%] shadow-lg">
//                         Hit the Road with <span className="text-primaryColor">Our Easy Rental</span>
//                     </h2>

//                     {/* Search Input Section */}
//                     <div className="bg-black/25 p-6 rounded-lg shadow-md w-[90%] md:w-[70%]  lg:w-[90%] xl:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 items-center justify-center">
//                         {/* Location Input */}
//                         <Input type="text" placeholder="Enter Location" className="w-full md:w-64" />

//                         {/* Car Brand Selector */}
//                         <Select
//                             showSearch
//                             placeholder="Select Car Brand"
//                             optionFilterProp="label"
//                             onChange={onChange}
//                             onSearch={onSearch}
//                             options={carBrands.map((brand) => ({ label: brand, value: brand }))}
//                             className="w-full md:w-64 text-start"
//                             style={{ height: '36px' }}
//                         />

//                         {/* Date Picker */}
//                         <Space direction="vertical" size={12} className="w-full md:w-64">
//                             <DatePicker
//                                 defaultValue={dayjs('2015/01/01', dateFormat)}
//                                 format={dateFormat}
//                                 onChange={(date, dateString) => console.log(date, dateString)}
//                                 className="h-9 w-full rounded-md border border-transparent bg-white px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
//                             />
//                         </Space>

//                         {/* Search Button */}
//                         <Button className=" md:w-auto bg-primaryColor text-white font-semibold " variant={'primary'}>
//                             Search
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TopBanner;
import React from 'react';
import { Button } from '../ui/button';

const TopBanner = () => {
    return (
        <section className="relative w-full h-screen">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/banners/car-video.mp4"
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
                    </span>    is not a need, it's an <span className=' text-secondaryColor'>
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
