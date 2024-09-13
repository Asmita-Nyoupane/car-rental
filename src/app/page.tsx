import CarBrands from "@/components/Home/Brands";
import TopBanner from "@/components/Home/top-banner";

export default function Home() {
  return (
    <div className="space-y-6 ">
      <TopBanner />
      <section className="py-8 space-y-8">
        <h2 className="header text-center text-primaryColor"> Available Car Brands</h2>
        <CarBrands />
      </section>
    </div>
  );
}
