import { Button } from '@/components/ui/button'
import { Car, Check } from 'lucide-react'
import React from 'react'
import { cars } from './cars'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { MdOutlineAirlineSeatReclineNormal } from 'react-icons/md'
import { FaMoneyCheckDollar } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const AvailableCars = () => {
    return (
        <div className='py-8 space-y-10 w-11/12 mx-auto'>
            {/* <div className='flex justify-between'>
                <div className='space-y-2'>
                    <h2 className="sub-header  text-primaryColor">POPULAR AVAILABLE CARS</h2>
                    <p className="text-center text-gray-500 text-sm ">
                        Choose from a wide selection of premium cars available for your next adventure.
                    </p>
                </div>
                <Button className='text-white text-sm font-semibold' variant={'primary'}>
                    View All
                </Button>
            </div> */}
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center text-lg font-semibold text-primaryColor">Available Cars</h2>
                <h1 className='title capitalize'>
                    Discover Our <span className='text-secondaryColor'>Top-Rated Vehicles</span>
                </h1>
                <p className='text-sm text-gray-500'>Browse our selection of high-quality cars ready for your next adventure. From luxury to economy, find the perfect ride tailored to your needs.</p>
            </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 '>

                {cars.map((car) => (
                    <Card key={car.name} className='relative space-y-6 py-6 rounded-lg'>
                        {/* <Image src={car.image} alt={car.title} height={500} width={500} quality={100} priority={true} className='object-cover rounded-t-md  h-[250px] w-[300px]' /> */}
                        <div className='relative '>
                            <Image
                                src={car.image}
                                alt={car.name}
                                height={500}
                                width={500}
                                quality={100}
                                priority={true}
                                className=' transition-transform duration-300 ease-in-out transform hover:scale-110 '
                            />
                        </div>

                        <h2 className='sub-header px-4'>{car.name}</h2>
                        <div className='text-lg font-semibold text-primaryColor grid grid-cols-2 justify-between items-center gap-4 px-4 '>

                            <div className='flex items-center gap-4'><MdOutlineAirlineSeatReclineNormal /> <span className='text-gray-500  font-md text-sm'>{car.seats} seats</span></div>
                            <div className='flex  items-center gap-4'><FaMoneyCheckDollar /> <span className='text-gray-500 text-sm font-md '>{car.pricePerDay} per Day
                            </span></div>
                            <div className='flex  items-center gap-4'>
                                <IoSpeedometerOutline />
                                <span className='text-gray-500 text-sm font-md '>
                                    {car.speed} km/hr
                                </span>
                            </div>
                            <div className='flex items-center  gap-4'>
                                <BsFuelPumpFill />
                                <span className='text-gray-500 text-sm font-md '>{car.fuelType}
                                </span>
                            </div>
                        </div>
                        <section className='flex flex-col gap-2'>

                            <div className='flex gap-4 items-center px-4'>
                                <span className='text-green-600'>
                                    <FaCheck />
                                </span>
                                <span className='text-gray-500 text-sm font-md '>
                                    {car.insurance}
                                </span>
                            </div>

                            <div className='flex gap-4 items-center px-4'>
                                <span className='text-green-600'>
                                    <FaCheck />
                                </span>
                                <span className='text-gray-500 text-sm font-md '>
                                    {car.maintenance}
                                </span>
                            </div>
                        </section>
                        <div className='flex justify-center'>
                            <Button
                                className='text-white font-semibold transition-transform duration-300 hover:scale-105'
                                variant={'primary'}
                                size={'sm'}
                            >
                                Book Now
                            </Button>
                        </div>

                    </Card>
                ))}
            </div>
            <div className='flex justify-center items-center mt-8'>
                <Button className='flex items-center text-white font-semibold bg-primaryColor hover:bg-secondaryColor py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <span className='mr-2'>Load More</span>
                </Button>
            </div>
        </div >
    )
}

export default AvailableCars