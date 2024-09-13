"use client";
import Image from "next/image";
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
    return (
        <div className=" sticky  top-0 left-0 right-0  z-50 ">
            <div
                className={`xl:hidden flex justify-between items-center px-4  bg-slate-50 z-20 ${isOpen ? "brightness-50" : ""
                    }`}
            >
                <Image
                    src={"/assets/logo/white-logo.png"}
                    alt="logo/"
                    height={140}
                    width={140}
                    quality={100}
                    priority={true}
                    className="object-fill "
                />
                <div
                    onClick={toggleNavBar}
                    className="text-3xl shadow-sm rounded-md p-2 flex my-auto hover:bg-gray-200"
                >
                    {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                </div>
            </div>
            <div
                className={`xl:hidden flex flex-col gap-1 items-center bg-slate-50 py-4 translate-x-0 top-0 right-0 fixed w-[40%] h-full duration-500 overflow-hidden transform ease-in-out transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={toggleNavBar}
            >
                {isOpen && (
                    <div className="absolute top-0 right-0 p-4 z-10">
                        <button
                            onClick={toggleNavBar}
                            className="hover:bg-gray-200 p-2 rounded-full"
                        >
                            <RxCross1 size={24} className="" />
                        </button>
                    </div>
                )}
                {navLinks.map((link: LinkItem, i) => (
                    <Link
                        key={i}
                        href={link.link}
                        onClick={toggleNavBar}
                        className={`hover:bg-blue-300 flex justify-start items-start mt-4 rounded-md py-2 px-4 hover:text-white ${path === link.link ? "text-mainColor font-medium" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default SideHeader;
