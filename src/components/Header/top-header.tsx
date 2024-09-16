"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlink";


export type LinkItem = {
    name: string;
    link: string;
};
const TopHeader = () => {
    const path = usePathname();
    return (
        <div className=" sticky  top-0 left-0 right-0 shadow-md z-50  bg-[#F5F5DC] ">


            <div className=" hidden  md:flex justify-between items-center w-11/12 mx-auto  h-16  px-2 py-1 lg:px-4 ">
                <div className=" items-center justify-center ">
                    {/* <Image
                        src={"/assets/logo/white-logo.png"}
                        alt="logo/"
                        height={140}
                        width={140}
                        quality={100}
                        priority={true}
                        className="object-fill "
                    /> */}
                    <h1 className="text-primaryColor text-5xl font-extrabold">AVIS</h1>
                </div>
                <div className="flex text-sm  gap-4 lg:text-md lg:gap-6  items-center justify-end ">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={'/'}
                            className={` text-md font-medium hover:text-primaryColor
                                  ${path === link.link ? "text-primaryColor font-semibold" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>


            </div>
        </div>
    );
};

export default TopHeader;
