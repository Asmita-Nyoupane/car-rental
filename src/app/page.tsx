import AboutSection from "@/components/Home/about";
import AvailableCars from "@/components/Home/AvailableCars/available-cars";
import CarBrands from "@/components/Home/Brands";
import BuyCar from "@/components/Home/buy-car";
import Locations from "@/components/Home/Location/location";
import Offer from "@/components/Home/offers";
import Service from "@/components/Home/service/service";
import Testimonials from "@/components/Home/Testimonial/Testimonials";

import TopBanner from "@/components/Home/top-banner";
import Partners from "@/components/Home/TravelPartner/benefit-partner";



export default function Home() {
  return (
    <div className="flex flex-col gap-20 ">
      <TopBanner />
      <Offer />
      <section className="py-12  bg-slate-50">
        <AboutSection />
      </section>
      <Partners />
      <section className="py-12  bg-slate-50">
        <Service />
      </section>

      <AvailableCars />

      <div>
        <section className="py-10 space-y-3 bg-slate-50">
          <h2 className="text-center text-lg font-semibold text-primaryColor">Car Brands</h2>
          <h1 className='title text-center capitalize '>
            Discover Premium Choices from Top-Rated <span className='text-secondaryColor'>Car Brands</span>
          </h1>
          <CarBrands />
        </section>
        <BuyCar />
      </div>


      <Testimonials />

      <section className="py-10 space-y-3 bg-slate-50">
        <h2 className="text-center text-lg font-semibold text-primaryColor">Explore Our Rental Locations</h2>
        <h1 className='title text-center capitalize '>
          FIND YOUR CAR RENTAL IN <span className='text-secondaryColor'>POPULAR CITIES</span>
        </h1>
        {/* <h2 className="sub-header text-center text-primaryColor capitalize">FIND YOUR CAR RENTAL IN POPULAR CITIES</h2> */}
        <Locations />
      </section>
    </div>
  );
}
