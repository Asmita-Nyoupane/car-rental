import Link from "next/link";
import React from "react";
import { socialMediaLinks } from "./footer-link";

const BottomFooter = () => {
    return (
        <div className="grid  text-sm grid-cols-2 md:grid-cols-3  gap-5 md:gap-10 py-4  ">

            <p className="col-span-2">All Copyright Belongs to <span className="text-secondaryColor">Tradevise International
            </span></p>


            {/* <div className="flex gap-3   ">
                <Link href={"/"} className="border-r-[1px] border-white pr-4 ">
                    Terms of Condition
                </Link>
                <Link href={"/"}>Privacy Policy</Link>
            </div> */}
            <div className="flex gap-4 justify-end ">
                {
                    socialMediaLinks?.map((media) => (
                        <Link href={media.link} key={media.name} className="hover:text-secondaryColor">

                            <span className=" text-2xl font-bold  ">
                                {<media.icon />}
                            </span>


                        </Link>
                    ))
                }

            </div>

        </div>
    );
};

export default BottomFooter;
