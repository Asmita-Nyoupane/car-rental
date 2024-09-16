import React from 'react'
import {
    Card,

} from "@/components/ui/card"
import { carRentalOffers } from '@/lib/offers'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaArrowDown } from 'react-icons/fa'

const Offer = () => {
    return (
        <div className=' space-y-10 w-11/12 mx-auto'>
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center text-lg font-semibold text-primaryColor">Our Best Offers</h2>
                <h1 className='title capitalize'>
                    Explore all the ways <span className='text-secondaryColor'>you can save
                    </span>
                </h1>
                <p className='text-sm text-gray-500'>Save on your next daily or monthly car rental with these deals and offers</p>

            </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  '>

                {carRentalOffers.map((offer) => (
                    <Card key={offer.id} className='group overflow-hidden shadow-lg rounded-lg transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl'>
                        {/* <Image src={offer.image} alt={offer.title} height={500} width={500} quality={100} priority={true} className='object-cover rounded-t-md  h-[250px] w-[300px]' /> */}
                        <div className='relative '>
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                height={500}
                                width={500}
                                quality={100}
                                priority={true}
                                className='object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110 w-full h-[250px] rounded-t-lg'
                            />
                            {/* <span className='bg-secondaryColor py-1 px-2 rounded-r-lg text-sm  text-white font-medium  absolute top-0'>{offer.discountPercentage}% OFF</span> */}
                            <span className='bg-primaryColor py-1 px-2 rounded-br-lg text-xs text-white font-medium absolute top-0 left-0'>
                                {offer.discountPercentage}% OFF
                            </span>
                        </div>

                        <div className='p-4'>
                            <h2 className='text-center text-lg font-semibold mb-2'>{offer.title}</h2>
                            <p className='text-sm text-gray-500 text-center mb-4'>{offer.description}</p>
                            <div className='flex items-center justify-center'>
                                <Button className='text-white font-semibold' variant={'primary'}>
                                    Book Now
                                </Button>
                            </div>
                        </div>

                    </Card>
                ))}
            </div>
            <div className='flex justify-center items-center mt-8'>
                <Button className='flex items-center text-white font-semibold bg-primaryColor hover:bg-secondaryColor py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <span className='mr-2'>Load More</span>
                </Button>
            </div>
        </div>
    )
}

export default Offer