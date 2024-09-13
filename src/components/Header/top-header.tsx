"use client";
import Image from "next/image";
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
        <div className=" sticky  top-0 left-0 right-0 shadow-md z-50 bg-gray-100 text-black">
            <div className=" hidden xl:flex justify-between items-center w-11/12 mx-auto  h-20 ">
                <div className=" flex items-center justify-center ">
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
                <div className="flex gap-4  items-center justify-center ">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={'/'}
                            className={` text-md  hover:text-primaryColor
                                  ${path === link.link ? "text-primaryColor font-semibold " : ""
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
