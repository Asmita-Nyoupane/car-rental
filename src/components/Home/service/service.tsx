import React from 'react'
import { serviceData } from './data'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const Service = () => {
    return (
        <section className='space-y-8' >

            {/* <div className="space-y-2">
                <h2 className="sub-header text-center text-primaryColor capitalize">OUR SERVICE</h2>
                <p className="text-gray-500 text-sm text-center">Avis provides a variety of car rental services, both for personal and business needs</p>
            </div> */}
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center text-lg font-semibold text-primaryColor">Our Service</h2>
                <h1 className='title capitalize text-center'>
                    Explore a Range of Premium <span className='text-secondaryColor'>Car Rental Services</span> for Every Journey
                </h1>
                <p className='text-sm text-gray-500 text-center'>Convenient, flexible, and affordable car rental solutions designed to meet your travel needs.</p>

            </div>
            <div
                className='flex flex-wrap gap-5 justify-center items-center p-4'
            >

                {
                    serviceData.map((service, i) => (
                        <div className={`animate-slide-in ${i < 2 ? 'from-left' : 'from-right'}`} key={i}>
                            <Card className='flex flex-col gap-2 items-center justify-center bg-white w-[200px] h-[200px] p-4 '>
                                <div className=' flex justify-between items-center'>

                                    <Image src={service.image} alt={service.title} height={200} width={200} className='size-20 rounded-md' />
                                    {/* <h1 className='text-sm font-semibold'>{service.title}</h1> */}
                                </div>
                                <p className='text-sm text-gray-500 font-light'>
                                    {service.description}
                                </p>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Service