import Image from "next/image";
import Link from "next/link";
import { footerLink } from "./footer-link";
import { Input } from "../ui/input";
import { IoSend } from "react-icons/io5";



const TopFooter = () => {
    return (
        <div className="flex flex-col sm:flex-row  gap-10  py-10">

            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 b w-full">
                {/* <div className="flex flex-col    gap-4 md:gap-8"> */}
                {/* <Image
                    src={"/assets/logo/white-logo.png"}
                    alt="logo/"
                    height={140}
                    width={140}
                    quality={100}
                    priority={true}
                    className="object-fill "
                /> */}
                {/* <h1 className=" text-5xl font-extrabold">AVIS</h1>
                    <p className="text-md text-left">
                        Avis is a global car rental company that offers a range of vehicle rental services, primarily targeting both individual and business customers
                    </p> */}
                {/* </div> */}
                {
                    footerLink?.map((footer, i) => (
                        <div className="flex flex-col gap-3 " key={i}>
                            <h2 className="font-semibold text-lg  text-white">
                                {footer.group}
                            </h2>

                            {
                                footer.items.map((item, i) => (
                                    <Link href={item.link} key={i} className="">
                                        <p className="cursor-pointer    text-sm">
                                            {item.name} </p>
                                    </Link>
                                ))
                            }

                        </div>

                    ))
                }
                <div className="flex flex-col gap-3 ">
                    <h2 className="sub-header">NewsLetter</h2>
                    <p className="text-sm">Suscribe us to get the latest news  via email</p>
                    <div className='flex bg-white  px-2 items-center justify-center rounded-full  shadow-md border-2 border-primaryColor '>

                        <Input type="email" placeholder="Enter Email" className="focus-visible:ring-0  focus-visible:outline-0 h-6 placeholder:text-gray-500 text-black" />
                        <span className="text-primaryColor font-semibold   p-2 hover:-rotate-12 hover:transition-all duration-200 ease-in-out  cursor-pointer text-xl" >
                            <IoSend />
                        </span>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default TopFooter;