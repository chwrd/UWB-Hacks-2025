import React from 'react';
import Link from 'next/link';
import { Julius_Sans_One } from "next/font/google";
import Image from 'next/image';

// Logo font
const juliusSansOne = Julius_Sans_One({
    subsets: ["latin"],
    weight: "400",
});

export default function Footer() {
    return (
        <footer className="flex flex-row justify-around bg-gray-800 text-gray-200 py-6">
            <div className='p-20'>
                <div className="md:flex md:items-center md:gap-12">
                    <Link className="block " href="/">
                        <span className="sr-only">Home</span>
                        <h1 className={`${juliusSansOne.className} text-4xl `}>
                            soloGO
                        </h1>
                    </Link>
                </div>
                <p>© 2025 soloGo</p>
                <p>Connected by Journeys, inspired by the World</p>
            </div>


            {/* Credits */}
            <div className='flex flex-row gap-10 px-20'>
                {/* Programmer */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold text-center mb-5">Programmers</h2>
                    <div className='flex flex-row gap-10'>
                        <div>
                            <a href="https://www.linkedin.com/in/howard-ch/ ">
                                <h3 className={`text-2xl font-semibold ${juliusSansOne.className}`}>Howard Cheng</h3>

                                <p className="flex items-center justify-center mb-2">

                                    <Image src={"/linkedin.png"} alt="LinkedIn" width={100} height={80} />

                                </p>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/phohanh-tran/">
                                <h3 className={`text-2xl font-semibold ${juliusSansOne.className}`}>Phohanh Tran</h3>

                                <p className="flex items-center justify-center mb-2">

                                    <Image src={"/linkedin.png"} alt="LinkedIn" width={100} height={80} />

                                </p>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Designer */}
                <div className='flex flex-col justify-center'>
                    <h2 className="text-xl font-semibold text-center mb-5">Designer</h2>
                    <a href="https://www.linkedin.com/in/luke-ku/ ">
                        <h3 className={`text-2xl font-semibold ${juliusSansOne.className}`}>Luke Ku</h3>

                        <p className="flex items-center justify-center mb-2">

                            <Image src={"/linkedin.png"} alt="LinkedIn" width={100} height={80} />

                        </p>
                    </a>
                </div>

            </div>
        </footer>
    );
};
