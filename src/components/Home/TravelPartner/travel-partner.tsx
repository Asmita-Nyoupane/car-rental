// import React from 'react'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { carRentalOffers } from '@/lib/offers'
// import { off } from 'process'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { travelPartnersDiscounts } from './partner'


// const TravelPartner = () => {
//     return (
//         <div className='py-8 space-y-8 w-11/12 mx-auto'>
//             <div className='flex justify-between'>

//                 <h2 className="sub-header text-center text-primaryColor">OUR TRAVELLING PARTNERS</h2>
//                 <Button className='text-white ' variant={'primary'}>
//                     View All
//                 </Button>
//             </div>
//             <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3   gap-4 '>

//                 {travelPartnersDiscounts.map((offer, i) => (
//                     <Card key={i} className='space-y-2 '>
//                         {/* <Image src={offer.image} alt={offer.title} height={500} width={500} quality={100} priority={true} className='object-cover rounded-t-md  h-[250px] w-[300px]' /> */}
//                         <div className='relative overflow-hidden'>
//                             <Image
//                                 src={offer.image}
//                                 alt={offer.title}
//                                 height={500}
//                                 width={500}
//                                 quality={100}
//                                 priority={true}
//                                 className='object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg h-[250px] w-full'
//                             />
//                         </div>

//                         <h2 className='text-center text-lg font-semibold '>{offer.title}</h2>
//                         <p className='text-sm  text-gray-500 px-4 text-center'>{offer.description}</p>
//                         <div className='flex items-center justify-center py-4'>

//                             <Button className='text-white font-semibold ' variant={'primary'}>
//                                 Reserve Now
//                             </Button>
//                         </div>

//                     </Card>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default TravelPartner