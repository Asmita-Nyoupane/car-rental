// import Image from 'next/image'
// import React from 'react'
// import { Card } from '../ui/card'
// import { Button } from '../ui/button'

// const BuyCar = () => {
//     return (
//         <div className='w-11/12 mx-auto py-10 flex   flex-wrap items-center justify-center  gap-6 '>

//             <Card className='space-y-3 px-4 py-3'>
//                 <Image src="/assets/images/buy-car.jpg" alt="about-image" height={300} width={300} quality={100} className='transform scale-x-[-1] ' />
//                 <h2 className="sub-header  text-primaryColor">AVIS CAR SALES</h2>
//                 <p className='text-gray-500  text-sm leading-relaxed text-left'>
//                     Explore our wide selection of top-quality, budget-friendly vehicles.
//                 </p>
//                 <Button className='text-white text-sm font-semibold ' variant={'primary'}>
//                     Shop Now
//                 </Button>
//             </Card>
//             <Card className='space-y-3 px-4 py-3 '>
//                 <Image src="/assets/images/buy-car.jpg" alt="about-image" height={300} width={300} quality={100} className='transform scale-x-[-1] ' />
//                 <h2 className="sub-header  text-primaryColor">
//                     RUBYCAR.COM
//                 </h2>
//                 <p className='text-gray-500  text-sm leading-relaxed text-left'>
//                     100% Online Car Buying Delivered Straight to Your Door!
//                 </p>
//                 <Button className='text-white text-sm font-semibold ' variant={'primary'}>
//                     Shop Now
//                 </Button>
//             </Card>


//         </div>
//     )
// }

// export default BuyCar
import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const BuyCar = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/banners/redcar (2).jpeg')` }}>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content on top of the background image */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 h-full w-full py-10 px-4">

                {/* AVIS CAR SALES */}
                <Card className='bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full md:w-1/3 md:h-[230px] lg:h-[186px]'>
                    <h2 className="sub-header text-primaryColor text-2xl font-bold">AVIS CAR SALES</h2>
                    <p className='text-gray-500 text-sm leading-relaxed my-4'>
                        Explore our wide selection of top-quality, budget-friendly vehicles.
                    </p>
                    <Button className='text-white text-sm md:font-semibold' variant={'primary'}>
                        Shop Now
                    </Button>
                </Card>

                {/* RUBYCAR.COM */}
                <Card className='bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full md:w-1/3 md:h-[230px] lg:h-[186px]'>
                    <h2 className="sub-header text-primaryColor text-2xl font-bold">RUBYCAR.COM</h2>
                    <p className='text-gray-500 text-sm leading-relaxed my-4'>
                        100% Online Car Buying Delivered Straight to Your Door!
                    </p>
                    <Button className='text-white text-sm  md:font-semibold' variant={'primary'}>
                        Shop Now
                    </Button>
                </Card>

            </div>
        </div>
    )
}

export default BuyCar
