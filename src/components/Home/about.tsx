import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div className='w-11/12 mx-auto  flex  gap-6 flex-col-reverse md:flex-row md:gap-10'>
            <div className='md:w-[50%] flex-col-reverse  '>


                <Image src="/assets/models/ferrari-488-spyder.jpg" alt="about-image" height={1000} width={1000} quality={100} className='transform scale-x-[-1]' />
            </div>
            <div className='space-y-3 flex-1'>
                <h2 className=" text-center text-lg font-semibold text-primaryColor">Our Story</h2>
                <h1 className="title text-center capitalize">
                    Legacy of <span className="text-secondaryColor">Exceptional Service</span>

                </h1>
                <p className='text-gray-500  text-sm leading-relaxed text-start'>

                    Avis is a leading global car rental company, renowned for providing premium and reliable vehicle rental services since 1946. With a presence in over 165 countries, Avis caters to both leisure and business travelers, offering a wide range of vehicles to suit every need.
                    Committed to delivering convenience, innovation, and customer satisfaction, Avis provides easy online booking, flexible rental options, and a variety of services like long-term rentals and loyalty programs.
                    Whether for a quick trip or a long-term stay, Avis ensures a seamless, hassle-free car rental experience
                </p>
            </div>
        </div>
    )
}

export default AboutSection

