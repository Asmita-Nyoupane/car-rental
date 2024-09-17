import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div className='w-11/12 mx-auto  flex  gap-6  flex-col md:flex-row md:gap-10'>

            <div className='space-y-3 w-[48%]'>
                <h2 className="  text-lg font-semibold text-primaryColor">Our Story</h2>
                <h1 className="title  capitalize">
                    Legacy of <span className="text-secondaryColor">Exceptional Service</span>

                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Avis is a leading global car rental company, renowned for providing premium and reliable vehicle rental services since 1946. With a presence in over 165 countries, Avis caters to both leisure and business travelers, offering a wide range of vehicles to suit every need.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Committed to delivering convenience, innovation, and customer satisfaction, Avis provides easy online booking, flexible rental options, and a variety of services like long-term rentals and loyalty programs. Whether for a quick trip or a long-term stay, Avis ensures a seamless, hassle-free car rental experience.
                </p>
            </div>
            <div className='flex-1'>
                <Image
                    src="/assets/models/ferrari-488-spyder.jpg"
                    alt="about-image"
                    height={800}
                    width={800}
                    quality={100}

                />
            </div>

            {/* Image and background section */}
            {/* <div className='flex-1 relative'>
                {/* Background color box */}
            {/* <div className='absolute inset-0 w-[50%] h-[calc(50%+100px)] bg-orange-500 mx-auto z-10 top-44 transform -translate-y-1/2'>
            </div> */}

            {/* Image */}
            {/* <div className='relative w-full h-[300px] md:w-[700px] md:h-[700px] z-50 mx-auto'>
                <Image
                    src="/assets/models/ferrari-488-spyder.jpg"
                    alt="about-image"
                    height={800}
                    width={800}
                    quality={100}

                />
            </div>
        </div>  */}




        </div >
    )
}

export default AboutSection

