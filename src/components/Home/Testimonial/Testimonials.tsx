import { customerTestimonials } from '@/lib/testimonials'
import React from 'react'
import { Card } from '../../ui/card'
import Image from 'next/image'
import Star from './star'
import { Button } from '@/components/ui/button'


const Testimonials = () => {
    return (
        // <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 '>
        //     {
        //         customerTestimonials.map((testimonial, i) => (
        //             <Card key={i} className='flex flex-col gap-4 p-4'>

        //                 <div className="flex gap-4 item-start justify-start ">
        //                     <Image
        //                         src={testimonial.image}
        //                         height={800}
        //                         width={800}
        //                         quality={100}
        //                         priority={true}
        //                         alt={testimonial.name}
        //                         className="rounded-full   size-20 object-fill"

        //                     />
        //                     <div className="flex flex-col gap-2">
        //                         <h4 className="font-semibold">{testimonial.name}</h4>
        //                         <Star stars={testimonial.rating} />
        //                     </div>
        //                 </div>
        //                 <p className="text-gray-500 text-sm text-balance ">
        //                     {testimonial.description}
        //                 </p>
        //             </Card>
        //         ))
        //     }
        // </div>
        <section className="w-11/12 mx-auto space-y-10">
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className=" text-center text-lg font-semibold text-primaryColor">What Our Customers Are Saying</h2>
                <h1 className='title capitalize'>
                    See How Our Clients <span className='text-secondaryColor'>Love Their Rentals</span>
                </h1>
                <p className='text-sm text-gray-500'>Read real feedback from our satisfied customers who have enjoyed our top-notch car rental services. Discover how we’ve made their journeys memorable and stress-free.</p>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
                {customerTestimonials.map((testimonial, i) => (
                    <Card key={i} className='flex flex-col gap-4 p-4 shadow-lg rounded-xl bg-white'>
                        <div className="flex items-center gap-4">
                            <div className='rounded-full'>
                                <Image
                                    src={testimonial.image}
                                    height={300}
                                    width={300}

                                    alt={testimonial.name}
                                    className="object-cover w-20 h-20 rounded-full object-top"
                                />

                            </div>
                            <div className="flex flex-col ">
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500 font-light py-[2px]">{testimonial.location}</span>
                                <Star stars={testimonial.rating} />
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            {testimonial.description}
                        </p>
                        <span className="text-xs text-gray-400 mt-2 self-end">{new Date(testimonial.date).toLocaleDateString()}</span>
                    </Card>
                ))}
            </div>
            <div className='flex justify-center items-center mt-8'>
                <Button className='flex items-center text-white font-semibold bg-primaryColor hover:bg-secondaryColor py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <span className='mr-2'>Load More</span>
                </Button>
            </div>
        </section>
    )
}

export default Testimonials