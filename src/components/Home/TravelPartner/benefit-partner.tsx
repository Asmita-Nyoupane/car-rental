import React from 'react'
import { travelPartnerBenefits } from './data'
import Image from 'next/image'

import { Card } from '../../ui/card'
import { Button } from '@/components/ui/button'
const Partners = () => {
    return (
        <section className='space-y-10' >
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center text-lg font-semibold text-primaryColor ">Exclusive Partnership</h2>
                <h1 className='title capitalize'>
                    BENEFITS FROM OUR <span className='text-secondaryColor'>TRAVEL PARTNERS
                    </span>
                </h1>
                <p className='text-sm text-gray-500 text-center'>Save on your next daily or monthly car rental with these deals and offers</p>

            </div>
            <div
                // className='grid  grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center mx-auto md:w-[86%] lg:w-[74%]  2xl:w-[64%] px-4'
                className='flex flex-wrap gap-5 justify-center items-center p-4'
            >

                {
                    travelPartnerBenefits.map((partner, i) => (

                        <Card key={i} className='flex flex-col gap-4 items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 md:hover:shadow-2xl md:hover:scale-105 w-[300px] h-[350px]'>
                            <div className=' relative overflow-hidden rounded-md'>

                                <Image src={partner.image} alt={partner.partnerName} height={300} width={300} className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105' />
                                {/* <h1 className='text-sm font-semibold'>{partner.title}</h1> */}
                            </div>
                            <p className='text-sm text-gray-500 text-center'>
                                {partner.benefit}
                            </p>
                            <div className='flex items-center justify-center '>

                                <Button className='text-white font-semibold ' variant={'primary'}>
                                    Reserve Now
                                </Button>
                            </div>
                        </Card>

                    ))
                }
            </div>
        </section>

    )
}

export default Partners