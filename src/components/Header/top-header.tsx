"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./navlink";

export type LinkItem = {
    name: string;
    link: string;
};

const TopHeader = () => {
    const path = usePathname();
    const [bgColor, setBgColor] = useState("bg-black/90");

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setBgColor("bg-black"); // Change to your desired color when scrolled
        } else {
            setBgColor("bg-black/90"); // Original color
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 left-0 right-0 shadow-md z-50 ${bgColor}`}>
            <div className="hidden md:flex justify-between items-center w-11/12 mx-auto h-16 px-2 py-1 lg:px-4">
                <div className="items-center justify-center">
                    <h1 className="text-primaryColor text-5xl font-extrabold">AVIS</h1>
                </div>
                <div className="flex text-sm gap-4 lg:text-md lg:gap-6 items-center justify-end">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`text-md font-medium transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-secondaryColor
                                  ${path === link.link ? "text-secondaryColor font-bold" : "text-gray-200"}
                            `}
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