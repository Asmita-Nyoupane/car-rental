
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { LinkItem } from "./top-header";
import { navLinks } from "./navlink";

const SideHeader = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavBar = () => {
        setIsOpen(false);
    };

    return (
        <div className="sticky top-0 left-0   right-0 z-50">
            <div
                className={`md:hidden flex justify-between items-center px-4 py-2 bg-[#F5F5DC] z-20`}
            >
                <h1 className="text-primaryColor text-5xl font-extrabold">AVIS</h1>
                <div
                    onClick={toggleNavBar}
                    className="text-2xl font-bold text-primaryColor p-2 flex my-auto mb-2 cursor-pointer"
                >
                    <RxHamburgerMenu />
                </div>
            </div>
            <div
                className={`md:hidden flex flex-col gap-1 items-center bg-slate-50 py-4 fixed top-0 left-0 w-[40%] h-full transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="absolute top-0 flex  justify-between right-0 p-4 z-10 mb-6 w-full  ">
                    <h1 className="text-primaryColor text-3xl font-extrabold">AVIS</h1>
                    <button
                        onClick={closeNavBar}
                        className="text-primaryColor  font-bold p-2  shadow-md rounded-full"
                    >
                        <RxCross1 size={24} />
                    </button>
                </div>
                <div className="text-red-200 w-full h-[2px] py-4"></div>
                <div className="mt-6 flex flex-col gap-6 ">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            onClick={closeNavBar} // Close navbar on link click
                            className={`text-md font-medium hover:text-primaryColor 
                                ${path === link.link ? "text-primaryColor font-semibold" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideHeader;